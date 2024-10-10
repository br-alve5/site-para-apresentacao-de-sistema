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

//-------------------------------------------------------------------------------------------





// LER MAIS
function lerMais() {
    var textoCompleto = document.querySelector('.texto2');
    var botao = document.querySelector('.ler-mais');

    if (textoCompleto.style.display === "none") {
        textoCompleto.style.display = "flex";
        botao.textContent = "Ler Menos";
        container.style.flexDirection = "column";
    } else {
        textoCompleto.style.display = "none";
        botao.textContent = "Ler Mais";
    }
}

window.addEventListener('load', function() {
    const hash = window.location.hash;
    if (hash) {
        const elementoAlvo = document.querySelector(hash);
        if (elementoAlvo) {
            elementoAlvo.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
