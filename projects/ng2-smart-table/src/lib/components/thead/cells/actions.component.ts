import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { Grid } from '../../../lib/grid';

@Component({
  selector: 'ng2-st-actions',
  template: `
  <ng-container *ngIf="createButtonIcon; else createButtonContent">
  <button nbButton ghost status="success" (click)="$event.preventDefault();create.emit($event)">
  <nb-icon [icon]="createButtonIcon"></nb-icon>
  </button>
</ng-container>
<ng-container *ngIf="cancelButtonIcon; else cancelButtonContent">
  <button nbButton ghost status="warning" (click)="$event.preventDefault();grid.createFormShown = false;">
  <nb-icon [icon]="cancelButtonIcon"></nb-icon>
  </button>
</ng-container>
<ng-template #createButtonContent>
  <button nbButton ghost status="success" [innerHTML]="createButtonContent"
      (click)="$event.preventDefault();create.emit($event)"></button>
</ng-template>
<ng-template #cancelButtonContent>
  <button nbButton ghost status="warning" [innerHTML]="cancelButtonContent"
      (click)="$event.preventDefault();grid.createFormShown = false;"></button>
</ng-template>`,
})
export class ActionsComponent implements OnChanges {

  @Input() grid: Grid;
  @Output() create = new EventEmitter<any>();

  createButtonContent: string;
  cancelButtonContent: string;
  createButtonIcon: string;
  cancelButtonIcon: string;

  ngOnChanges() {
    this.createButtonContent = this.grid.getSetting('add.createButtonContent');
    this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
    this.createButtonIcon = this.grid.getSetting('add.createButtonIcon');
    this.cancelButtonIcon = this.grid.getSetting('add.cancelButtonIcon');
  }
}
