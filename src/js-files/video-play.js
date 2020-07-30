$(document).ready(function () {
  var videoEl = document.querySelector(".js-video"),
    playBtn = document.querySelector(".js-play"),
    vidControls = document.querySelector(".js-controls"),
    vidPoster = document.querySelector(".js-video-poster");
    vidText = document.querySelector(".js-text");
    vidRound = document.querySelector(".js-round");

  // если браузер может воспроизводить видео удаляем класс
  videoEl.addEventListener("canplaythrough", function () {
    vidControls.classList.remove("hide");
  });
  // запускам или останавливаем воспроизведение
  playBtn.addEventListener("click", function () {
    if (videoEl.paused) {
      vidPoster.classList.add("hide");
      vidRound.classList.add("hide");
      playBtn.classList.add("backgr");
      videoEl.play();
      vidText.innerText = "Pause";
    } else {
      videoEl.pause();
      vidPoster.classList.remove("hide");
      vidText.innerText = "Play";
      vidRound.classList.remove("hide");
      playBtn.classList.remove("backgr");
    }
  });
});
