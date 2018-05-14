import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { YTPlayerModule, YTPlayerConfig } from 'ng-youtube-player';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    YTPlayerModule,
    BrowserModule
  ],
  providers: [{ provide: YTPlayerConfig, useValue: { shouldLoadAPI: true, multiplePlaying: false } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
