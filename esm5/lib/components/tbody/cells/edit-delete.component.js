import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
import { DataSource } from '../../../lib/data-source/data-source';
var TbodyEditDeleteComponent = /** @class */ (function () {
    function TbodyEditDeleteComponent() {
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.editRowSelect = new EventEmitter();
    }
    TbodyEditDeleteComponent.prototype.onEdit = function (event) {
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
    };
    TbodyEditDeleteComponent.prototype.onDelete = function (event) {
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
    };
    TbodyEditDeleteComponent.prototype.ngOnChanges = function () {
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.editRowButtonContent = this.grid.getSetting('edit.editButtonContent');
        this.deleteRowButtonContent = this.grid.getSetting('delete.deleteButtonContent');
        this.editRowButtonIcon = this.grid.getSetting('edit.editButtonIcon');
        this.deleteRowButtonIcon = this.grid.getSetting('delete.deleteButtonIcon');
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
            template: "\n  <ng-container *ngIf=\"editRowButtonIcon; else editButtonContent\">\n    <button nbButton ghost status=\"primary\" *ngIf=\"isActionEdit\"  (click)=\"onEdit($event)\">\n    <nb-icon [icon]=\"editRowButtonIcon\"></nb-icon></button>\n  </ng-container>\n  <ng-container *ngIf=\"deleteRowButtonIcon; else deleteButtonContent\">\n  <button nbButton ghost status=\"danger\" *ngIf=\"isActionDelete\"  (click)=\"onDelete($event)\">\n  <nb-icon [icon]=\"deleteRowButtonIcon\"></nb-icon>\n  </button>\n</ng-container>\n  <ng-template #editButtonContent>\n    <button nbButton ghost status=\"primary\" *ngIf=\"isActionEdit\" [innerHTML]=\"editRowButtonContent\" (click)=\"onEdit($event)\"></button>\n    </ng-template>\n \n  <ng-template #deleteButtonContent>\n    <button nbButton ghost status=\"danger\" *ngIf=\"isActionDelete\" [innerHTML]=\"deleteRowButtonContent\"(click)=\"onDelete($event)\"></button>\n  </ng-template>\n  "
        })
    ], TbodyEditDeleteComponent);
    return TbodyEditDeleteComponent;
}());
export { TbodyEditDeleteComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1kZWxldGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGJvZHkvY2VsbHMvZWRpdC1kZWxldGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFHLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBd0JsRTtJQXRCQTtRQThCWSxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMvQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUErQ3BELENBQUM7SUF0Q0MseUNBQU0sR0FBTixVQUFPLEtBQVU7UUFDZixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVsQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTthQUNwQixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELDJDQUFRLEdBQVIsVUFBUyxLQUFVO1FBQ2pCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO2dCQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDcEIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQUVELDhDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBdERRO1FBQVIsS0FBSyxFQUFFOzBDQUFPLElBQUk7MERBQUM7SUFDWDtRQUFSLEtBQUssRUFBRTswQ0FBTSxHQUFHO3lEQUFDO0lBQ1Q7UUFBUixLQUFLLEVBQUU7MENBQVMsVUFBVTs0REFBQztJQUNuQjtRQUFSLEtBQUssRUFBRTswQ0FBZ0IsWUFBWTttRUFBTTtJQUNqQztRQUFSLEtBQUssRUFBRTswQ0FBYyxZQUFZO2lFQUFNO0lBRTlCO1FBQVQsTUFBTSxFQUFFOzswREFBZ0M7SUFDL0I7UUFBVCxNQUFNLEVBQUU7OzREQUFrQztJQUNqQztRQUFULE1BQU0sRUFBRTs7bUVBQXlDO0lBVnZDLHdCQUF3QjtRQXRCcEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDBCQUEwQjtZQUNwQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMvQyxRQUFRLEVBQUUsMDVCQWlCVDtTQUNGLENBQUM7T0FDVyx3QkFBd0IsQ0F5RHBDO0lBQUQsK0JBQUM7Q0FBQSxBQXpERCxJQXlEQztTQXpEWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi8uLi9saWIvZ3JpZCc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvcm93JztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZzItc3QtdGJvZHktZWRpdC1kZWxldGUnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVkaXRSb3dCdXR0b25JY29uOyBlbHNlIGVkaXRCdXR0b25Db250ZW50XCI+XG4gICAgPGJ1dHRvbiBuYkJ1dHRvbiBnaG9zdCBzdGF0dXM9XCJwcmltYXJ5XCIgKm5nSWY9XCJpc0FjdGlvbkVkaXRcIiAgKGNsaWNrKT1cIm9uRWRpdCgkZXZlbnQpXCI+XG4gICAgPG5iLWljb24gW2ljb25dPVwiZWRpdFJvd0J1dHRvbkljb25cIj48L25iLWljb24+PC9idXR0b24+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGVsZXRlUm93QnV0dG9uSWNvbjsgZWxzZSBkZWxldGVCdXR0b25Db250ZW50XCI+XG4gIDxidXR0b24gbmJCdXR0b24gZ2hvc3Qgc3RhdHVzPVwiZGFuZ2VyXCIgKm5nSWY9XCJpc0FjdGlvbkRlbGV0ZVwiICAoY2xpY2spPVwib25EZWxldGUoJGV2ZW50KVwiPlxuICA8bmItaWNvbiBbaWNvbl09XCJkZWxldGVSb3dCdXR0b25JY29uXCI+PC9uYi1pY29uPlxuICA8L2J1dHRvbj5cbjwvbmctY29udGFpbmVyPlxuICA8bmctdGVtcGxhdGUgI2VkaXRCdXR0b25Db250ZW50PlxuICAgIDxidXR0b24gbmJCdXR0b24gZ2hvc3Qgc3RhdHVzPVwicHJpbWFyeVwiICpuZ0lmPVwiaXNBY3Rpb25FZGl0XCIgW2lubmVySFRNTF09XCJlZGl0Um93QnV0dG9uQ29udGVudFwiIChjbGljayk9XCJvbkVkaXQoJGV2ZW50KVwiPjwvYnV0dG9uPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gXG4gIDxuZy10ZW1wbGF0ZSAjZGVsZXRlQnV0dG9uQ29udGVudD5cbiAgICA8YnV0dG9uIG5iQnV0dG9uIGdob3N0IHN0YXR1cz1cImRhbmdlclwiICpuZ0lmPVwiaXNBY3Rpb25EZWxldGVcIiBbaW5uZXJIVE1MXT1cImRlbGV0ZVJvd0J1dHRvbkNvbnRlbnRcIihjbGljayk9XCJvbkRlbGV0ZSgkZXZlbnQpXCI+PC9idXR0b24+XG4gIDwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFRib2R5RWRpdERlbGV0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcbiAgQElucHV0KCkgcm93OiBSb3c7XG4gIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcbiAgQElucHV0KCkgZGVsZXRlQ29uZmlybTogRXZlbnRFbWl0dGVyPGFueT47XG4gIEBJbnB1dCgpIGVkaXRDb25maXJtOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBAT3V0cHV0KCkgZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBlZGl0Um93U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgaXNBY3Rpb25FZGl0OiBib29sZWFuO1xuICBpc0FjdGlvbkRlbGV0ZTogYm9vbGVhbjtcbiAgZWRpdFJvd0J1dHRvbkNvbnRlbnQ6IHN0cmluZztcbiAgZGVsZXRlUm93QnV0dG9uQ29udGVudDogc3RyaW5nO1xuICBlZGl0Um93QnV0dG9uSWNvbjogc3RyaW5nO1xuICBkZWxldGVSb3dCdXR0b25JY29uOiBzdHJpbmc7XG5cbiAgb25FZGl0KGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdGhpcy5lZGl0Um93U2VsZWN0LmVtaXQodGhpcy5yb3cpO1xuXG4gICAgaWYgKHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdtb2RlJykgPT09ICdleHRlcm5hbCcpIHtcbiAgICAgIHRoaXMuZWRpdC5lbWl0KHtcbiAgICAgICAgZGF0YTogdGhpcy5yb3cuZ2V0RGF0YSgpLFxuICAgICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ3JpZC5lZGl0KHRoaXMucm93KTtcbiAgICB9XG4gIH1cblxuICBvbkRlbGV0ZShldmVudDogYW55KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICh0aGlzLmdyaWQuZ2V0U2V0dGluZygnbW9kZScpID09PSAnZXh0ZXJuYWwnKSB7XG4gICAgICB0aGlzLmRlbGV0ZS5lbWl0KHtcbiAgICAgICAgZGF0YTogdGhpcy5yb3cuZ2V0RGF0YSgpLFxuICAgICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ3JpZC5kZWxldGUodGhpcy5yb3csIHRoaXMuZGVsZXRlQ29uZmlybSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKXtcbiAgICB0aGlzLmlzQWN0aW9uRWRpdCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhY3Rpb25zLmVkaXQnKTtcbiAgICB0aGlzLmlzQWN0aW9uRGVsZXRlID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2FjdGlvbnMuZGVsZXRlJyk7XG4gICAgdGhpcy5lZGl0Um93QnV0dG9uQ29udGVudCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdlZGl0LmVkaXRCdXR0b25Db250ZW50Jyk7XG4gICAgdGhpcy5kZWxldGVSb3dCdXR0b25Db250ZW50ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2RlbGV0ZS5kZWxldGVCdXR0b25Db250ZW50Jyk7XG4gICAgdGhpcy5lZGl0Um93QnV0dG9uSWNvbiA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdlZGl0LmVkaXRCdXR0b25JY29uJyk7XG4gICAgdGhpcy5kZWxldGVSb3dCdXR0b25JY29uID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2RlbGV0ZS5kZWxldGVCdXR0b25JY29uJyk7XG4gIH1cbn1cbiJdfQ==