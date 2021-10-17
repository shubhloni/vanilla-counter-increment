// const twitter = document.getElementById('twitter');
// const facebook = document.getElementById('facebook');
// const youtube = document.getElementById('youtube');

// const loadSpeed = 1000;
// const speed = 50;

// const twitterCount = 3400;
// const facebookCount = 4700;
// const youtubeCount = 3900;

// let tCount = 0;
// let fCount = 0;
// let yCount = 0;
// let flag = false;

// function runCounter() {
//   if (tCount < twitterCount) {
//     tCount += speed;
//     flag = true;
//   } else {
//     tCount = twitterCount;
//   }
//   if (fCount < facebookCount) {
//     fCount += speed;
//     flag = true;
//   } else {
//     fCount = facebookCount;
//   }
//   if (yCount < youtubeCount) {
//     yCount += speed;
//     flag = true;
//   } else {
//     yCount = youtubeCount;
//   }

//   if (
//     tCount === twitterCount &&
//     fCount === facebookCount &&
//     yCount === youtubeCount
//   )
//     flag = false;

//   twitter.innerHTML = tCount;
//   facebook.innerHTML = fCount;
//   youtube.innerHTML = yCount;

//   if (flag) {
//     setTimeout(runCounter, 50);
//   }
// }

// window.addEventListener('DOMContentLoaded', () => {
//   runCounter();
// });

const targets = document.querySelectorAll('#counter');
const speed = 50;
let counter = 0;

function runCounter() {
  targets.forEach((target) => {
    counter = +target.innerText;
    const targetCount = +target.getAttribute('data-target');
    if (counter < targetCount) {
      counter += targetCount / 500;
      setTimeout(runCounter, speed);
    } else {
      counter = targetCount;
    }

    target.innerHTML = counter;
  });
}

runCounter();
