import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
import { DataSource } from '../../../lib/data-source/data-source';
let TbodyEditDeleteComponent = class TbodyEditDeleteComponent {
    constructor() {
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.editRowSelect = new EventEmitter();
    }
    onEdit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.editRowSelect.emit(this.row);
        if (this.grid.getSetting('mode') === 'external') {
            this.edit.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.edit(this.row);
        }
    }
    onDelete(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.delete.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.delete(this.row, this.deleteConfirm);
        }
    }
    ngOnChanges() {
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.editRowButtonContent = this.grid.getSetting('edit.editButtonContent');
        this.deleteRowButtonContent = this.grid.getSetting('delete.deleteButtonContent');
        this.editRowButtonIcon = this.grid.getSetting('edit.editButtonIcon');
        this.deleteRowButtonIcon = this.grid.getSetting('delete.deleteButtonIcon');
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Grid)
], TbodyEditDeleteComponent.prototype, "grid", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Row)
], TbodyEditDeleteComponent.prototype, "row", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", DataSource)
], TbodyEditDeleteComponent.prototype, "source", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", EventEmitter)
], TbodyEditDeleteComponent.prototype, "deleteConfirm", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", EventEmitter)
], TbodyEditDeleteComponent.prototype, "editConfirm", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], TbodyEditDeleteComponent.prototype, "edit", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], TbodyEditDeleteComponent.prototype, "delete", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], TbodyEditDeleteComponent.prototype, "editRowSelect", void 0);
TbodyEditDeleteComponent = tslib_1.__decorate([
    Component({
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
  `
    })
], TbodyEditDeleteComponent);
export { TbodyEditDeleteComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1kZWxldGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGJvZHkvY2VsbHMvZWRpdC1kZWxldGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFHLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBd0JsRSxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtJQXRCckM7UUE4QlksU0FBSSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDL0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBK0NwRCxDQUFDO0lBdENDLE1BQU0sQ0FBQyxLQUFVO1FBQ2YsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbEMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO2dCQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDcEIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsS0FBVTtRQUNqQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssVUFBVSxFQUFFO1lBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNmLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtnQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ3BCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0UsQ0FBQztDQUNGLENBQUE7QUF2RFU7SUFBUixLQUFLLEVBQUU7c0NBQU8sSUFBSTtzREFBQztBQUNYO0lBQVIsS0FBSyxFQUFFO3NDQUFNLEdBQUc7cURBQUM7QUFDVDtJQUFSLEtBQUssRUFBRTtzQ0FBUyxVQUFVO3dEQUFDO0FBQ25CO0lBQVIsS0FBSyxFQUFFO3NDQUFnQixZQUFZOytEQUFNO0FBQ2pDO0lBQVIsS0FBSyxFQUFFO3NDQUFjLFlBQVk7NkRBQU07QUFFOUI7SUFBVCxNQUFNLEVBQUU7O3NEQUFnQztBQUMvQjtJQUFULE1BQU0sRUFBRTs7d0RBQWtDO0FBQ2pDO0lBQVQsTUFBTSxFQUFFOzsrREFBeUM7QUFWdkMsd0JBQXdCO0lBdEJwQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsMEJBQTBCO1FBQ3BDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1FBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQlQ7S0FDRixDQUFDO0dBQ1csd0JBQXdCLENBeURwQztTQXpEWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi8uLi9saWIvZ3JpZCc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvcm93JztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZzItc3QtdGJvZHktZWRpdC1kZWxldGUnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVkaXRSb3dCdXR0b25JY29uOyBlbHNlIGVkaXRCdXR0b25Db250ZW50XCI+XG4gICAgPGJ1dHRvbiBuYkJ1dHRvbiBnaG9zdCBzdGF0dXM9XCJwcmltYXJ5XCIgKm5nSWY9XCJpc0FjdGlvbkVkaXRcIiAgKGNsaWNrKT1cIm9uRWRpdCgkZXZlbnQpXCI+XG4gICAgPG5iLWljb24gW2ljb25dPVwiZWRpdFJvd0J1dHRvbkljb25cIj48L25iLWljb24+PC9idXR0b24+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGVsZXRlUm93QnV0dG9uSWNvbjsgZWxzZSBkZWxldGVCdXR0b25Db250ZW50XCI+XG4gIDxidXR0b24gbmJCdXR0b24gZ2hvc3Qgc3RhdHVzPVwiZGFuZ2VyXCIgKm5nSWY9XCJpc0FjdGlvbkRlbGV0ZVwiICAoY2xpY2spPVwib25EZWxldGUoJGV2ZW50KVwiPlxuICA8bmItaWNvbiBbaWNvbl09XCJkZWxldGVSb3dCdXR0b25JY29uXCI+PC9uYi1pY29uPlxuICA8L2J1dHRvbj5cbjwvbmctY29udGFpbmVyPlxuICA8bmctdGVtcGxhdGUgI2VkaXRCdXR0b25Db250ZW50PlxuICAgIDxidXR0b24gbmJCdXR0b24gZ2hvc3Qgc3RhdHVzPVwicHJpbWFyeVwiICpuZ0lmPVwiaXNBY3Rpb25FZGl0XCIgW2lubmVySFRNTF09XCJlZGl0Um93QnV0dG9uQ29udGVudFwiIChjbGljayk9XCJvbkVkaXQoJGV2ZW50KVwiPjwvYnV0dG9uPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gXG4gIDxuZy10ZW1wbGF0ZSAjZGVsZXRlQnV0dG9uQ29udGVudD5cbiAgICA8YnV0dG9uIG5iQnV0dG9uIGdob3N0IHN0YXR1cz1cImRhbmdlclwiICpuZ0lmPVwiaXNBY3Rpb25EZWxldGVcIiBbaW5uZXJIVE1MXT1cImRlbGV0ZVJvd0J1dHRvbkNvbnRlbnRcIihjbGljayk9XCJvbkRlbGV0ZSgkZXZlbnQpXCI+PC9idXR0b24+XG4gIDwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFRib2R5RWRpdERlbGV0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcbiAgQElucHV0KCkgcm93OiBSb3c7XG4gIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcbiAgQElucHV0KCkgZGVsZXRlQ29uZmlybTogRXZlbnRFbWl0dGVyPGFueT47XG4gIEBJbnB1dCgpIGVkaXRDb25maXJtOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBAT3V0cHV0KCkgZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBlZGl0Um93U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgaXNBY3Rpb25FZGl0OiBib29sZWFuO1xuICBpc0FjdGlvbkRlbGV0ZTogYm9vbGVhbjtcbiAgZWRpdFJvd0J1dHRvbkNvbnRlbnQ6IHN0cmluZztcbiAgZGVsZXRlUm93QnV0dG9uQ29udGVudDogc3RyaW5nO1xuICBlZGl0Um93QnV0dG9uSWNvbjogc3RyaW5nO1xuICBkZWxldGVSb3dCdXR0b25JY29uOiBzdHJpbmc7XG5cbiAgb25FZGl0KGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdGhpcy5lZGl0Um93U2VsZWN0LmVtaXQodGhpcy5yb3cpO1xuXG4gICAgaWYgKHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdtb2RlJykgPT09ICdleHRlcm5hbCcpIHtcbiAgICAgIHRoaXMuZWRpdC5lbWl0KHtcbiAgICAgICAgZGF0YTogdGhpcy5yb3cuZ2V0RGF0YSgpLFxuICAgICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ3JpZC5lZGl0KHRoaXMucm93KTtcbiAgICB9XG4gIH1cblxuICBvbkRlbGV0ZShldmVudDogYW55KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICh0aGlzLmdyaWQuZ2V0U2V0dGluZygnbW9kZScpID09PSAnZXh0ZXJuYWwnKSB7XG4gICAgICB0aGlzLmRlbGV0ZS5lbWl0KHtcbiAgICAgICAgZGF0YTogdGhpcy5yb3cuZ2V0RGF0YSgpLFxuICAgICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ3JpZC5kZWxldGUodGhpcy5yb3csIHRoaXMuZGVsZXRlQ29uZmlybSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKXtcbiAgICB0aGlzLmlzQWN0aW9uRWRpdCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhY3Rpb25zLmVkaXQnKTtcbiAgICB0aGlzLmlzQWN0aW9uRGVsZXRlID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2FjdGlvbnMuZGVsZXRlJyk7XG4gICAgdGhpcy5lZGl0Um93QnV0dG9uQ29udGVudCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdlZGl0LmVkaXRCdXR0b25Db250ZW50Jyk7XG4gICAgdGhpcy5kZWxldGVSb3dCdXR0b25Db250ZW50ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2RlbGV0ZS5kZWxldGVCdXR0b25Db250ZW50Jyk7XG4gICAgdGhpcy5lZGl0Um93QnV0dG9uSWNvbiA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdlZGl0LmVkaXRCdXR0b25JY29uJyk7XG4gICAgdGhpcy5kZWxldGVSb3dCdXR0b25JY29uID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2RlbGV0ZS5kZWxldGVCdXR0b25JY29uJyk7XG4gIH1cbn1cbiJdfQ==