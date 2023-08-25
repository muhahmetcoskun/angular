import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { ExampletanimlamaComponent } from './example/exampletanimlama/exampletanimlama.component';


@NgModule({
  declarations: [
    HomeComponent,
    ExampletanimlamaComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
