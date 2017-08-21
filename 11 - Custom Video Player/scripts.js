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
  console.log(this.dataset.skip);
  //wrap in parseFloat because it's a string
  video.currentTime += parseFloat(this.dataset.skip);
}

funciton handleRangeUpdate(){
  video['this.name'] = this.value;
  console.log(this.name);
  console.log(this.value);
}

function handleProgress(){
  const percent = (video.currentTime / video.duration) *100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(){
  const scrubTime =(e.offsetX/ progress.offsetWidth)*video.duration
  video.currentTime = scrubTime;
}

//Hook up the event listeners
video.addEventLister('click', togglePlay);
video.addEventLister('play', updateButton);
toggle.addEventLister('pause', updateButton);
toggle.addEventLister('timeupdate', handleProgress);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range = range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range = range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', ()=> mousdown && scrub(e));
progress.addEventListener('mousedown',()=> mousedown = true);
progress.addEventListener('mouseup', ()=> mousedown = false);
