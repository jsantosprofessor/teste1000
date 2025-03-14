// Selecionando todos os botões de jogar
const playButtons = document.querySelectorAll('.play-btn');

// Selecionando o som de giro
const spinSound = document.getElementById('spin-sound');

// Função para simular o jogo
function playGame() {
    // Tocar o som de "giro"
    spinSound.play();

    // Adicionando animação no botão (efeito de clique)
    this.innerHTML = 'Girando...'; // Mudando o texto do botão para 'Girando...'
    this.disabled = true; // Desabilitando o botão para evitar múltiplos cliques

    // Simulando o tempo de "giro" da máquina
    setTimeout(() => {
        // Simulando os resultados do jogo de slot
        const results = ['🍒', '🍋', '🍊', '🍉', '🍓'];
        const randomResult = results[Math.floor(Math.random() * results.length)];

        // Exibindo o resultado
        alert(`Resultado do Jogo: ${randomResult}`);

        // Mudando o botão de volta para o estado normal
        this.innerHTML = 'Jogar';
        this.disabled = false; // Habilitando o botão novamente
    }, 2000); // A animação dura 2 segundos
}

// Adicionando o evento de clique em cada botão
playButtons.forEach(button => {
    button.addEventListener('click', playGame);
});
