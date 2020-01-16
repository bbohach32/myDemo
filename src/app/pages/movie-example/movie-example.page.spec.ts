import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieExamplePage } from './movie-example.page';

describe('MovieExamplePage', () => {
  let component: MovieExamplePage;
  let fixture: ComponentFixture<MovieExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieExamplePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
