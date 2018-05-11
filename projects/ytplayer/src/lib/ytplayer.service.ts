import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { YTPlayerComponent } from './ytplayer.component';
import { YTPlayerConfig } from './ytplayer.config';
import { loadAPI } from './util';

@Injectable({
  providedIn: 'root'
})
export class YTPlayerService {
  public get playersCount(): number {
    return this.players.length;
  }

  public apiReady = new BehaviorSubject<boolean>(window['YT'] !== undefined);

  private players = new Array<YTPlayerComponent>();
  private multiplePlaying: boolean;

  constructor(private config: YTPlayerConfig) {
    this.multiplePlaying = config.multiplePlaying;

    if (config.shouldLoadAPI !== false) {
      loadAPI().then(() => this.apiReady.next(true));
    } else if (this.apiReady.value === false) {
      console.warn('YT API not loaded');
    }
  }

  public addPlayer(player: YTPlayerComponent) {
    this.players.push(player);
  }

  public removePlayer(player: YTPlayerComponent) {
    const index = this.players.indexOf(player);
    this.players.splice(index, 1);
  }

  public pauseAllExcept(playerComponent: YTPlayerComponent) {
    if (this.multiplePlaying) {
      return;
    }

    const exception = this.players.indexOf(playerComponent);
    if (exception > -1) {
      this.players.forEach((player, index) => {
        if (exception !== index) {
          player.pause();
        }
      });
    }
  }
}
