import { Component, Input, Output, EventEmitter, AfterViewInit, ElementRef, OnChanges } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: '[ng2-st-add-button]',
  template: `
  <ng-container *ngIf="addNewButtonIcon; else ButtonContent">
  <button nbButton ghost status="primary" *ngIf="isActionAdd"  (click)="onAdd($event)">
      <nb-icon [icon]="addNewButtonIcon"></nb-icon>
  </button>
  </ng-container>
  <ng-template #ButtonContent>
    <button nbButton ghost status="primary" *ngIf="isActionAdd " 
        [innerHTML]="addNewButtonContent" (click)="onAdd($event)"></button>
  </ng-template>
  `,
})
export class AddButtonComponent implements AfterViewInit, OnChanges {

  @Input() grid: Grid;
  @Input() source: DataSource;
  @Output() create = new EventEmitter<any>();

  isActionAdd: boolean;
  addNewButtonIcon: string;
  addNewButtonContent: any;

  constructor(private ref: ElementRef,private domSanitizer:DomSanitizer) {
  }

  ngAfterViewInit() {
    this.ref.nativeElement.classList.add('ng2-smart-actions-title', 'ng2-smart-actions-title-add');
  }

  ngOnChanges() {
    this.isActionAdd = this.grid.getSetting('actions.add');
    this.addNewButtonContent = this.domSanitizer.bypassSecurityTrustHtml(this.grid.getSetting('add.addButtonContent'));
    this.addNewButtonIcon = this.grid.getSetting('add.addButtonIcon');
  }

  onAdd(event: any) {
    event.preventDefault();
    event.stopPropagation();
    if (this.grid.getSetting('mode') === 'external') {
      this.create.emit({
        source: this.source,
      });
    } else {
      this.grid.createFormShown = true;
    }
  }
}
