import { TestBed, async } from '@angular/core/testing';

import { YTPlayerModule } from 'angular-youtube-player';
import { SlotMachineButtonModule } from 'ng-slot-machine-button';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [YTPlayerModule, SlotMachineButtonModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
