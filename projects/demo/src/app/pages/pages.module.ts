import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { routes } from './pages.routes';
import { SharedModule } from '../shared/shared.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NbEvaIconsModule,
    RouterModule.forChild(routes),
    Ng2SmartTableModule,
    SharedModule,
  ],
})
export class PagesModule {
}
