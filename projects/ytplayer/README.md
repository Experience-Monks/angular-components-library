# Angular Embedded YouTube Player Component Module

An Angular component module for using the embedded YouTube (iframe) player.

## See Also

- [Other component libraries](https://github.com/Jam3/angular-components-library#angular-components-library)

## Installation

```shell
npm install angular-youtube-player
```

## Importing the module

In the module (e.g. `AppModule`) where it will be used:

```TypeScript
/* ... */
import { YTPlayerModule } from 'angular-youtube-player';

@NgModule({
  /* ... */
  imports: [
    YTPlayerModule,
    BrowserModule
  ]
})
export class AppModule { }
```

## Config

There are two options are currently configurable:

```TypeScript
// config
imports: [
  YTPlayerModule,
  BrowserModule
],
providers: [{ provide: YTPlayerConfig, useValue: { shouldLoadAPI: true, multiplePlaying: false } }],
```

You could use either the constructor:

```TypeScript
import { YTPlayerConfig } from 'angular-youtube-player';

const useValue = new YTPlayerConfig(shouldLoadAPI, multiplePlaying);
```

or an object literal:

```TypeScript
const useValue = { shouldLoadAPI: true, multiplePlaying: false };
```

to build the config, both values are optional.

#### `shouldLoadAPI = true`

By default using this module would load the YouTube iframe player API, if you prefer to load it on your own, you could set it to false. Note that it would still require the API to be loaded.

#### `multiplePlaying = false`

When there are multiple instances of the player, it would only allow one to be playing by default (i.e. playing one would pause the other playing ones). You could set this to true if you want to allow multiple videos playing at the same time.

## Using the component

Here's a list of the component's input and output properties:

```TypeScript
@Input() videoId: string;
@Input() domId: string;
@Input() parameters: string|YT.PlayerVars;

@Output() ready = new EventEmitter();
@Output() unstarted = new EventEmitter();
@Output() ended = new EventEmitter();
@Output() playing = new EventEmitter();
@Output() paused = new EventEmitter();
@Output() buffering = new EventEmitter();
@Output() cued = new EventEmitter();
```

### Input

#### `videoId`

The YouTube video id to play

#### `domId` (optional)

The DOM element id of the player

#### `parameters` (optional)

The player options, could be a query string or a object

Reference on [IFrame Player Parameters](https://developers.google.com/youtube/player_parameters)

### Output

The output events are all from the [IFrame Player API](https://developers.google.com/youtube/iframe_api_reference#Events).

### Other `public` properties and methods

```TypeScript
public get currentTime(): number
public play(): void
public pause(): void
public cueVideoById(videoId: string, startSeconds?: number): void
public loadVideoById(videoId: string, startSeconds?: number): void
```
