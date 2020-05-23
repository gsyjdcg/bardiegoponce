import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RacionesPage } from './raciones.page';
import { RacionesPageRoutingModule } from './raciones-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RacionesPageRoutingModule
  ],
  declarations: [RacionesPage]
})
export class RacionesPageModule {}

