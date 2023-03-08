let video = document.getElementById("video1");

function play() {
  video.play();
}

function pause() {
  video.pause();
}

function diminuir_vel() {
  video.playbackRate -= 0.2;
}

function backward() {
  video.currentTime -= 5;
}

function forward() {
  video.currentTime += 5;
}

function aumentar_vel() {
  video.playbackRate += 0.2;
}

function parar() {
  video.pause();
  video.currentTime = 0;
}
