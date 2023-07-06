import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from './user/user.module';
import { InfoComponent } from './info.component';
import { Route, RouterModule } from '@angular/router';
import { FullInfoComponent } from './user/full-info/full-info.component';
import { FormService } from './user/services/form.service';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'prefix',
  },
  {
    path: 'all',
    component: InfoComponent,
  },
  {
    path: 'user',
    component: FullInfoComponent,
  }
];


@NgModule({
  declarations: [
    InfoComponent,
  ],
  providers: [FormService],
  imports: [
    CommonModule,
    UserModule,
    RouterModule.forChild(routes),
  ],
})
export class InfoModule { }
