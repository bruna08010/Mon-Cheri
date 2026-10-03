// ========================================
// MATRIX
// ========================================

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

let fontSize = 16;
let columns;
let drops;

const characters =
    "アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function resize() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    columns = Math.floor(canvas.width / fontSize);

    drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * canvas.height / fontSize;
    }
}

function matrix() {

    // Cria o rastro dos caracteres
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {

        const char =
            characters[
                Math.floor(Math.random() * characters.length)
            ];

        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillStyle = "#00ff41";

        ctx.fillText(char, x, y);

        // Faz a coluna voltar para o topo
        if (
            y > canvas.height &&
            Math.random() > 0.975
        ) {
            drops[i] = 0;
        }

        drops[i]++;
    }

    requestAnimationFrame(matrix);
}

window.addEventListener("resize", resize);

resize();
matrix();


// ========================================
// ELEMENTOS DO HTML
// ========================================

const intro = document.getElementById("intro");
const reveal = document.getElementById("reveal");

const redPill = document.getElementById("redPill");
const bluePill = document.getElementById("bluePill");

const title = document.getElementById("title");
const message = document.getElementById("message");
const glitchText = document.getElementById("glitchText");

const continueBtn = document.getElementById("continueBtn");

const redSecret = document.getElementById("redSecret");
const blueSecret = document.getElementById("blueSecret");


// ========================================
// GUARDA QUAL PÍLULA FOI ESCOLHIDA
// ========================================

let escolha = "";


// ========================================
// PÍLULA VERMELHA
// ========================================

redPill.addEventListener("click", () => {

    escolha = "vermelha";

    // Ativa o efeito glitch
    glitchEffect();

    setTimeout(() => {

        // Esconde a tela inicial
        intro.classList.add("hidden");

        // Mostra a tela intermediária
        reveal.classList.remove("hidden");

        // Textos da pílula vermelha
        glitchText.innerText =
            "> REALIDADE DESBLOQUEADA";

        title.innerText =
            "Você escolheu a verdade.";

        message.innerHTML =
            "O código que você estava vendo nunca foi apenas código." +
            "<br><br>" +
            "Havia algo escondido por trás dele." +
            "<br>" +
            "E agora você pode enxergar.";

    }, 1200);

});


// ========================================
// PÍLULA AZUL
// ========================================

bluePill.addEventListener("click", () => {

    escolha = "azul";

    // Ativa o efeito glitch
    glitchEffect();

    setTimeout(() => {

        // Esconde a tela inicial
        intro.classList.add("hidden");

        // Mostra a tela intermediária
        reveal.classList.remove("hidden");

        // Textos da pílula azul
        glitchText.innerText =
            "> SISTEMA RESTAURADO";

        title.innerText =
            "Você escolheu esquecer.";

        message.innerHTML =
            "Tudo parece normal novamente..." +
            "<br><br>" +
            "Mas algumas escolhas têm consequências.";

    }, 1200);

});


// ========================================
// BOTÃO CONTINUAR
// ========================================

continueBtn.addEventListener("click", () => {

    // Esconde a tela intermediária
    reveal.classList.add("hidden");


    // ====================================
    // FINAL DA PÍLULA VERMELHA
    // ====================================

    if (escolha === "vermelha") {

        redSecret.classList.remove("hidden");

    }


    // ====================================
    // FINAL DA PÍLULA AZUL
    // ====================================

    if (escolha === "azul") {

        blueSecret.classList.remove("hidden");

    }

});


// ========================================
// EFEITO GLITCH
// ========================================

function glitchEffect() {

    document.body.classList.add("glitch");

    const interval = setInterval(() => {

        document.body.style.filter =
            `hue-rotate(${Math.random() * 360}deg)`;

    }, 80);


    setTimeout(() => {

        clearInterval(interval);

        document.body.style.filter = "";

        document.body.classList.remove("glitch");

    }, 1000);

}