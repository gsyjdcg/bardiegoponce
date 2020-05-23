import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TapasPage } from './tapas.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TapasPageRoutingModule } from './tapas-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TapasPageRoutingModule
  ],
  declarations: [TapasPage]
})
export class TapasPageModule {}
