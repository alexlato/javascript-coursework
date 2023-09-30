'use strict';

// Selecting elements
const player0E1 = document.querySelector('.player--0');
const player1E1 = document.querySelector('.player--1');
const score0E1 = document.querySelector('#score--0');
const score1E1 = document.querySelector('.score--1');
const current0E1 = document.querySelector('.current--0');
const current1E1 = document.querySelector('.current--1');

const diceE1 = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  (activePlayer = 0), (playing = true);

  score0E1.textContent = 0;
  score1E1.textContent = 0;
  current0E1.textContent = 0;
  current1E1.textContent = 0;

  diceE1.classList.add('hidden');
  player0E1.classList.remove('player--winner');
  player1E1.classList.remove('player-winner');
  player0E1.classList.add('palyer-active');
  player1E1.classList.remove('remove--active');
};

init();
