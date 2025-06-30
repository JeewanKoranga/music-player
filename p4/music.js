const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Sajni",
    name: "Arijit Singh, Ram Sampath | Laapataa Ladies | Aamir Khan Productions",
    source:
      "songs/sajni.mp3",
  },
  {
    title: "Let Her Go x Husn",
    name: " (Gravero Mashup) | Anuv Jains",
    source:
      "songs/husn.mp3",
  },
  {
    title: "SITA SIYA ",
    name: "Lyricist : Hrutul SINGER : Tirth Thakkar",
    source:
      "songs/sita.mp3",
  },
  {
    title: " You Set My World On Fire",
    name: "Loving Caliber (Official Lyric Video)",
    source:
      "songs/world.mp3",
  },
  {
    title: "Until I Found You",
    name: "Em Beihold Version",
    source:
      "songs/until.mp3",
  },

  {
    title: "everything sucks",
    name: "vaultboy speed up version",
    source:
      "songs/everything.mp3",
  },
  {
    title: "KRUSHN AUR KRISHNAA",
    name: "Lyricist : Hrutul SINGER : Tirth Thakkar, Krishani Gadhvi",
    source:
      "songs/krishna.mp3",
  },
  {
    title: "In My Mind",
    name: "Maximillian - On My Mind (Lyric Video)",
    source:
      "songs/mind.mp3",
  },
  {
    title: "Everything Hit me Like",
    name: "vaultboy - everything hits me at once (Lyrics)",
    source:
      "songs/every.mp3",
  },
];

let currentSongIndex = 4;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 4,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});