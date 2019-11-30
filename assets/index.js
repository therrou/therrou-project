

import mediaPlayer from "./mediaPlayer.js"
import Autoplay from './plugins/Autoplay.js'
import AutoPause from './plugins/AutoPause.ts'
const video = document.querySelector('video');
const button = document.querySelector('#playButton');
const mutebtn = document.querySelector("#muteButton");

const player = new mediaPlayer( 
    { el: video, 
      plugins: [new Autoplay(), new AutoPause()]} ); 
button.onclick = () => player.togglePlay(); 
mutebtn.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  });
}






    
  

  
        