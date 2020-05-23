import { Component } from '@angular/core';
import { BocatinesService } from 'src/services/bocatines.service';

@Component({
  selector: 'app-bocatines',
  templateUrl: 'bocatines.page.html',
  styleUrls: ['bocatines.page.scss']
})
export class BocatinesPage {
  constructor(public bocatinesService: BocatinesService) {
    this.bocatinesService.load();
  }
}