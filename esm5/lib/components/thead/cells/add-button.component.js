import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
import { DomSanitizer } from '@angular/platform-browser';
var AddButtonComponent = /** @class */ (function () {
    function AddButtonComponent(ref, domSanitizer) {
        this.ref = ref;
        this.domSanitizer = domSanitizer;
        this.create = new EventEmitter();
    }
    AddButtonComponent.prototype.ngAfterViewInit = function () {
        this.ref.nativeElement.classList.add('ng2-smart-actions-title', 'ng2-smart-actions-title-add');
    };
    AddButtonComponent.prototype.ngOnChanges = function () {
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.addNewButtonContent = this.domSanitizer.bypassSecurityTrustHtml(this.grid.getSetting('add.addButtonContent'));
        this.addNewButtonIcon = this.grid.getSetting('add.addButtonIcon');
    };
    AddButtonComponent.prototype.onAdd = function (event) {
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
            template: "\n  <ng-container *ngIf=\"addNewButtonIcon; else ButtonContent\">\n  <button nbButton ghost status=\"primary\" *ngIf=\"isActionAdd\"  (click)=\"onAdd($event)\">\n      <nb-icon [icon]=\"addNewButtonIcon\"></nb-icon>\n  </button>\n  </ng-container>\n  <ng-template #ButtonContent>\n    <button nbButton ghost status=\"primary\" *ngIf=\"isActionAdd \" \n        [innerHTML]=\"addNewButtonContent\" (click)=\"onAdd($event)\"></button>\n  </ng-template>\n  "
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef, DomSanitizer])
    ], AddButtonComponent);
    return AddButtonComponent;
}());
export { AddButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9jZWxscy9hZGQtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBaUIsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTdHLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBZ0J6RDtJQVVFLDRCQUFvQixHQUFlLEVBQVMsWUFBeUI7UUFBakQsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBTjNELFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBTzNDLENBQUM7SUFFRCw0Q0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFRCx3Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDbkgsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELGtDQUFLLEdBQUwsVUFBTSxLQUFVO1FBQ2QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDcEIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUNsQztJQUNILENBQUM7SUEvQlE7UUFBUixLQUFLLEVBQUU7MENBQU8sSUFBSTtvREFBQztJQUNYO1FBQVIsS0FBSyxFQUFFOzBDQUFTLFVBQVU7c0RBQUM7SUFDbEI7UUFBVCxNQUFNLEVBQUU7O3NEQUFrQztJQUpoQyxrQkFBa0I7UUFkOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixRQUFRLEVBQUUsdWNBVVQ7U0FDRixDQUFDO2lEQVd5QixVQUFVLEVBQXNCLFlBQVk7T0FWMUQsa0JBQWtCLENBa0M5QjtJQUFELHlCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0FsQ1ksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL2dyaWQnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW25nMi1zdC1hZGQtYnV0dG9uXScsXG4gIHRlbXBsYXRlOiBgXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJhZGROZXdCdXR0b25JY29uOyBlbHNlIEJ1dHRvbkNvbnRlbnRcIj5cbiAgPGJ1dHRvbiBuYkJ1dHRvbiBnaG9zdCBzdGF0dXM9XCJwcmltYXJ5XCIgKm5nSWY9XCJpc0FjdGlvbkFkZFwiICAoY2xpY2spPVwib25BZGQoJGV2ZW50KVwiPlxuICAgICAgPG5iLWljb24gW2ljb25dPVwiYWRkTmV3QnV0dG9uSWNvblwiPjwvbmItaWNvbj5cbiAgPC9idXR0b24+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctdGVtcGxhdGUgI0J1dHRvbkNvbnRlbnQ+XG4gICAgPGJ1dHRvbiBuYkJ1dHRvbiBnaG9zdCBzdGF0dXM9XCJwcmltYXJ5XCIgKm5nSWY9XCJpc0FjdGlvbkFkZCBcIiBcbiAgICAgICAgW2lubmVySFRNTF09XCJhZGROZXdCdXR0b25Db250ZW50XCIgKGNsaWNrKT1cIm9uQWRkKCRldmVudClcIj48L2J1dHRvbj5cbiAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQWRkQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBncmlkOiBHcmlkO1xuICBASW5wdXQoKSBzb3VyY2U6IERhdGFTb3VyY2U7XG4gIEBPdXRwdXQoKSBjcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBpc0FjdGlvbkFkZDogYm9vbGVhbjtcbiAgYWRkTmV3QnV0dG9uSWNvbjogc3RyaW5nO1xuICBhZGROZXdCdXR0b25Db250ZW50OiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWY6IEVsZW1lbnRSZWYscHJpdmF0ZSBkb21TYW5pdGl6ZXI6RG9tU2FuaXRpemVyKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5yZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCduZzItc21hcnQtYWN0aW9ucy10aXRsZScsICduZzItc21hcnQtYWN0aW9ucy10aXRsZS1hZGQnKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuaXNBY3Rpb25BZGQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWN0aW9ucy5hZGQnKTtcbiAgICB0aGlzLmFkZE5ld0J1dHRvbkNvbnRlbnQgPSB0aGlzLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWRkLmFkZEJ1dHRvbkNvbnRlbnQnKSk7XG4gICAgdGhpcy5hZGROZXdCdXR0b25JY29uID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2FkZC5hZGRCdXR0b25JY29uJyk7XG4gIH1cblxuICBvbkFkZChldmVudDogYW55KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5ncmlkLmdldFNldHRpbmcoJ21vZGUnKSA9PT0gJ2V4dGVybmFsJykge1xuICAgICAgdGhpcy5jcmVhdGUuZW1pdCh7XG4gICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ncmlkLmNyZWF0ZUZvcm1TaG93biA9IHRydWU7XG4gICAgfVxuICB9XG59XG4iXX0=