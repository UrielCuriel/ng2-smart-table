import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
let TbodyCreateCancelComponent = class TbodyCreateCancelComponent {
    onSave(event) {
        event.preventDefault();
        event.stopPropagation();
        this.grid.save(this.row, this.editConfirm);
    }
    onCancelEdit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.row.isInEditing = false;
    }
    ngOnChanges() {
        this.saveButtonContent = this.grid.getSetting('edit.saveButtonContent');
        this.cancelButtonContent = this.grid.getSetting('edit.cancelButtonContent');
        this.saveButtonIcon = this.grid.getSetting('edit.saveButtonIcon');
        this.cancelButtonIcon = this.grid.getSetting('edit.cancelButtonIcon');
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Grid)
], TbodyCreateCancelComponent.prototype, "grid", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Row)
], TbodyCreateCancelComponent.prototype, "row", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", EventEmitter)
], TbodyCreateCancelComponent.prototype, "editConfirm", void 0);
TbodyCreateCancelComponent = tslib_1.__decorate([
    Component({
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
  `
    })
], TbodyCreateCancelComponent);
export { TbodyCreateCancelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNhbmNlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90Ym9keS9jZWxscy9jcmVhdGUtY2FuY2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUF1QmhELElBQWEsMEJBQTBCLEdBQXZDLE1BQWEsMEJBQTBCO0lBV3JDLE1BQU0sQ0FBQyxLQUFVO1FBQ2YsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQVU7UUFDckIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtRQUMzRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUE7SUFDdkUsQ0FBQztDQUNGLENBQUE7QUE3QlU7SUFBUixLQUFLLEVBQUU7c0NBQU8sSUFBSTt3REFBQztBQUNYO0lBQVIsS0FBSyxFQUFFO3NDQUFNLEdBQUc7dURBQUM7QUFDVDtJQUFSLEtBQUssRUFBRTtzQ0FBYyxZQUFZOytEQUFNO0FBSjdCLDBCQUEwQjtJQXJCdEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDRCQUE0QjtRQUN0QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJUO0tBQ0YsQ0FBQztHQUNXLDBCQUEwQixDQStCdEM7U0EvQlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9ncmlkJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9yb3cnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZzItc3QtdGJvZHktY3JlYXRlLWNhbmNlbCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJzYXZlQnV0dG9uSWNvbjsgZWxzZSBzYXZlQnV0dG9uQ29udGVudFwiPlxuICAgIDxidXR0b24gbmJCdXR0b24gZ2hvc3Qgc3RhdHVzPVwic3VjY2Vzc1wiICAoY2xpY2spPVwib25TYXZlKCRldmVudClcIj5cbiAgICAgICAgPG5iLWljb24gW2ljb25dPVwic2F2ZUJ1dHRvbkljb25cIj48L25iLWljb24+PC9idXR0b24+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2FuY2VsQnV0dG9uSWNvbjsgZWxzZSBjYW5jZWxCdXR0b25Db250ZW50XCI+XG4gICAgPGJ1dHRvbiBuYkJ1dHRvbiBnaG9zdCBzdGF0dXM9XCJ3YXJuaW5nXCIgIChjbGljayk9XCJvbkNhbmNlbEVkaXQoJGV2ZW50KVwiPlxuICAgICAgPG5iLWljb24gW2ljb25dPVwiY2FuY2VsQnV0dG9uSWNvblwiPjwvbmItaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9uZy1jb250YWluZXI+XG4gIDxuZy10ZW1wbGF0ZSAjc2F2ZUJ1dHRvbkNvbnRlbnQ+XG4gICAgPGJ1dHRvbiBuYkJ1dHRvbiBnaG9zdCBzdGF0dXM9XCJzdWNjZXNzXCIgW2lubmVySFRNTF09XCJzYXZlQnV0dG9uQ29udGVudFwiIChjbGljayk9XCJvblNhdmUoJGV2ZW50KVwiPjwvYnV0dG9uPlxuICA8L25nLXRlbXBsYXRlPlxuXG4gIDxuZy10ZW1wbGF0ZSAjY2FuY2VsQnV0dG9uQ29udGVudD5cbiAgICA8YnV0dG9uIG5iQnV0dG9uIGdob3N0IHN0YXR1cz1cIndhcm5pbmdcIiBbaW5uZXJIVE1MXT1cImNhbmNlbEJ1dHRvbkNvbnRlbnRcIihjbGljayk9XCJvbkNhbmNlbEVkaXQoJGV2ZW50KVwiPjwvYnV0dG9uPlxuICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBUYm9keUNyZWF0ZUNhbmNlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcbiAgQElucHV0KCkgcm93OiBSb3c7XG4gIEBJbnB1dCgpIGVkaXRDb25maXJtOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBjYW5jZWxCdXR0b25Db250ZW50OiBzdHJpbmc7XG4gIHNhdmVCdXR0b25Db250ZW50OiBzdHJpbmc7XG4gIGNhbmNlbEJ1dHRvbkljb246IHN0cmluZztcbiAgc2F2ZUJ1dHRvbkljb246IHN0cmluZztcblxuICBvblNhdmUoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB0aGlzLmdyaWQuc2F2ZSh0aGlzLnJvdywgdGhpcy5lZGl0Q29uZmlybSk7XG4gIH1cblxuICBvbkNhbmNlbEVkaXQoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB0aGlzLnJvdy5pc0luRWRpdGluZyA9IGZhbHNlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5zYXZlQnV0dG9uQ29udGVudCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdlZGl0LnNhdmVCdXR0b25Db250ZW50Jyk7XG4gICAgdGhpcy5jYW5jZWxCdXR0b25Db250ZW50ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2VkaXQuY2FuY2VsQnV0dG9uQ29udGVudCcpXG4gICAgdGhpcy5zYXZlQnV0dG9uSWNvbiA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdlZGl0LnNhdmVCdXR0b25JY29uJyk7XG4gICAgdGhpcy5jYW5jZWxCdXR0b25JY29uID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2VkaXQuY2FuY2VsQnV0dG9uSWNvbicpXG4gIH1cbn1cbiJdfQ==