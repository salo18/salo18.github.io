/*
extend the app
  - record the first ten seconds of a beat
  - save the recording?


  - my additions...
    - extended functionality for not just keydown events but also to clicks on the letters
      - realized keydown events don't work for mobile... need ability to click on each letter
    - added responsive design for mobile
      - flex wrap


  //learnings...
  - working with data attributes
    https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/  Use_data_attributes
  - learned about the HTMLMediaElement
    https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement

  - transition end events
  - learned about the JS Audio API
  - same thing for the recording API?

*/

document.addEventListener('DOMContentLoaded', () => {
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');
  }

  function removeTransition(e) {
    if(e.propertyName !== 'transform') return;

    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');

  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  keys.forEach(key => key.addEventListener('click', (e) => {
    let keyCode = e.target.getAttribute('data-key');
    if (!keyCode) {
      keyCode = e.target.parentNode.getAttribute('data-key');
    }

    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');
  }));

  document.addEventListener('keydown', playSound);
});


