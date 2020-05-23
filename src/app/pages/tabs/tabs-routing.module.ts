import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tapas',
        loadChildren: () => import('../tapas/tapas.module').then(m => m.TapasPageModule)
      },
      {
        path: 'bocatines',
        loadChildren: () => import('../bocatines/bocatines.module').then(m => m.BocatinesPageModule)
      },
      {
        path: 'raciones',
        loadChildren: () => import('../raciones/raciones.module').then(m => m.RacionesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tapas',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tapas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
