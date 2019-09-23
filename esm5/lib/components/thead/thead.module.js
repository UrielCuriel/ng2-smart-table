import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterModule } from '../filter/filter.module';
import { CellModule } from '../cell/cell.module';
import { Ng2SmartTableTheadComponent } from './thead.component';
import { ActionsComponent } from './cells/actions.component';
import { ActionsTitleComponent } from './cells/actions-title.component';
import { AddButtonComponent } from './cells/add-button.component';
import { CheckboxSelectAllComponent } from './cells/checkbox-select-all.component';
import { ColumnTitleComponent } from './cells/column-title.component';
import { TitleComponent } from './cells/title/title.component';
import { TheadFitlersRowComponent } from './rows/thead-filters-row.component';
import { TheadFormRowComponent } from './rows/thead-form-row.component';
import { TheadTitlesRowComponent } from './rows/thead-titles-row.component';
import { NbButtonModule } from '@nebular/theme';
import { NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
var THEAD_COMPONENTS = [
    ActionsComponent,
    ActionsTitleComponent,
    AddButtonComponent,
    CheckboxSelectAllComponent,
    ColumnTitleComponent,
    TitleComponent,
    TheadFitlersRowComponent,
    TheadFormRowComponent,
    TheadTitlesRowComponent,
    Ng2SmartTableTheadComponent,
];
var THeadModule = /** @class */ (function () {
    function THeadModule() {
    }
    THeadModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                FilterModule,
                CellModule,
                NbButtonModule,
                NbIconModule,
                NbEvaIconsModule,
            ],
            declarations: tslib_1.__spread(THEAD_COMPONENTS),
            exports: tslib_1.__spread(THEAD_COMPONENTS),
        })
    ], THeadModule);
    return THeadModule;
}());
export { THeadModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvdGhlYWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNuRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDNUUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxJQUFNLGdCQUFnQixHQUFHO0lBQ3ZCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtDQUM1QixDQUFDO0FBbUJGO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFdBQVc7UUFqQnZCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWixVQUFVO2dCQUNWLGNBQWM7Z0JBQ2QsWUFBWTtnQkFDWixnQkFBZ0I7YUFDakI7WUFDRCxZQUFZLG1CQUNQLGdCQUFnQixDQUNwQjtZQUNELE9BQU8sbUJBQ0YsZ0JBQWdCLENBQ3BCO1NBQ0YsQ0FBQztPQUNXLFdBQVcsQ0FBSTtJQUFELGtCQUFDO0NBQUEsQUFBNUIsSUFBNEI7U0FBZixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRmlsdGVyTW9kdWxlIH0gZnJvbSAnLi4vZmlsdGVyL2ZpbHRlci5tb2R1bGUnO1xuaW1wb3J0IHsgQ2VsbE1vZHVsZSB9IGZyb20gJy4uL2NlbGwvY2VsbC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBOZzJTbWFydFRhYmxlVGhlYWRDb21wb25lbnQgfSBmcm9tICcuL3RoZWFkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3Rpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy9hY3Rpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3Rpb25zVGl0bGVDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzL2FjdGlvbnMtdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMvYWRkLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2tib3hTZWxlY3RBbGxDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzL2NoZWNrYm94LXNlbGVjdC1hbGwuY29tcG9uZW50JztcbmltcG9ydCB7IENvbHVtblRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy9jb2x1bW4tdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy90aXRsZS90aXRsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGhlYWRGaXRsZXJzUm93Q29tcG9uZW50IH0gZnJvbSAnLi9yb3dzL3RoZWFkLWZpbHRlcnMtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaGVhZEZvcm1Sb3dDb21wb25lbnQgfSBmcm9tICcuL3Jvd3MvdGhlYWQtZm9ybS1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IFRoZWFkVGl0bGVzUm93Q29tcG9uZW50IH0gZnJvbSAnLi9yb3dzL3RoZWFkLXRpdGxlcy1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7TmJCdXR0b25Nb2R1bGV9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7TmJJY29uTW9kdWxlfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBOYkV2YUljb25zTW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvZXZhLWljb25zJztcbmNvbnN0IFRIRUFEX0NPTVBPTkVOVFMgPSBbXG4gIEFjdGlvbnNDb21wb25lbnQsXG4gIEFjdGlvbnNUaXRsZUNvbXBvbmVudCxcbiAgQWRkQnV0dG9uQ29tcG9uZW50LFxuICBDaGVja2JveFNlbGVjdEFsbENvbXBvbmVudCxcbiAgQ29sdW1uVGl0bGVDb21wb25lbnQsXG4gIFRpdGxlQ29tcG9uZW50LFxuICBUaGVhZEZpdGxlcnNSb3dDb21wb25lbnQsXG4gIFRoZWFkRm9ybVJvd0NvbXBvbmVudCxcbiAgVGhlYWRUaXRsZXNSb3dDb21wb25lbnQsXG4gIE5nMlNtYXJ0VGFibGVUaGVhZENvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgRmlsdGVyTW9kdWxlLFxuICAgIENlbGxNb2R1bGUsXG4gICAgTmJCdXR0b25Nb2R1bGUsXG4gICAgTmJJY29uTW9kdWxlLFxuICAgIE5iRXZhSWNvbnNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLlRIRUFEX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5USEVBRF9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUSGVhZE1vZHVsZSB7IH1cbiJdfQ==