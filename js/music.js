// Buat audio sekali untuk semua halaman
let audio = new Audio("./img/Floricienta.mp3");
audio.loop = true;

// Ambil posisi waktu sebelumnya
let savedTime = sessionStorage.getItem("music_time");
if (savedTime) {
  audio.currentTime = parseFloat(savedTime);
}

// Jika musik sudah pernah dimulai di halaman sebelumnya
if (sessionStorage.getItem("music_started") === "yes") {
  audio.play().catch(() => {
    console.log("Auto-play gagal, menunggu user gesture...");
  });
}

// Tunggu klik pertama di halaman mana pun
document.addEventListener("click", () => {
  // Jika belum pernah dimulai
  if (sessionStorage.getItem("music_started") !== "yes") {
    audio.play().then(() => {
      sessionStorage.setItem("music_started", "yes");
      console.log("Musik dimulai & disimpan ke session.");

    }).catch((err) => {
      console.log("Playback gagal:", err);
    });
  }
}, { once: true });

// Simpan waktu audio setiap 0.5 detik
setInterval(() => {
  if (!audio.paused) {
    sessionStorage.setItem("music_time", audio.currentTime);
  }
}, 500);
");

