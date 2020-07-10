import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideoExamplePage } from './video-example.page';

describe('VideoExamplePage', () => {
  let component: VideoExamplePage;
  let fixture: ComponentFixture<VideoExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoExamplePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideoExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
