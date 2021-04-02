const userScoreCard = document.querySelector(".score .user");
const compScoreCard = document.querySelector(".score .comp");
const rockButton = document.querySelector(".options .r");
const paperButton = document.querySelector(".options .p");
const scissorsButton = document.querySelector(".options .s");
const status = document.querySelector(".status");

let userScore = 0;
let compScore = 0;
let statusString;
let userChoice;
let result;

let compChoice = randChoice();

main();

function randChoice() {
	switch (Math.floor(Math.random() * 3) + 1) {
		case 1:
			return "r";
		case 2:
			return "p";
		case 3:
			return "s";
	}
};

function main() {
	rockButton.addEventListener("click", () => {
		userChoice = "r";
		checkDecision(userChoice);
		compChoice = randChoice();
	});

	paperButton.addEventListener("click", () => {
		userChoice = "p";
		checkDecision(userChoice);
		compChoice = randChoice();
	});

	scissorsButton.addEventListener("click", () => {
		userChoice = "s";
		checkDecision(userChoice);
		compChoice = randChoice();
	});
};

function checkDecision(userChoice) {
	switch (userChoice + compChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice);
			break;
		case "rp":
		case "sr":
		case "ps":
			loss(compChoice);
			break;
	}
	userScoreCard.innerHTML = userScore;
	compScoreCard.innerHTML = compScore;
};

function win(user) {
	userScore++;
	switch (user) {
		case "r":
			statusString = "Rock crushed Scissors. ";
			break;
		case "p":
			statusString = "Paper covered Rocks. ";
			break;
		case "s":
			statusString = "Scissors sliced Paper. ";
			break;
	}
	status.innerHTML = statusString + "<strong>You</strong> win.";

	document.querySelector(`.${userChoice}`).classList.add("win");
	setTimeout(() => document.querySelector(`.${userChoice}`).classList.remove("win"), 600)
};

function loss(comp) {
	compScore++;
	switch (comp) {
		case "r":
			statusString = "Rock crushed Scissors. ";
			break;
		case "p":
			statusString = "Paper covered Rocks. ";
			break;
		case "s":
			statusString = "Scissors sliced Paper. ";
			break;
	}
	status.innerHTML = statusString + "<strong>Comp</strong> wins.";
	document.querySelector(`.${userChoice}`).classList.add("loss");
	setTimeout(() => document.querySelector(`.${userChoice}`).classList.remove("loss"), 600)

};

function draw(user) {
	switch (user) {
		case "r":
			statusString = "Two Rocks collided. ";
			break;
		case "p":
			statusString = "Two Papers stacked. ";
			break;
		case "s":
			statusString = "Two Scissors crossed.";
			break;
	}
	status.innerHTML = statusString + "<strong>Draw</strong>.";
	document.querySelector(`.${userChoice}`).classList.add("draw");
	setTimeout(() => document.querySelector(`.${userChoice}`).classList.remove("draw"), 600)
};




