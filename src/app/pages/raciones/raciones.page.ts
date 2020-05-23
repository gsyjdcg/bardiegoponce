import { Component } from '@angular/core';
import { RacionesService } from 'src/services/raciones.service';

@Component({
  selector: 'app-raciones',
  templateUrl: 'raciones.page.html',
  styleUrls: ['raciones.page.scss']
})
export class RacionesPage {
  constructor(public racionesService: RacionesService) {
    this.racionesService.load();
  }
}
