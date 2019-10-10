import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
var ActionsComponent = /** @class */ (function () {
    function ActionsComponent() {
        this.create = new EventEmitter();
    }
    ActionsComponent.prototype.ngOnChanges = function () {
        this.createButtonContent = this.grid.getSetting('add.createButtonContent');
        this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
        this.createButtonIcon = this.grid.getSetting('add.createButtonIcon');
        this.cancelButtonIcon = this.grid.getSetting('add.cancelButtonIcon');
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Grid)
    ], ActionsComponent.prototype, "grid", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ActionsComponent.prototype, "create", void 0);
    ActionsComponent = tslib_1.__decorate([
        Component({
            selector: 'ng2-st-actions',
            template: "\n  <ng-container *ngIf=\"createButtonIcon; else createButtonContent\">\n  <button nbButton ghost status=\"success\" (click)=\"$event.preventDefault();create.emit($event)\">\n  <nb-icon [icon]=\"createButtonIcon\"></nb-icon>\n  </button>\n</ng-container>\n<ng-container *ngIf=\"cancelButtonIcon; else cancelButtonContent\">\n  <button nbButton ghost status=\"warning\" (click)=\"$event.preventDefault();grid.createFormShown = false;\">\n  <nb-icon [icon]=\"cancelButtonIcon\"></nb-icon>\n  </button>\n</ng-container>\n<ng-template #createButtonContent>\n  <button nbButton ghost status=\"success\" [innerHTML]=\"createButtonContent\"\n      (click)=\"$event.preventDefault();create.emit($event)\"></button>\n</ng-template>\n<ng-template #cancelButtonContent>\n  <button nbButton ghost status=\"warning\" [innerHTML]=\"cancelButtonContent\"\n      (click)=\"$event.preventDefault();grid.createFormShown = false;\"></button>\n</ng-template>"
        })
    ], ActionsComponent);
    return ActionsComponent;
}());
export { ActionsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9jZWxscy9hY3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUVsRixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUF3QnpDO0lBdEJBO1FBeUJZLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBYTdDLENBQUM7SUFOQyxzQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDdkUsQ0FBQztJQWJRO1FBQVIsS0FBSyxFQUFFOzBDQUFPLElBQUk7a0RBQUM7SUFDVjtRQUFULE1BQU0sRUFBRTs7b0RBQWtDO0lBSGhDLGdCQUFnQjtRQXRCNUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsNDZCQWtCRztTQUNkLENBQUM7T0FDVyxnQkFBZ0IsQ0FnQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWhCWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi8uLi9saWIvZ3JpZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nMi1zdC1hY3Rpb25zJyxcbiAgdGVtcGxhdGU6IGBcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNyZWF0ZUJ1dHRvbkljb247IGVsc2UgY3JlYXRlQnV0dG9uQ29udGVudFwiPlxuICA8YnV0dG9uIG5iQnV0dG9uIGdob3N0IHN0YXR1cz1cInN1Y2Nlc3NcIiAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7Y3JlYXRlLmVtaXQoJGV2ZW50KVwiPlxuICA8bmItaWNvbiBbaWNvbl09XCJjcmVhdGVCdXR0b25JY29uXCI+PC9uYi1pY29uPlxuICA8L2J1dHRvbj5cbjwvbmctY29udGFpbmVyPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImNhbmNlbEJ1dHRvbkljb247IGVsc2UgY2FuY2VsQnV0dG9uQ29udGVudFwiPlxuICA8YnV0dG9uIG5iQnV0dG9uIGdob3N0IHN0YXR1cz1cIndhcm5pbmdcIiAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7Z3JpZC5jcmVhdGVGb3JtU2hvd24gPSBmYWxzZTtcIj5cbiAgPG5iLWljb24gW2ljb25dPVwiY2FuY2VsQnV0dG9uSWNvblwiPjwvbmItaWNvbj5cbiAgPC9idXR0b24+XG48L25nLWNvbnRhaW5lcj5cbjxuZy10ZW1wbGF0ZSAjY3JlYXRlQnV0dG9uQ29udGVudD5cbiAgPGJ1dHRvbiBuYkJ1dHRvbiBnaG9zdCBzdGF0dXM9XCJzdWNjZXNzXCIgW2lubmVySFRNTF09XCJjcmVhdGVCdXR0b25Db250ZW50XCJcbiAgICAgIChjbGljayk9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKTtjcmVhdGUuZW1pdCgkZXZlbnQpXCI+PC9idXR0b24+XG48L25nLXRlbXBsYXRlPlxuPG5nLXRlbXBsYXRlICNjYW5jZWxCdXR0b25Db250ZW50PlxuICA8YnV0dG9uIG5iQnV0dG9uIGdob3N0IHN0YXR1cz1cIndhcm5pbmdcIiBbaW5uZXJIVE1MXT1cImNhbmNlbEJ1dHRvbkNvbnRlbnRcIlxuICAgICAgKGNsaWNrKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpO2dyaWQuY3JlYXRlRm9ybVNob3duID0gZmFsc2U7XCI+PC9idXR0b24+XG48L25nLXRlbXBsYXRlPmAsXG59KVxuZXhwb3J0IGNsYXNzIEFjdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XG4gIEBPdXRwdXQoKSBjcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjcmVhdGVCdXR0b25Db250ZW50OiBzdHJpbmc7XG4gIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6IHN0cmluZztcbiAgY3JlYXRlQnV0dG9uSWNvbjogc3RyaW5nO1xuICBjYW5jZWxCdXR0b25JY29uOiBzdHJpbmc7XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5jcmVhdGVCdXR0b25Db250ZW50ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2FkZC5jcmVhdGVCdXR0b25Db250ZW50Jyk7XG4gICAgdGhpcy5jYW5jZWxCdXR0b25Db250ZW50ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2FkZC5jYW5jZWxCdXR0b25Db250ZW50Jyk7XG4gICAgdGhpcy5jcmVhdGVCdXR0b25JY29uID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2FkZC5jcmVhdGVCdXR0b25JY29uJyk7XG4gICAgdGhpcy5jYW5jZWxCdXR0b25JY29uID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2FkZC5jYW5jZWxCdXR0b25JY29uJyk7XG4gIH1cbn1cbiJdfQ==