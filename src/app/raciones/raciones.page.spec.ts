import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RacionesPage } from './raciones.page';

describe('RacionesPage', () => {
  let component: RacionesPage;
  let fixture: ComponentFixture<RacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RacionesPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
