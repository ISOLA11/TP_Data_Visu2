
const counterElement = document.getElementById('counter');
const increaseButton = document.getElementById('increaseBtn');
const decreaseButton = document.getElementById('decreaseBtn');
const resetButton = document.getElementById('resetBtn');

let counterValue = 0;

// Fonction pour mettre à jour la valeur du compteur dans le DOM
function updateCounterValue() {
  counterElement.textContent = counterValue;
}

// Fonction pour incrémenter le compteur
function increaseCounter() {
  counterValue++;
  updateCounterValue();
}

// Fonction pour décrémenter le compteur
function decreaseCounter() {
  counterValue--;
  updateCounterValue();
}

// Fonction pour remettre le compteur à zéro
function resetCounter() {
  counterValue = 0;
  updateCounterValue();
}

// Ajouter les gestionnaires d'événements
increaseButton.addEventListener('click', increaseCounter);
decreaseButton.addEventListener('click', decreaseCounter);
resetButton.addEventListener('click', resetCounter);
