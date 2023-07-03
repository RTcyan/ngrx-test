import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { MainLayoutModule } from './main-layout/main-layout.module';



@NgModule({
  declarations: [],
  imports: [
    MainLayoutModule,
    CommonModule,
  ],
  exports: [
    MainLayoutModule,
  ]
})
export class LayoutModule { }
