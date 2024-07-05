const nao = document.getElementById("nao");
const sim = document.getElementById("sim");
const audio = document.getElementById("audio");
var position = 0;
var isAnimating = false;

// Tocar música automaticamente ao carregar a página
window.onload = function() {
    audio.play();
};

nao.addEventListener("mouseover", animateNao);
nao.addEventListener("click", animateNao);

function animateNao(){
    if (!isAnimating) {
        isAnimating = true;
        position = position === 0 ? 150 : 0;
        nao.style.transform = `translate(0px, ${position}px)`;
        nao.style.transition = "all 0.2s ease";

        setTimeout(function() {
            isAnimating = false;
        }, 200);
    }
}

sim.addEventListener("click", function(){
    // Armazenar a posição atual do áudio e o URL do áudio no localStorage
    localStorage.setItem('audioPosition', audio.currentTime);
    localStorage.setItem('audioSrc', audio.src);

    // Esperar um tempo antes de redirecionar para permitir que a música comece a tocar
    setTimeout(function() {
        window.location.href = 'video.html'; // Substitua pelo nome da página de destino
    }, 2000); // 2 segundos de espera antes de redirecionar
});
