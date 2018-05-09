import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YTPlayerComponent } from './ytplayer.component';

describe('YTPlayerComponent', () => {
  let component: YTPlayerComponent;
  let fixture: ComponentFixture<YTPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YTPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YTPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
