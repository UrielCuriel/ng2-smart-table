import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
var TbodyCreateCancelComponent = /** @class */ (function () {
    function TbodyCreateCancelComponent() {
    }
    TbodyCreateCancelComponent.prototype.onSave = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.grid.save(this.row, this.editConfirm);
    };
    TbodyCreateCancelComponent.prototype.onCancelEdit = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.row.isInEditing = false;
    };
    TbodyCreateCancelComponent.prototype.ngOnChanges = function () {
        this.saveButtonContent = this.grid.getSetting('edit.saveButtonContent');
        this.cancelButtonContent = this.grid.getSetting('edit.cancelButtonContent');
        this.saveButtonIcon = this.grid.getSetting('edit.saveButtonIcon');
        this.cancelButtonIcon = this.grid.getSetting('edit.cancelButtonIcon');
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
            template: "\n  <ng-container *ngIf=\"saveButtonIcon; else saveButtonContent\">\n    <button nbButton ghost status=\"success\"  (click)=\"onSave($event)\">\n        <nb-icon [icon]=\"saveButtonIcon\"></nb-icon></button>\n  </ng-container>\n  <ng-container *ngIf=\"cancelButtonIcon; else cancelButtonContent\">\n    <button nbButton ghost status=\"warning\"  (click)=\"onCancelEdit($event)\">\n      <nb-icon [icon]=\"cancelButtonIcon\"></nb-icon>\n    </button>\n  </ng-container>\n  <ng-template #saveButtonContent>\n    <button nbButton ghost status=\"success\" [innerHTML]=\"saveButtonContent\" (click)=\"onSave($event)\"></button>\n  </ng-template>\n\n  <ng-template #cancelButtonContent>\n    <button nbButton ghost status=\"warning\" [innerHTML]=\"cancelButtonContent\"(click)=\"onCancelEdit($event)\"></button>\n  </ng-template>\n  "
        })
    ], TbodyCreateCancelComponent);
    return TbodyCreateCancelComponent;
}());
export { TbodyCreateCancelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNhbmNlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90Ym9keS9jZWxscy9jcmVhdGUtY2FuY2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUF1QmhEO0lBQUE7SUErQkEsQ0FBQztJQXBCQywyQ0FBTSxHQUFOLFVBQU8sS0FBVTtRQUNmLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELGlEQUFZLEdBQVosVUFBYSxLQUFVO1FBQ3JCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFRCxnREFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDLENBQUE7UUFDM0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO0lBQ3ZFLENBQUM7SUE1QlE7UUFBUixLQUFLLEVBQUU7MENBQU8sSUFBSTs0REFBQztJQUNYO1FBQVIsS0FBSyxFQUFFOzBDQUFNLEdBQUc7MkRBQUM7SUFDVDtRQUFSLEtBQUssRUFBRTswQ0FBYyxZQUFZO21FQUFNO0lBSjdCLDBCQUEwQjtRQXJCdEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDRCQUE0QjtZQUN0QyxRQUFRLEVBQUUsNnpCQWlCVDtTQUNGLENBQUM7T0FDVywwQkFBMEIsQ0ErQnRDO0lBQUQsaUNBQUM7Q0FBQSxBQS9CRCxJQStCQztTQS9CWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL2dyaWQnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L3Jvdyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nMi1zdC10Ym9keS1jcmVhdGUtY2FuY2VsJyxcbiAgdGVtcGxhdGU6IGBcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNhdmVCdXR0b25JY29uOyBlbHNlIHNhdmVCdXR0b25Db250ZW50XCI+XG4gICAgPGJ1dHRvbiBuYkJ1dHRvbiBnaG9zdCBzdGF0dXM9XCJzdWNjZXNzXCIgIChjbGljayk9XCJvblNhdmUoJGV2ZW50KVwiPlxuICAgICAgICA8bmItaWNvbiBbaWNvbl09XCJzYXZlQnV0dG9uSWNvblwiPjwvbmItaWNvbj48L2J1dHRvbj5cbiAgPC9uZy1jb250YWluZXI+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJjYW5jZWxCdXR0b25JY29uOyBlbHNlIGNhbmNlbEJ1dHRvbkNvbnRlbnRcIj5cbiAgICA8YnV0dG9uIG5iQnV0dG9uIGdob3N0IHN0YXR1cz1cIndhcm5pbmdcIiAgKGNsaWNrKT1cIm9uQ2FuY2VsRWRpdCgkZXZlbnQpXCI+XG4gICAgICA8bmItaWNvbiBbaWNvbl09XCJjYW5jZWxCdXR0b25JY29uXCI+PC9uYi1pY29uPlxuICAgIDwvYnV0dG9uPlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPG5nLXRlbXBsYXRlICNzYXZlQnV0dG9uQ29udGVudD5cbiAgICA8YnV0dG9uIG5iQnV0dG9uIGdob3N0IHN0YXR1cz1cInN1Y2Nlc3NcIiBbaW5uZXJIVE1MXT1cInNhdmVCdXR0b25Db250ZW50XCIgKGNsaWNrKT1cIm9uU2F2ZSgkZXZlbnQpXCI+PC9idXR0b24+XG4gIDwvbmctdGVtcGxhdGU+XG5cbiAgPG5nLXRlbXBsYXRlICNjYW5jZWxCdXR0b25Db250ZW50PlxuICAgIDxidXR0b24gbmJCdXR0b24gZ2hvc3Qgc3RhdHVzPVwid2FybmluZ1wiIFtpbm5lckhUTUxdPVwiY2FuY2VsQnV0dG9uQ29udGVudFwiKGNsaWNrKT1cIm9uQ2FuY2VsRWRpdCgkZXZlbnQpXCI+PC9idXR0b24+XG4gIDwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFRib2R5Q3JlYXRlQ2FuY2VsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBncmlkOiBHcmlkO1xuICBASW5wdXQoKSByb3c6IFJvdztcbiAgQElucHV0KCkgZWRpdENvbmZpcm06IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6IHN0cmluZztcbiAgc2F2ZUJ1dHRvbkNvbnRlbnQ6IHN0cmluZztcbiAgY2FuY2VsQnV0dG9uSWNvbjogc3RyaW5nO1xuICBzYXZlQnV0dG9uSWNvbjogc3RyaW5nO1xuXG4gIG9uU2F2ZShldmVudDogYW55KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHRoaXMuZ3JpZC5zYXZlKHRoaXMucm93LCB0aGlzLmVkaXRDb25maXJtKTtcbiAgfVxuXG4gIG9uQ2FuY2VsRWRpdChldmVudDogYW55KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHRoaXMucm93LmlzSW5FZGl0aW5nID0gZmFsc2U7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnNhdmVCdXR0b25Db250ZW50ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2VkaXQuc2F2ZUJ1dHRvbkNvbnRlbnQnKTtcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbkNvbnRlbnQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnZWRpdC5jYW5jZWxCdXR0b25Db250ZW50JylcbiAgICB0aGlzLnNhdmVCdXR0b25JY29uID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2VkaXQuc2F2ZUJ1dHRvbkljb24nKTtcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbkljb24gPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnZWRpdC5jYW5jZWxCdXR0b25JY29uJylcbiAgfVxufVxuIl19