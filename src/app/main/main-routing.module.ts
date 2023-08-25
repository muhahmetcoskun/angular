import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampletanimlamaComponent } from './example/exampletanimlama/exampletanimlama.component';

const routes: Routes = [];

@NgModule({

  imports: [RouterModule.forChild([
    { path: 'example', component: ExampletanimlamaComponent },
  ])],
  exports: [RouterModule]
})
export class MainRoutingModule { }
