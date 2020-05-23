import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TapasPage } from './tapas.page';

describe('TapasPage', () => {
  let component: TapasPage;
  let fixture: ComponentFixture<TapasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TapasPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TapasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
