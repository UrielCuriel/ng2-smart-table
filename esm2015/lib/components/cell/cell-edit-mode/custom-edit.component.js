import * as tslib_1 from "tslib";
import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, } from '@angular/core';
import { EditCellDefault } from './edit-cell-default';
let CustomEditComponent = class CustomEditComponent extends EditCellDefault {
    constructor(resolver) {
        super();
        this.resolver = resolver;
    }
    ngOnChanges(changes) {
        if (this.cell && !this.customComponent) {
            const componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().editor.component);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
            // set @Inputs and @Outputs of custom component
            this.customComponent.instance.cell = this.cell;
            this.customComponent.instance.inputClass = this.inputClass;
            this.customComponent.instance.onStopEditing.subscribe(() => this.onStopEditing());
            this.customComponent.instance.onEdited.subscribe((event) => this.onEdited(event));
            this.customComponent.instance.onClick.subscribe((event) => this.onClick(event));
        }
    }
    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    }
};
tslib_1.__decorate([
    ViewChild('dynamicTarget', { read: ViewContainerRef, static: true }),
    tslib_1.__metadata("design:type", Object)
], CustomEditComponent.prototype, "dynamicTarget", void 0);
CustomEditComponent = tslib_1.__decorate([
    Component({
        selector: 'table-cell-custom-editor',
        template: `
    <ng-template #dynamicTarget></ng-template>
  `
    }),
    tslib_1.__metadata("design:paramtypes", [ComponentFactoryResolver])
], CustomEditComponent);
export { CustomEditComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2VsbC9jZWxsLWVkaXQtbW9kZS9jdXN0b20tZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1Qsd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxnQkFBZ0IsR0FJakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBU3RELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW9CLFNBQVEsZUFBZTtJQUt0RCxZQUFvQixRQUFrQztRQUNwRCxLQUFLLEVBQUUsQ0FBQztRQURVLGFBQVEsR0FBUixRQUFRLENBQTBCO0lBRXRELENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN0QyxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBRTVFLCtDQUErQztZQUMvQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUMvQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMzRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBQ2xGLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN2RixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDdEY7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUF6QnVFO0lBQXJFLFNBQVMsQ0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzswREFBb0I7QUFIOUUsbUJBQW1CO0lBTi9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSwwQkFBMEI7UUFDcEMsUUFBUSxFQUFFOztHQUVUO0tBQ0YsQ0FBQzs2Q0FNOEIsd0JBQXdCO0dBTDNDLG1CQUFtQixDQTRCL0I7U0E1QlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFZGl0Q2VsbERlZmF1bHQgfSBmcm9tICcuL2VkaXQtY2VsbC1kZWZhdWx0JztcbmltcG9ydCB7IENlbGwgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvY2VsbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLWNlbGwtY3VzdG9tLWVkaXRvcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNkeW5hbWljVGFyZ2V0PjwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUVkaXRDb21wb25lbnQgZXh0ZW5kcyBFZGl0Q2VsbERlZmF1bHQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgY3VzdG9tQ29tcG9uZW50OiBhbnk7XG4gIEBWaWV3Q2hpbGQoJ2R5bmFtaWNUYXJnZXQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KSBkeW5hbWljVGFyZ2V0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5jZWxsICYmICF0aGlzLmN1c3RvbUNvbXBvbmVudCkge1xuICAgICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jZWxsLmdldENvbHVtbigpLmVkaXRvci5jb21wb25lbnQpO1xuICAgICAgdGhpcy5jdXN0b21Db21wb25lbnQgPSB0aGlzLmR5bmFtaWNUYXJnZXQuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuXG4gICAgICAvLyBzZXQgQElucHV0cyBhbmQgQE91dHB1dHMgb2YgY3VzdG9tIGNvbXBvbmVudFxuICAgICAgdGhpcy5jdXN0b21Db21wb25lbnQuaW5zdGFuY2UuY2VsbCA9IHRoaXMuY2VsbDtcbiAgICAgIHRoaXMuY3VzdG9tQ29tcG9uZW50Lmluc3RhbmNlLmlucHV0Q2xhc3MgPSB0aGlzLmlucHV0Q2xhc3M7XG4gICAgICB0aGlzLmN1c3RvbUNvbXBvbmVudC5pbnN0YW5jZS5vblN0b3BFZGl0aW5nLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uU3RvcEVkaXRpbmcoKSk7XG4gICAgICB0aGlzLmN1c3RvbUNvbXBvbmVudC5pbnN0YW5jZS5vbkVkaXRlZC5zdWJzY3JpYmUoKGV2ZW50OiBhbnkpID0+IHRoaXMub25FZGl0ZWQoZXZlbnQpKTtcbiAgICAgIHRoaXMuY3VzdG9tQ29tcG9uZW50Lmluc3RhbmNlLm9uQ2xpY2suc3Vic2NyaWJlKChldmVudDogYW55KSA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5jdXN0b21Db21wb25lbnQpIHtcbiAgICAgIHRoaXMuY3VzdG9tQ29tcG9uZW50LmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==