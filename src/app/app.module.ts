import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { YTPlayerModule, YTPlayerConfig } from 'ng-ytplayer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    YTPlayerModule,
    BrowserModule
  ],
  providers: [{ provide: YTPlayerConfig, useValue: new YTPlayerConfig() }],
  bootstrap: [AppComponent]
})
export class AppModule { }
