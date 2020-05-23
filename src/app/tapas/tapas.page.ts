import { Component } from '@angular/core';
import { TapasService, Tapa } from './tapas.service';

@Component({
  selector: 'app-tapas',
  templateUrl: 'tapas.page.html',
  styleUrls: ['tapas.page.scss']
})
export class TapasPage {
  constructor(public tapasService: TapasService) {
    this.tapasService.load();
  }
}
