import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage{
  selected = 'raciones';

  constructor() {}

  setSelectedTab(tab: string): void {
    this.selected = tab;
  }
}
