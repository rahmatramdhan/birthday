// jangan ubah ini ya sayang ❤️
let audio = new Audio("https://cdn.pixabay.com/audio/2024/02/14/audio_b9bc3934cc.mp3");
audio.loop = true;

// mulai musik setelah user klik pertama kali
document.addEventListener("click", () => {
    if (audio.paused) audio.play();
}, { once: true });

// simpan audio agar tidak hilang saat pindah halaman
sessionStorage.setItem("music", "playing");
