import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BocatinesPage } from './bocatines.page';

const routes: Routes = [
  {
    path: '',
    component: BocatinesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BocatinesPageRoutingModule {}
