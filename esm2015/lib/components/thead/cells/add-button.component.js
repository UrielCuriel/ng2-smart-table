import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
import { DomSanitizer } from '@angular/platform-browser';
let AddButtonComponent = class AddButtonComponent {
    constructor(ref, domSanitizer) {
        this.ref = ref;
        this.domSanitizer = domSanitizer;
        this.create = new EventEmitter();
    }
    ngAfterViewInit() {
        this.ref.nativeElement.classList.add('ng2-smart-actions-title', 'ng2-smart-actions-title-add');
    }
    ngOnChanges() {
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.addNewButtonContent = this.domSanitizer.bypassSecurityTrustHtml(this.grid.getSetting('add.addButtonContent'));
        this.addNewButtonIcon = this.grid.getSetting('add.addButtonIcon');
    }
    onAdd(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.create.emit({
                source: this.source,
            });
        }
        else {
            this.grid.createFormShown = true;
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Grid)
], AddButtonComponent.prototype, "grid", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", DataSource)
], AddButtonComponent.prototype, "source", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], AddButtonComponent.prototype, "create", void 0);
AddButtonComponent = tslib_1.__decorate([
    Component({
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
  `
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef, DomSanitizer])
], AddButtonComponent);
export { AddButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9jZWxscy9hZGQtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBaUIsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTdHLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBZ0J6RCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQVU3QixZQUFvQixHQUFlLEVBQVMsWUFBeUI7UUFBakQsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBTjNELFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBTzNDLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDbkgsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFVO1FBQ2QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDcEIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUNsQztJQUNILENBQUM7Q0FDRixDQUFBO0FBaENVO0lBQVIsS0FBSyxFQUFFO3NDQUFPLElBQUk7Z0RBQUM7QUFDWDtJQUFSLEtBQUssRUFBRTtzQ0FBUyxVQUFVO2tEQUFDO0FBQ2xCO0lBQVQsTUFBTSxFQUFFOztrREFBa0M7QUFKaEMsa0JBQWtCO0lBZDlCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsUUFBUSxFQUFFOzs7Ozs7Ozs7O0dBVVQ7S0FDRixDQUFDOzZDQVd5QixVQUFVLEVBQXNCLFlBQVk7R0FWMUQsa0JBQWtCLENBa0M5QjtTQWxDWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi8uLi9saWIvZ3JpZCc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbmcyLXN0LWFkZC1idXR0b25dJyxcbiAgdGVtcGxhdGU6IGBcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImFkZE5ld0J1dHRvbkljb247IGVsc2UgQnV0dG9uQ29udGVudFwiPlxuICA8YnV0dG9uIG5iQnV0dG9uIGdob3N0IHN0YXR1cz1cInByaW1hcnlcIiAqbmdJZj1cImlzQWN0aW9uQWRkXCIgIChjbGljayk9XCJvbkFkZCgkZXZlbnQpXCI+XG4gICAgICA8bmItaWNvbiBbaWNvbl09XCJhZGROZXdCdXR0b25JY29uXCI+PC9uYi1pY29uPlxuICA8L2J1dHRvbj5cbiAgPC9uZy1jb250YWluZXI+XG4gIDxuZy10ZW1wbGF0ZSAjQnV0dG9uQ29udGVudD5cbiAgICA8YnV0dG9uIG5iQnV0dG9uIGdob3N0IHN0YXR1cz1cInByaW1hcnlcIiAqbmdJZj1cImlzQWN0aW9uQWRkIFwiIFxuICAgICAgICBbaW5uZXJIVE1MXT1cImFkZE5ld0J1dHRvbkNvbnRlbnRcIiAoY2xpY2spPVwib25BZGQoJGV2ZW50KVwiPjwvYnV0dG9uPlxuICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XG4gIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcbiAgQE91dHB1dCgpIGNyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGlzQWN0aW9uQWRkOiBib29sZWFuO1xuICBhZGROZXdCdXR0b25JY29uOiBzdHJpbmc7XG4gIGFkZE5ld0J1dHRvbkNvbnRlbnQ6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogRWxlbWVudFJlZixwcml2YXRlIGRvbVNhbml0aXplcjpEb21TYW5pdGl6ZXIpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25nMi1zbWFydC1hY3Rpb25zLXRpdGxlJywgJ25nMi1zbWFydC1hY3Rpb25zLXRpdGxlLWFkZCcpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5pc0FjdGlvbkFkZCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhY3Rpb25zLmFkZCcpO1xuICAgIHRoaXMuYWRkTmV3QnV0dG9uQ29udGVudCA9IHRoaXMuZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhZGQuYWRkQnV0dG9uQ29udGVudCcpKTtcbiAgICB0aGlzLmFkZE5ld0J1dHRvbkljb24gPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWRkLmFkZEJ1dHRvbkljb24nKTtcbiAgfVxuXG4gIG9uQWRkKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLmdyaWQuZ2V0U2V0dGluZygnbW9kZScpID09PSAnZXh0ZXJuYWwnKSB7XG4gICAgICB0aGlzLmNyZWF0ZS5lbWl0KHtcbiAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdyaWQuY3JlYXRlRm9ybVNob3duID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==