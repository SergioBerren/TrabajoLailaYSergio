document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("audioIntro");
    audio.muted = false;
    audio.play().catch(error => console.log("Autoplay bloqueado: ", error));
});