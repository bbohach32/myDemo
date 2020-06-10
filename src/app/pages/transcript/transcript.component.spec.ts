import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TranscriptComponent } from './transcript.component';

describe('TranscriptComponent', () => {
  let component: TranscriptComponent;
  let fixture: ComponentFixture<TranscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranscriptComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TranscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
