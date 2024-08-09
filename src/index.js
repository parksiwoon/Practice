import BaseballGame from './BaseballGame.js';
import { generateRandomNumbers } from './randomNumbers.js';
import { validateInput } from './validateInput.js';

document.addEventListener('DOMContentLoaded', () => {
    const game = new BaseballGame();
    let computerNumbers = generateRandomNumbers();

    const submitButton = document.querySelector('#submit');
    const resultDiv = document.querySelector('#result');
    const userInput = document.querySelector('#user-input');
    const restartButton = document.querySelector('#game-restart-button');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault(); // 폼 제출 방지
        const userNumbers = userInput.value;
        if (validateInput(userNumbers)) {
            const result = game.play(computerNumbers, userNumbers);
            resultDiv.textContent = result;
            if (result === '3스트라이크') {
                restartButton.style.display = 'block';
            }
        } else {
            userInput.value = '';
        }
    });

    restartButton.addEventListener('click', () => {
        computerNumbers = generateRandomNumbers();
        resultDiv.textContent = '';
        userInput.value = '';
        restartButton.style.display = 'none';
    });

    restartButton.style.display = 'none';
});
