
const player1Dice = document.getElementById("player1-dice");
const player2Dice = document.getElementById("player2-dice");
const result = document.getElementById("result");
const rollButton = document.getElementById("roll-button");
const nameInput = document.getElementById("name-input");
const updateNameButton = document.getElementById("update-name-button");
const player1Name = document.getElementById("player1-name");

rollButton.addEventListener("click", () => {
    result.textContent = "Rolling...";
    const interval = setInterval(() => {
        player1Dice.src = `images/dice${Math.floor(Math.random() * 6) + 1}.png`;
        player2Dice.src = `images/dice${Math.floor(Math.random() * 6) + 1}.png`;
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        const player1Roll = Math.floor(Math.random() * 6) + 1;
        const player2Roll = Math.floor(Math.random() * 6) + 1;
        player1Dice.src = `images/dice${player1Roll}.png`;
        player2Dice.src = `images/dice${player2Roll}.png`;

        if (player1Roll > player2Roll) {
            result.textContent = `${player1Name.textContent} Wins! 🏆`;
        } else if (player1Roll < player2Roll) {
            result.textContent = "Player 2 Wins! 🏆";
        } else {
            result.textContent = "It's a Draw! 🤝";
        }
    }, 3000);
});

updateNameButton.addEventListener("click", () => {
    const newName = nameInput.value.trim();
    if (newName) {
        player1Name.textContent = newName;
        nameInput.value = "";
    }
});
