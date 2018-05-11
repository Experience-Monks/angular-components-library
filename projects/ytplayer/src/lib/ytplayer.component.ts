/// <reference types="youtube"/>

import { Component, OnInit, AfterViewInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

import { YTPlayerService } from './ytplayer.service';
import { parseQueryString } from './util';

@Component({
  selector: 'lib-ytplayer',
  template: '<div [id]="domId"></div>',
  styles: [':host, :host ::ng-deep iframe { display: block; width: 100%; height: 100%; }']
})
export class YTPlayerComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() videoId: string;
  @Input() domId: string;
  @Input() parameters: string | YT.PlayerVars;

  @Output() ready = new EventEmitter();
  @Output() unstarted = new EventEmitter();
  @Output() ended = new EventEmitter();
  @Output() playing = new EventEmitter();
  @Output() paused = new EventEmitter();
  @Output() buffering = new EventEmitter();
  @Output() cued = new EventEmitter();

  public get currentTime(): number {
    return this.player.getCurrentTime();
  }

  private player: YT.Player;
  private isReady: boolean;

  constructor(private ytPlayerService: YTPlayerService) {}

  ngOnInit() {
    this.ytPlayerService.addPlayer(this);
    this.domId = this.domId || this.videoId || 'ng-yt-player-' + this.ytPlayerService.playersCount;
  }

  ngAfterViewInit() {
    this.ytPlayerService.apiReady.subscribe(ready => {
      if (ready && !this.player) {
        const parameters: YT.PlayerVars = typeof this.parameters === 'string' ? parseQueryString(this.parameters) : this.parameters;
        this.player = this.initPlayer(this.videoId, parameters, this.domId);
      }
    });
  }

  ngOnDestroy() {
    this.ytPlayerService.removePlayer(this);
  }

  public play() {
    if (this.isReady) {
      this.player.playVideo();
    } else {
      console.warn('The player was not ready when tried to play.');
    }
  }

  public pause() {
    if (this.isReady) {
      this.player.pauseVideo();
    } else {
      console.warn('The player was not ready when tried to pause.');
    }
  }

  public cueVideoById(videoId: string, startSeconds?: number) {
    if (this.isReady) {
      this.player.cueVideoById(videoId, startSeconds);
    } else {
      console.warn('The player was not ready when tried to cueVideoById.');
    }
  }

  public loadVideoById(videoId: string, startSeconds?: number) {
    if (this.isReady) {
      this.player.loadVideoById(videoId, startSeconds);
    } else {
      console.warn('The player was not ready when tried to loadVideoById.');
    }
  }

  private onplay() {
    this.playing.emit();
    this.ytPlayerService.pauseAllExcept(this);
  }

  private initPlayer(videoId: string, playerVars: YT.PlayerVars, domId: string) {
    const onReady = () => {
      if (!this.isReady) {
        this.ready.emit();
        this.isReady = true;
      }
    };
    const onStateChange = ({ data }) => {
      switch (data) {
        case YT.PlayerState.UNSTARTED:
          this.unstarted.emit();
          break;
        case YT.PlayerState.ENDED:
          this.ended.emit();
          break;
        case YT.PlayerState.PLAYING:
          this.onplay();
          break;
        case YT.PlayerState.PAUSED:
          this.paused.emit();
          break;
        case YT.PlayerState.BUFFERING:
          this.buffering.emit();
          break;
        case YT.PlayerState.CUED:
          this.cued.emit();
          break;
      }
    };

    return new YT.Player(domId, {
      videoId,
      playerVars,
      events: { onReady, onStateChange }
    });
  }
}
