let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
let interval;
let isPaused = false;

// Função para recolher o texto expandido "Ler mais"
function collapseAllReadMore() {
    const moreTexts = document.querySelectorAll('.more-text');
    const moreLinks = document.querySelectorAll('.more-link');

    moreTexts.forEach((text) => {
        text.style.maxHeight = '0';
        text.style.opacity = '0';
        text.style.display = 'none';
    });

    moreLinks.forEach((link) => {
        link.innerHTML = 'Ler mais';
    });
}

// Função para mostrar o slide
function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    collapseAllReadMore();  // Recolher todos os textos expandidos ao mudar de slide
}

// Função para o próximo slide
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Função para o slide anterior
function prevSlide() {
    showSlide(currentIndex - 1);
}

// Intervalo automático
function startAutoSlide() {
    interval = setInterval(() => {
        if (!isPaused) {
            nextSlide();
        }
    }, 3000);
}

// Reiniciar o intervalo ao alterar manualmente
function resetInterval() {
    clearInterval(interval);
    startAutoSlide();
}

// Funções manuais com reinício do intervalo
function proximo() {
    nextSlide();
    resetInterval();
}

function anterior() {
    prevSlide();
    resetInterval();
}

// Função para mostrar/ocultar o texto completo e pausar/retomar a contagem
function readMore(link, event) {

    // Prevenir o comportamento padrão do link <a>
        event.preventDefault();
    
    const moreText = link.previousElementSibling.querySelector('.more-text');
    if (moreText.style.display === 'none' || moreText.style.display === '') {
        moreText.style.display = 'inline';
        moreText.style.maxHeight = '500px';  // Limite da altura máxima
        moreText.style.opacity = '1';
        link.innerHTML = 'Ler menos';
        isPaused = true;  // Pausar a contagem automática
        clearInterval(interval);  // Pausar a contagem automática
    } else {
        moreText.style.maxHeight = '0';
        moreText.style.opacity = '0';
        setTimeout(() => {
            moreText.style.display = 'none';
        }, 500);
        link.innerHTML = 'Ler mais';
        isPaused = false;  // Retomar a contagem automática
        resetInterval();  // Reiniciar o intervalo automático
    }
}

// Inicia o carrossel automático
startAutoSlide();

// FINAL CARROSSEL ---------------------------------------------------------------------------





// CARDS
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');

    const observerOptions = {
        threshold: 0.9
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
});
// ------------------------------------------------------------------------------------------------------




// ROLAGEM HEADER FIXO
window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#0f5996';
    } else {
        header.style.backgroundColor = 'rgba(0, 19, 34, 0.6)';
    }
});


// "LER MAIS" (SOBRE) -----------------------------------------------------------------------
function lerMais() {
    var textoCompleto = document.querySelector('.texto2');
    var botao = document.querySelector('.ler-mais');

    if (textoCompleto.style.display === "none") {
        textoCompleto.style.display = "inline";
        botao.textContent = "Ler Menos";
    } else {
        textoCompleto.style.display = "none";
        botao.textContent = "Ler Mais";
    }
};


// DESLIZAR TELA 'SMOOTH' -----------------------------------------------------------------
window.addEventListener('load', function() {
    const hash = window.location.hash;
    if (hash) {
        const elementoAlvo = document.querySelector(hash);
        if (elementoAlvo) {
            elementoAlvo.scrollIntoView({ behavior: 'smooth' });
        }
    }
});