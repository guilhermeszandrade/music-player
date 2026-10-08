let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let volume = document.getElementById("volume");
let volumeIcon = document.getElementById("volumeIcon");
// Define a barra com a duração total assim que o áudio carrega
song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};
// Alterna entre Play e Pause
function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
    } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
    }
}
// Atualiza a posição do slider conforme a música toca
song.ontimeupdate = function () {
    progress.value = song.currentTime;
};
// Permite arrastar o slider para mudar o tempo da música
progress.onchange = function () {
    song.currentTime = progress.value;
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
};
volume.oninput = function() {
    // Define o volume do áudio (de 0 a 1)
    song.volume = volume.value;

    // Troca o ícone dinamicamente dependendo do nível de volume
    if (volume.value == 0) {
        volumeIcon.className = "fa-solid fa-volume-xmark";
    } else if (volume.value < 0.5) {
        volumeIcon.className = "fa-solid fa-volume-low";
    } else {
        volumeIcon.className = "fa-solid fa-volume-high";
    }
};