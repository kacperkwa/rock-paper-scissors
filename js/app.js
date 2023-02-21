const rulesBtn = document.querySelector('.rules__btn');
const modal = document.querySelector('.modal');
const closeModalBtn = modal.querySelector('.modal__btn');
const playerChoiceBtn = document.querySelectorAll('.circle-btn');
const gameBoard = document.querySelector('.game-board');
const startGame = document.querySelector('.start-game');
const playerImg = document.querySelector('.player-selection-img');
const playAgainBtn = document.querySelector('.game-board__btn');
const computerImage = document.querySelector('.computer-selection-img');
const computerCircle = document.querySelector('.computer__selection');
const playerCircle = document.querySelector('.player__selection');
const playerImage = document.querySelector('.player-selection-img');
let playerResult;
let computerResult;
let gameScore = 0;
//modal hanlders
const rulesHandler = () => {
	modal.style.display = 'flex';
};
const closeModal = () => {
	modal.style.display = 'none';
};

//game engine
const playerPick = e => {
	const playerChoiceId = e.target.closest('button').id;
	if (playerChoiceId === 'paper') {
		playerImage.src = '/images/icon-paper.svg';
		playerCircle.classList.add('paper-styles');
		playerResult = 'paper';
	} else if (playerChoiceId === 'scissors') {
		playerImage.src = '/images/icon-scissors.svg';
		playerCircle.classList.add('scissors-styles');
		playerResult = 'scissors';
	} else {
		playerImage.src = '/images/icon-rock.svg';
		playerCircle.classList.add('rock-styles');
		playerResult = 'rock';
	}
};
const computerPick = () => {
	const arr = ['paper', 'scissors', 'rock'];
	const computerChoice = arr[Math.floor(Math.random() * arr.length)];
	if (computerChoice === 'paper') {
		computerImage.src = '/images/icon-paper.svg';
		computerCircle.classList.add('paper-styles');
		computerResult = 'paper';
	} else if (computerChoice === 'scissors') {
		computerImage.src = '/images/icon-scissors.svg';
		computerCircle.classList.add('scissors-styles');
		computerResult = 'scissors';
	} else {
		computerImage.src = '/images/icon-rock.svg';
		computerCircle.classList.add('rock-styles');
		computerResult = 'rock';
	}
};
const gameHandler = e => {
	gameBoard.style.display = 'flex';
	startGame.style.display = 'none';
	playerPick(e);
	computerPick();
};
const playAgain = () => {
	gameBoard.style.display = 'none';
	startGame.style.display = 'flex';
	const computerItemToDelete = Array.from(computerCircle.classList).pop();
	const playerItemToDelete = Array.from(playerCircle.classList).pop();
	computerCircle.classList.remove(computerItemToDelete);
	playerCircle.classList.remove(playerItemToDelete);
};
const gameResult = () => {
	const resultText = document.querySelector('.game-board__result');
	const scoreBoard = document.querySelector('.scoreboard__score');
	if (playerResult === computerResult) {
		resultText.textContent = `it's a draw`;
	} else if (
		(playerResult === 'paper' && computerResult === 'rock') ||
		(playerResult === 'scissors' && computerResult === 'paper') ||
		(playerResult === 'rock' && computerResult === 'scissors')
	) {
		resultText.textContent = `you win`;
		gameScore++;
	} else {
		resultText.textContent = `you lose`;
		gameScore--;
	}
	scoreBoard.textContent = `${gameScore}`;
};

rulesBtn.addEventListener('click', rulesHandler);
closeModalBtn.addEventListener('click', closeModal);
playerChoiceBtn.forEach(btn => {
	btn.addEventListener('click', e => {
		gameHandler(e);
		gameResult();
	});
});
playAgainBtn.addEventListener('click', playAgain);
