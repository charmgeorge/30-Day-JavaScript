// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//Build out functions
// function togglePlay(){
    // if(video.paused){
    //   video.play();
    // }else{
    //   video.pause();
    // }
    function togglePlay(){
      const method = video.paused ? 'play' : 'pause';
      video[method]();
    }

function updateButton(){
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip(){

}

//Hook up the even listeners
video.addEventLister('click', togglePlay);
video.addEventLister('play', updateButton);
toggle.addEventLister('pause', updateButton);
toggle.addEventLister('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));
