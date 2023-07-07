import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from './user/user.module';
import { InfoComponent } from './info.component';
import { Route, RouterModule } from '@angular/router';
import { FullInfoComponent } from './user/full-info/full-info.component';
import { StoreModule } from '@ngrx/store';
import { infoFeatureKey } from './state';
import { infoReducer } from './state/state';
import { EffectsModule } from '@ngrx/effects';
import { InfoEffects } from './effects/info.effects';
import { InfoApiEffects } from './effects/info-api.effects';
import { InfoResolver } from './info.resolver';

const routes: Route[] = [
  {
    path: '',
    resolve: [InfoResolver],
    children: [
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
    ],
  },
];


@NgModule({
  declarations: [
    InfoComponent,
  ],
  providers: [
    InfoEffects,
    InfoResolver,
  ],
  imports: [
    CommonModule,
    UserModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(infoFeatureKey, infoReducer),
    EffectsModule.forFeature([InfoEffects, InfoApiEffects]),
  ],
})
export class InfoModule { }
