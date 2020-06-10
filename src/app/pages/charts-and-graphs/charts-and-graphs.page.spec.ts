import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChartsAndGraphsPage } from './charts-and-graphs.page';

describe('ChartsAndGraphsPage', () => {
  let component: ChartsAndGraphsPage;
  let fixture: ComponentFixture<ChartsAndGraphsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsAndGraphsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChartsAndGraphsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
