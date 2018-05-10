export function parseQueryString(string: string): any {
  if (/(?:[\w_]+=(?:[\w\d]+|\d)&?)+/.test(string)) {
    const parsed = {};
    string.split('&').forEach(query => {
      const pair = query.split('=');
      parsed[pair[0]] = pair[1];
    });
    return parsed;
  } else {
    throw new Error('Bad string format, please refer to https://developers.google.com/youtube/player_parameters');
  }
}

export function loadAPI() {
  return new Promise(resolve => {
    window['onYouTubeIframeAPIReady'] = resolve;
    const tag = window.document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = window.document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  });
}
