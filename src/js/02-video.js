import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const currentTime = 'videoplayer-current-time';

player.on('timeupdate', throttle(videoUpdate, 1000));

function videoUpdate({ seconds }) {
  localStorage.setItem(currentTime, seconds);
}

const currentMoment = localStorage.getItem(currentTime);
console.log(currentMoment);

player.setCurrentTime(currentMoment);
