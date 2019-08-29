import { Component, Input, EventEmitter, OnChanges } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';

@Component({
  selector: 'ng2-st-tbody-create-cancel',
  template: `
  <ng-container *ngIf="saveButtonIcon; else saveButtonContent">
    <button nbButton ghost status="success"  (click)="onSave($event)">
        <nb-icon [icon]="saveButtonIcon"></nb-icon></button>
  </ng-container>
  <ng-container *ngIf="cancelButtonIcon; else cancelButtonContent">
    <button nbButton ghost status="warning"  (click)="onCancelEdit($event)">
      <nb-icon [icon]="cancelButtonIcon"></nb-icon>
    </button>
  </ng-container>
  <ng-template #saveButtonContent>
    <button nbButton ghost status="success" [innerHTML]="saveButtonContent" (click)="onSave($event)"></button>
  </ng-template>

  <ng-template #cancelButtonContent>
    <button nbButton ghost status="warning" [innerHTML]="cancelButtonContent"(click)="onCancelEdit($event)"></button>
  </ng-template>
  `,
})
export class TbodyCreateCancelComponent implements OnChanges {

  @Input() grid: Grid;
  @Input() row: Row;
  @Input() editConfirm: EventEmitter<any>;

  cancelButtonContent: string;
  saveButtonContent: string;
  cancelButtonIcon: string;
  saveButtonIcon: string;

  onSave(event: any) {
    event.preventDefault();
    event.stopPropagation();

    this.grid.save(this.row, this.editConfirm);
  }

  onCancelEdit(event: any) {
    event.preventDefault();
    event.stopPropagation();

    this.row.isInEditing = false;
  }

  ngOnChanges() {
    this.saveButtonContent = this.grid.getSetting('edit.saveButtonContent');
    this.cancelButtonContent = this.grid.getSetting('edit.cancelButtonContent')
    this.saveButtonIcon = this.grid.getSetting('edit.saveButtonIcon');
    this.cancelButtonIcon = this.grid.getSetting('edit.cancelButtonIcon')
  }
}
