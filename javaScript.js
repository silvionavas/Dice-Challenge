// Fun��o para gerar um n�mero aleat�rio entre 1 e 6
function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

// Fun��o para atualizar as imagens aleatoriamente
function updateImages() {
    var img1 = document.querySelector('.img1');
    var img2 = document.querySelector('.img2');

    // Gerar n�meros aleat�rios entre 1 e 6 para as imagens
    var randomNumber1 = getRandomNumber();
    var randomNumber2 = getRandomNumber();

    // Atualizar os atributos src das imagens com as imagens aleat�rias
    img1.src = 'images/dice' + randomNumber1 + '.png';
    img2.src = 'images/dice' + randomNumber2 + '.png';

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! ";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}

// Chamar a fun��o quando a p�gina for carregada
window.onload = updateImages;

