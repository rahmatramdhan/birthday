if (!window.globalAudio) {
  window.globalAudio = new Audio("./img/lagu.mp3");
  window.globalAudio.loop = true;
  window.globalAudio.volume = 1.0;
}

// hanya play sekali di halaman pertama dia muncul
if (sessionStorage.getItem("musicReady") === "yes" && !sessionStorage.getItem("musicPlayed")) {
  window.globalAudio.play().catch(() => {});
  sessionStorage.setItem("musicPlayed", "yes");
}
