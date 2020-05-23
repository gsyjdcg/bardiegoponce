import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RacionesPage } from './raciones.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RacionesPageRoutingModule } from './raciones-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: RacionesPage }]),
    RacionesPageRoutingModule,
  ],
  declarations: [RacionesPage]
})
export class RacionesPageModule {}
