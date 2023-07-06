import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullInfoComponent } from './full-info/full-info.component';
import { MainComponent } from './full-info/main/main.component';
import { AdditionalComponent } from './full-info/additional/additional.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TuiInputModule, TuiSelectModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiDataListModule } from '@taiga-ui/core';
import { TuiAutoFocusModule } from '@taiga-ui/cdk';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';

const TuiImports = [
  TuiInputModule,
  TuiDataListModule,
  TuiSelectModule,
  TuiAutoFocusModule,
  TuiButtonModule,
]

@NgModule({
  declarations: [
    FullInfoComponent,
    MainComponent,
    AdditionalComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    ...TuiImports,
  ],
  exports: [
    CardComponent,
  ]
})
export class UserModule { }
