import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { YTPlayerModule, YTPlayerConfig } from 'angular-youtube-player';
import { SlotMachineButtonModule } from 'ng-slot-machine-button';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SlotMachineButtonModule,
    YTPlayerModule,
    BrowserModule
  ],
  providers: [{ provide: YTPlayerConfig, useValue: { shouldLoadAPI: true, multiplePlaying: false } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
