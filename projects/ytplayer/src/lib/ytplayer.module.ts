import { NgModule } from '@angular/core';

import { YTPlayerComponent } from './ytplayer.component';
import { YTPlayerConfig } from './ytplayer.config';

@NgModule({
  imports: [
  ],
  declarations: [YTPlayerComponent],
  providers: [{ provide: YTPlayerConfig, useValue: new YTPlayerConfig() }],
  exports: [YTPlayerComponent]
})
export class YTPlayerModule { }
