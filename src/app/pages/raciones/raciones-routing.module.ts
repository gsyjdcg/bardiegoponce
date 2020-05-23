import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RacionesPage } from './raciones.page';

const routes: Routes = [
  {
    path: '',
    component: RacionesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RacionesPageRoutingModule {}
