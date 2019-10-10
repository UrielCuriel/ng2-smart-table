import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
let ActionsComponent = class ActionsComponent {
    constructor() {
        this.create = new EventEmitter();
    }
    ngOnChanges() {
        this.createButtonContent = this.grid.getSetting('add.createButtonContent');
        this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
        this.createButtonIcon = this.grid.getSetting('add.createButtonIcon');
        this.cancelButtonIcon = this.grid.getSetting('add.cancelButtonIcon');
    }
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
</ng-template>`
    })
], ActionsComponent);
export { ActionsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9jZWxscy9hY3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUVsRixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUF3QnpDLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBdEI3QjtRQXlCWSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQWE3QyxDQUFDO0lBTkMsV0FBVztRQUNULElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Q0FDRixDQUFBO0FBZFU7SUFBUixLQUFLLEVBQUU7c0NBQU8sSUFBSTs4Q0FBQztBQUNWO0lBQVQsTUFBTSxFQUFFOztnREFBa0M7QUFIaEMsZ0JBQWdCO0lBdEI1QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBa0JHO0tBQ2QsQ0FBQztHQUNXLGdCQUFnQixDQWdCNUI7U0FoQlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL2dyaWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZzItc3QtYWN0aW9ucycsXG4gIHRlbXBsYXRlOiBgXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJjcmVhdGVCdXR0b25JY29uOyBlbHNlIGNyZWF0ZUJ1dHRvbkNvbnRlbnRcIj5cbiAgPGJ1dHRvbiBuYkJ1dHRvbiBnaG9zdCBzdGF0dXM9XCJzdWNjZXNzXCIgKGNsaWNrKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpO2NyZWF0ZS5lbWl0KCRldmVudClcIj5cbiAgPG5iLWljb24gW2ljb25dPVwiY3JlYXRlQnV0dG9uSWNvblwiPjwvbmItaWNvbj5cbiAgPC9idXR0b24+XG48L25nLWNvbnRhaW5lcj5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJjYW5jZWxCdXR0b25JY29uOyBlbHNlIGNhbmNlbEJ1dHRvbkNvbnRlbnRcIj5cbiAgPGJ1dHRvbiBuYkJ1dHRvbiBnaG9zdCBzdGF0dXM9XCJ3YXJuaW5nXCIgKGNsaWNrKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpO2dyaWQuY3JlYXRlRm9ybVNob3duID0gZmFsc2U7XCI+XG4gIDxuYi1pY29uIFtpY29uXT1cImNhbmNlbEJ1dHRvbkljb25cIj48L25iLWljb24+XG4gIDwvYnV0dG9uPlxuPC9uZy1jb250YWluZXI+XG48bmctdGVtcGxhdGUgI2NyZWF0ZUJ1dHRvbkNvbnRlbnQ+XG4gIDxidXR0b24gbmJCdXR0b24gZ2hvc3Qgc3RhdHVzPVwic3VjY2Vzc1wiIFtpbm5lckhUTUxdPVwiY3JlYXRlQnV0dG9uQ29udGVudFwiXG4gICAgICAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7Y3JlYXRlLmVtaXQoJGV2ZW50KVwiPjwvYnV0dG9uPlxuPC9uZy10ZW1wbGF0ZT5cbjxuZy10ZW1wbGF0ZSAjY2FuY2VsQnV0dG9uQ29udGVudD5cbiAgPGJ1dHRvbiBuYkJ1dHRvbiBnaG9zdCBzdGF0dXM9XCJ3YXJuaW5nXCIgW2lubmVySFRNTF09XCJjYW5jZWxCdXR0b25Db250ZW50XCJcbiAgICAgIChjbGljayk9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKTtncmlkLmNyZWF0ZUZvcm1TaG93biA9IGZhbHNlO1wiPjwvYnV0dG9uPlxuPC9uZy10ZW1wbGF0ZT5gLFxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBncmlkOiBHcmlkO1xuICBAT3V0cHV0KCkgY3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY3JlYXRlQnV0dG9uQ29udGVudDogc3RyaW5nO1xuICBjYW5jZWxCdXR0b25Db250ZW50OiBzdHJpbmc7XG4gIGNyZWF0ZUJ1dHRvbkljb246IHN0cmluZztcbiAgY2FuY2VsQnV0dG9uSWNvbjogc3RyaW5nO1xuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuY3JlYXRlQnV0dG9uQ29udGVudCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhZGQuY3JlYXRlQnV0dG9uQ29udGVudCcpO1xuICAgIHRoaXMuY2FuY2VsQnV0dG9uQ29udGVudCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhZGQuY2FuY2VsQnV0dG9uQ29udGVudCcpO1xuICAgIHRoaXMuY3JlYXRlQnV0dG9uSWNvbiA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhZGQuY3JlYXRlQnV0dG9uSWNvbicpO1xuICAgIHRoaXMuY2FuY2VsQnV0dG9uSWNvbiA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhZGQuY2FuY2VsQnV0dG9uSWNvbicpO1xuICB9XG59XG4iXX0=