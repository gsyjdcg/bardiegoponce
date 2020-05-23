import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BocatinesPage } from './bocatines.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BocatinesPageRoutingModule } from './bocatines-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    BocatinesPageRoutingModule
  ],
  declarations: [BocatinesPage]
})
export class BocatinesPageModule {}
