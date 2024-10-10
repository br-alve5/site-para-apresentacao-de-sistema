window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

window.onload = function() {
    window.scrollTo(0, 0); // Volta para o topo da página
};


var video = document.getElementById("bg-video");

// Define a velocidade do vídeo
video.playbackRate = 0.7;

// Ajusta a opacidade do vídeo conforme a página rola
window.addEventListener("scroll", function() {
    // Captura a quantidade de rolagem
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Calcula a opacidade com base na rolagem (quanto mais rolar menor a opacidade até sumir)
    var maxScroll = window.innerHeight; // Define o ponto em que o vídeo desaparece
    var opacity = 1 - (scrollTop / maxScroll);

    // Aplica a opacidade ao vídeo
    video.style.opacity = Math.max(opacity, 0);
});

// ------------------------------------------------------------------------------------





// EFEITO 'FADED' DOS CARDS -----------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    const contents = document.querySelectorAll('.content');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    contents.forEach(content => {
        observer.observe(content);
    });
});

// ---------------------------------------------------------------------------------------





// ROLAGEM HEADER FIXO -------------------------------------------------------------------
window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#0f5996';
    } else {
        header.style.backgroundColor = 'rgb(7, 27, 43, 0.8)';
    }
});

// ---------------------------------------------------------------------------------------





// EFEITO SMOOTH (ROLAGEM SUAVE) ---------------------------------------------------------
window.addEventListener('load', function() {
    const hash = window.location.hash;
    if (hash) {
        const elementoAlvo = document.querySelector(hash);
        if (elementoAlvo) {
            elementoAlvo.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

