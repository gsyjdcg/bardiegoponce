import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BocatinesPage } from './bocatines.page';
import { BocatinesPageRoutingModule } from './bocatines-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BocatinesPageRoutingModule
  ],
  declarations: [BocatinesPage]
})
export class BocatinesPageModule {}
