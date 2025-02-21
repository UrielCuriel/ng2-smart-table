import {Component, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
import { DataSource } from '../../../lib/data-source/data-source';

@Component({
  selector: 'ng2-st-tbody-edit-delete',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <ng-container *ngIf="editRowButtonIcon; else editButtonContent">
    <button nbButton ghost status="primary" *ngIf="isActionEdit"  (click)="onEdit($event)">
    <nb-icon [icon]="editRowButtonIcon"></nb-icon></button>
  </ng-container>
  <ng-container *ngIf="deleteRowButtonIcon; else deleteButtonContent">
  <button nbButton ghost status="danger" *ngIf="isActionDelete"  (click)="onDelete($event)">
  <nb-icon [icon]="deleteRowButtonIcon"></nb-icon>
  </button>
</ng-container>
  <ng-template #editButtonContent>
    <button nbButton ghost status="primary" *ngIf="isActionEdit" [innerHTML]="editRowButtonContent" (click)="onEdit($event)"></button>
    </ng-template>
 
  <ng-template #deleteButtonContent>
    <button nbButton ghost status="danger" *ngIf="isActionDelete" [innerHTML]="deleteRowButtonContent"(click)="onDelete($event)"></button>
  </ng-template>
  `,
})
export class TbodyEditDeleteComponent implements OnChanges {

  @Input() grid: Grid;
  @Input() row: Row;
  @Input() source: DataSource;
  @Input() deleteConfirm: EventEmitter<any>;
  @Input() editConfirm: EventEmitter<any>;

  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() editRowSelect = new EventEmitter<any>();

  isActionEdit: boolean;
  isActionDelete: boolean;
  editRowButtonContent: string;
  deleteRowButtonContent: string;
  editRowButtonIcon: string;
  deleteRowButtonIcon: string;

  onEdit(event: any) {
    event.preventDefault();
    event.stopPropagation();

    this.editRowSelect.emit(this.row);

    if (this.grid.getSetting('mode') === 'external') {
      this.edit.emit({
        data: this.row.getData(),
        source: this.source,
      });
    } else {
      this.grid.edit(this.row);
    }
  }

  onDelete(event: any) {
    event.preventDefault();
    event.stopPropagation();

    if (this.grid.getSetting('mode') === 'external') {
      this.delete.emit({
        data: this.row.getData(),
        source: this.source,
      });
    } else {
      this.grid.delete(this.row, this.deleteConfirm);
    }
  }

  ngOnChanges(){
    this.isActionEdit = this.grid.getSetting('actions.edit');
    this.isActionDelete = this.grid.getSetting('actions.delete');
    this.editRowButtonContent = this.grid.getSetting('edit.editButtonContent');
    this.deleteRowButtonContent = this.grid.getSetting('delete.deleteButtonContent');
    this.editRowButtonIcon = this.grid.getSetting('edit.editButtonIcon');
    this.deleteRowButtonIcon = this.grid.getSetting('delete.deleteButtonIcon');
  }
}
