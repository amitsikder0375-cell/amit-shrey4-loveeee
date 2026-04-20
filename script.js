function openLetter(){
  document.querySelector(".envelope-wrapper").classList.toggle("open");
}

/* Falling hearts generator */
const heartsContainer = document.querySelector(".hearts");

function createHeart(){
  const heart = document.createElement("span");
  heart.innerHTML = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  heart.style.fontSize = Math.random() * 15 + 15 + "px";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 250);

/* Background Music */
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

window.addEventListener("load", () => {
  bgMusic.play().then(() => {
    isPlaying = true;
    musicBtn.innerHTML = "💖";
    musicBtn.classList.add("music-on");
  }).catch(() => {
    musicBtn.innerHTML = "💗";
  });
});

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    bgMusic.play();
    isPlaying = true;
    musicBtn.innerHTML = "💖";
    musicBtn.classList.add("music-on");
  } else {
    bgMusic.pause();
    isPlaying = false;
    musicBtn.innerHTML = "💗";
    musicBtn.classList.remove("music-on");
  }
});
