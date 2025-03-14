// Função para interatividade no botão "Jogar"
const playButtons = document.querySelectorAll('.play-btn');

playButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Você iniciou o jogo! Boa sorte!');
    });
});
