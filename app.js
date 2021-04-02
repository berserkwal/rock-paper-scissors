const userScoreCard = document.querySelector(".score .user");
const compScoreCard = document.querySelector(".score .comp");
const rockButton = document.querySelector(".options .rock");
const paperButton = document.querySelector(".options .paper");
const scissorsButton = document.querySelector(".options .scissors");
const status = document.querySelector(".status");

let userScore = 0;
let compScore = 0;
let statusString;
let userChoice;
let result;

let compChoice = randChoice();

main();

function randChoice() {
	return Math.floor(Math.random() * 3) + 1;
};

function main() {
	rockButton.addEventListener("click", () => {
		userChoice = 1;
		rockButton.classList.add("active-selection");
		checkDecision(userChoice);
		setTimeout(() => { rockButton.classList.remove("active-selection"); }, 600);
		compChoice = randChoice();
	});

	paperButton.addEventListener("click", () => {
		userChoice = 2;
		paperButton.classList.add("active-selection");
		checkDecision(userChoice);
		setTimeout(() => { paperButton.classList.remove("active-selection"); }, 600);
		compChoice = randChoice();
	});

	scissorsButton.addEventListener("click", () => {
		userChoice = 3;
		scissorsButton.classList.add("active-selection");
		checkDecision(userChoice);
		setTimeout(() => { scissorsButton.classList.remove("active-selection"); }, 600);
		compChoice = randChoice();
	});
};

function checkDecision(userChoice) {
	switch (userChoice - compChoice) {
		case -1:
		case 2:
			loss(compChoice);
			break;
		case 0:
			draw(userChoice);
			break;
		case 1:
		case -2:
			win(userChoice);
			break;
	}
	userScoreCard.innerHTML = userScore;
	compScoreCard.innerHTML = compScore;
};

function win(user) {
	userScore++;
	switch (user) {
		case 1:
			statusString = "Rock crushed Scissors. ";
			break;
		case 2:
			statusString = "Paper covered Rocks. ";
			break;
		case 3:
			statusString = "Scissors sliced Paper. ";
			break;
	}
	status.innerHTML = statusString + "<strong>You</strong> win.";
};

function loss(comp) {
	compScore++;
	switch (comp) {
		case 1:
			statusString = "Rock crushed Scissors. ";
			break;
		case 2:
			statusString = "Paper covered Rocks. ";
			break;
		case 3:
			statusString = "Scissors sliced Paper. ";
			break;
	}
	status.innerHTML = statusString + "<strong>Comp</strong> wins.";

};

function draw(user) {
	switch (user) {
		case 1:
			statusString = "Two Rocks collided. ";
			break;
		case 2:
			statusString = "Two Papers stacked. ";
			break;
		case 3:
			statusString = "Two Scissors crossed.";
			break;
	}
	status.innerHTML = statusString + "<strong>Draw</strong>.";
};




