import Player from '@vimeo/player';
 import throttle from 'lodash.throttle';

 const STORAGE_KEY = "videoplayer-current-time"; 

 const iframe = document.querySelector('iframe');
 const player = new Player(iframe);

 player.on('timeupdate', throttle(onPlay, 1000));                               

 function onPlay(timer) {
  localStorage.setItem(STORAGE_KEY, timer.seconds);             
                                                                               
};
  const timeOfVideo = localStorage.getItem(STORAGE_KEY);
  player.setCurrentTime(timeOfVideo);     
  
