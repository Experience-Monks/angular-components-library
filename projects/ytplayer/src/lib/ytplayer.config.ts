export class YTPlayerConfig {
  static defaultConfig = { shouldLoadAPI: true, multiplePlaying: false };

  constructor(
    public shouldLoadAPI = YTPlayerConfig.defaultConfig.shouldLoadAPI,
    public multiplePlaying = YTPlayerConfig.defaultConfig.multiplePlaying
  ) {}
}
