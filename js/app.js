const rulesBtn = document.querySelector('.rules__btn');
const modal = document.querySelector('.modal');
const closeModalBtn = modal.querySelector('.modal__btn');
const playerChoiceBtn = document.querySelectorAll('.circle-btn');
const gameBoard = document.querySelector('.game-board');
const startGame = document.querySelector('.start-game');
const playerImg = document.querySelector('.player-selection-img');

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
	const circle = document.querySelector('.player__selection');
	const image = document.querySelector('.player-selection-img');
	if (playerChoiceId === 'paper') {
		image.src = '/images/icon-paper.svg';
		circle.classList.add('paper-styles');
	} else if (playerChoiceId === 'scisorss') {
		image.src = '/images/icon-scissors.svg';
		circle.classList.add('scissors-styles');
	} else {
		image.src = '/images/icon-rock.svg';
		circle.classList.add('rock-styles');
	}
};
const computerPick = () => {
	const image = document.querySelector('.computer-selection-img');
	const circle = document.querySelector('.computer__selection');
	const arr = ['paper', 'scisorss', 'rock'];
	const computerChoice = arr[Math.floor(Math.random() * arr.length)];
	if (computerChoice === 'paper') {
		image.src = '/images/icon-paper.svg';
		circle.classList.add('paper-styles');
	} else if (computerChoice === 'scisorss') {
		image.src = '/images/icon-scissors.svg';
		circle.classList.add('scissors-styles');
	} else {
		image.src = '/images/icon-rock.svg';
		circle.classList.add('rock-styles');
	}
};
const gameHandler = e => {
	gameBoard.style.display = 'flex';
	startGame.style.display = 'none';
	playerPick(e);
	computerPick();
};
rulesBtn.addEventListener('click', rulesHandler);
closeModalBtn.addEventListener('click', closeModal);
playerChoiceBtn.forEach(btn => {
	btn.addEventListener('click', e => {
		gameHandler(e);
	});
});
