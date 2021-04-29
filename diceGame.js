'use strict';
const diceRollButton = document.querySelector('.btn--roll');
const holdScoreButton = document.querySelector('.btn--hold');
const newGameButton = document.querySelector('.btn--new');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');


const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const diceImg = document.querySelector('.dice');

let playing, activePlayer, currentScore, scores;
const init = function () {
    player0.classList.add('player--active');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player1.classList.remove('player--active');


    playing = true;
    activePlayer = 0;
    currentScore = 0;
    scores = [0, 0];

    diceImg.classList.add('hidden');
    score0.textContent = 0;
    score1.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;

};
init();

diceRollButton.addEventListener('click', function () {
    if (playing) {
        const randomDiceRoll = Math.trunc(Math.random() * 6) + 1;
        diceImg.classList.remove('hidden');
        diceImg.src = `dice-${randomDiceRoll}.png`;

        if (randomDiceRoll !== 1) {
            currentScore += randomDiceRoll;
            document.getElementById(
                `current--${activePlayer}`
            ).textContent = currentScore;
        }
        else {
            currentScore = 0;
            document.querySelector(`#current--${activePlayer}`).textContent = 0;
            activePlayer = activePlayer === 0 ? 1 : 0;
            player0.classList.toggle('player--active');
            player1.classList.toggle('player--active');
            
        }
    }
});

holdScoreButton.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 10) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        

        }
        else {
            currentScore = 0;
            document.querySelector(`#current--${activePlayer}`).textContent = 0;
            activePlayer = activePlayer === 0 ? 1 : 0;
            player0.classList.toggle('player--active');
            player1.classList.toggle('player--active');
        }
    }

});
newGameButton.addEventListener('click', init);