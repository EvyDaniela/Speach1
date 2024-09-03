let timerElement = document.getElementById('timer');
let nextButton = document.getElementById('next-button');
let questionContainer = document.getElementById('question-container');
let options = document.querySelectorAll('.option');
let scoreboard = document.getElementById('scoreboard');
let nameContainer = document.getElementById('name-container');
let playerNameInput = document.getElementById('player-name');
let startQuizButton = document.getElementById('start-quiz');
let quizFooter = document.getElementById('quiz-footer');
let time = 30;
let score = 0;
let playerName = '';

// Iniciar el quiz
startQuizButton.addEventListener('click', function() {
    playerName = playerNameInput.value.trim();
    if (playerName === '') {
        alert('Por favor, ingresa tu nombre');
        return;
    }
    nameContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    quizFooter.style.display = 'block';
    startTimer();
});

// Iniciar el cronómetro
function startTimer() {
    let timer = setInterval(() => {
        time--;
        timerElement.textContent = time;
        if (time <= 0) {
            clearInterval(timer);
            showAnswer();
        }
    }, 1000);
}

// Manejar clic en opciones
options.forEach(option => {
    option.addEventListener('click', function() {
        if (this.getAttribute('data-answer') === 'correct') {
            score++;
            this.style.backgroundColor = '#28a745'; // Verde para correcto
        } else {
            this.style.backgroundColor = '#dc3545'; // Rojo para incorrecto
        }
        showAnswer();
    });
});

// Mostrar la respuesta correcta
function showAnswer() {
    options.forEach(option => {
        if (option.getAttribute('data-answer') === 'correct') {
            option.style.backgroundColor = '#28a745'; // Verde para correcto
        }
    });
    nextButton.style.display = 'block';
}

// Siguiente pregunta
nextButton.addEventListener('click', function() {
    // Aquí se debería cargar la siguiente pregunta
    alert('Cargar la siguiente pregunta.');
    updateScoreboard();
});

// Actualizar la tabla de puntuaciones
function updateScoreboard() {
    let li = document.createElement('li');
    li.textContent = `${playerName}: ${score} puntos`;
    scoreboard.appendChild(li);
    resetQuiz();
}

// Reiniciar el cuestionario
function resetQuiz() {
    score = 0;
    time = 30;
    timerElement.textContent = time;
    nextButton.style.display = 'none';
    options.forEach(option => {
        option.style.backgroundColor = '#007bff';
    });
    startTimer();
}

