import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BocatinesPage } from './bocatines.page';

describe('BocatinesPage', () => {
  let component: BocatinesPage;
  let fixture: ComponentFixture<BocatinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BocatinesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BocatinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
