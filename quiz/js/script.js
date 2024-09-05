let timerElement = document.getElementById('timer');
let questionContainer = document.getElementById('question-container');
let options = document.querySelectorAll('.option');
let scoreboard = document.getElementById('scoreboard');
let nameContainer = document.getElementById('name-container');
let playerNameInput = document.getElementById('player-name');
let startQuizButton = document.getElementById('start-quiz');
let quizFooter = document.getElementById('quiz-footer');
let modal = document.getElementById('results-modal');
let closeButton = document.getElementsByClassName('close-button')[0];
let closeModalButton = document.getElementById('close-modal');
let finalScoreElement = document.getElementById('final-score');
let finalTimeElement = document.getElementById('final-time');
let finalAccuracyElement = document.getElementById('final-accuracy');
let currentQuestionIndex = 0;
let interval;
let time = 0;
let score = 0;
let playerName = '';
let userAnswers = [];

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
    loadQuestion();
    startTimer();  // Iniciar cronómetro inmediatamente al empezar
});

let questions = [
    {
        question: "What is Machine Code?",
        options: [
            {text: "A high-level programming language", correct: false},
            {text: "Native computer code that can be understood without translation", correct: true},
            {text: "A type of encryption", correct: false},
            {text: "A coding style guide", correct: false},
        ],
    },
    {
        question: "What does Maintenance refer to in software context?",
        options: [
            {text: "The cleaning of computer hardware", correct: false},
            {text: "The upkeep of a software program", correct: true},
            {text: "The process of creating new software", correct: false},
            {text: "The deletion of old files", correct: false},
        ],
    },
    {
        question: "What does 'Manage' mean?",
        options: [
            {text: "To create", correct: false},
            {text: "To destroy", correct: false},
            {text: "To handle or control", correct: true},
            {text: "To ignore", correct: false},
        ],
    },
    {
        question: "What does 'Migrate' mean in a technological context?",
        options: [
            {text: "To upgrade software", correct: false},
            {text: "To move from one place to another", correct: true},
            {text: "To copy data", correct: false},
            {text: "To delete information", correct: false},
        ],
    },
    {
        question: "What does 'Modify' mean?",
        options: [
            {text: "To create something new", correct: false},
            {text: "To delete", correct: false},
            {text: "To change or alter", correct: true},
            {text: "To leave unchanged", correct: false},
        ],
    },
    {
        question: "What does NaaS stand for?",
        options: [
            {text: "Network as a Service", correct: true},
            {text: "New as a System", correct: false},
            {text: "Network and System", correct: false},
            {text: "None as a Service", correct: false},
        ]
    },
    {
        question: "What is NAT?",
        options: [
            {text: "New Address Technology", correct: false},
            {text: "Network Address Translation", correct: true},
            {text: "National Advanced Technology", correct: false},
            {text: "Network Administration Tool", correct: false},
        ]
    },
    {
        question: "What is a Network?",
        options: [
            {text: "A single computer", correct: false},
            {text: "A system of connected devices that can share information with each other", correct: true},
            {text: "A type of software", correct: false},
            {text: "A cloud storage service", correct: false},
        ]
    },
    {
        question: "What is a Network Adapter?",
        options: [
            {text: "A software program", correct: false},
            {text: "A device that connects your computer to a network", correct: true},
            {text: "A type of cable", correct: false},
            {text: "A wireless router", correct: false},
        ]
    },
    {
        question: "What does 'Outdated' mean?",
        options: [
            {text: "Recently updated", correct: false},
            {text: "Currently in use", correct: false},
            {text: "Out of date", correct: true},
            {text: "Highly advanced", correct: false},
        ]
    },
    {
        question: "What is Open Source software?",
        options: [
            {text: "Software that is free to use", correct: false},
            {text: "Software with restricted access", correct: false},
            {text: "A program in which the code is distributed allowing programmers to alter and change the original software", correct: true},
            {text: "Software developed by a single company", correct: false},
        ]
    },
    {
        question: "What is an Operating System?",
        options: [
            {text: "A type of computer hardware", correct: false},
            {text: "Software that communicates with computer hardware and allows other software to run", correct: true},
            {text: "A network protocol", correct: false},
            {text: "A programming language", correct: false},
        ]
    },
    {
        question: "What does 'Obsolete' mean?",
        options: [
            {text: "Newly introduced", correct: false},
            {text: "Currently popular", correct: false},
            {text: "Not used anymore", correct: true},
            {text: "Under development", correct: false},
        ]
    },
    {
        question: "In the context of social media, what does 'Organic' content refer to?",
        options: [
            {text: "Content related to nature and environment", correct: false},
            {text: "Paid advertisements", correct: false},
            {text: "Content that ranks highly because individual users have liked, reposted, or viewed it", correct: true},
            {text: "Content that is created by automated systems", correct: false},
        ]
    },
    {
        question: "What does 'Optimize' mean in technology?",
        options: [
            {text: "To make less efficient", correct: false},
            {text: "To make something worse", correct: false},
            {text: "To improve performance and efficiency", correct: true},
            {text: "To remove features", correct: false},
        ]
    },
    {
        question: "What is 'Open Source' software?",
        options: [
            {text: "Software with source code that anyone can inspect, modify, and enhance", correct: true},
            {text: "Software that is only available for purchase", correct: false},
            {text: "Proprietary software with limited access", correct: false},
            {text: "Software that is not functional", correct: false},
        ]
    }
];

// Iniciar el cronómetro
function startTimer() {
    time = 0;
    interval = setInterval(() => {
        time++;
        timerElement.textContent = formatTime(time);
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Cargar pregunta
function loadQuestion() {
    resetOptions();
    let currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    options.forEach((option, index) => {
        option.textContent = currentQuestion.options[index].text;
        option.setAttribute('data-answer', currentQuestion.options[index].correct ? 'correct' : 'incorrect');
    });
}

function resetOptions() {
    options.forEach(option => {
        option.className = 'option'; // Reset class to default
        option.disabled = false;
    });
}

// Mostrar la respuesta correcta
function showAnswer() {
    options.forEach(option => {
        if (option.getAttribute('data-answer') === 'correct') {
            option.classList.add('correct');
            option.style.backgroundColor = '#28a745';
        }

    });
}

// Manejar clic en opciones
options.forEach(option => {
    option.addEventListener('click', function() {
        stopTimer();
        let isCorrect = this.getAttribute('data-answer') === 'correct';
        if (isCorrect) {
            score += 100 +time; // Aumenta el puntaje basado en la rapidez
            this.classList.add('correct');
        } else {
            this.classList.add('incorrect');
        }

        // Guardar la respuesta del usuario
        userAnswers.push({
            question: questions[currentQuestionIndex].question,
            selectedOption: this.textContent,
            correctOption: questions[currentQuestionIndex].options.find(opt => opt.correct).text,
            isCorrect: isCorrect
        });

        options.forEach(opt => opt.disabled = true); // Deshabilitar todas las opciones
        setTimeout(nextQuestion, 1000); // Espera 1 segundo y pasa a la siguiente pregunta
    });
});

// Pasar a la siguiente pregunta
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showSummary(); // Mostrar resumen cuando el quiz haya terminado
    }
}

// Mostrar resumen del quiz
function showSummary() {
    stopTimer();
    updateScoreboard();
    displayResultsModal(); // Mostrar el modal con resultados
}

// Actualizar la tabla de puntuaciones
function updateScoreboard() {
    let li = document.createElement('li');
    li.textContent = `${playerName}: ${score} puntos`;
    scoreboard.appendChild(li);
}

// Mostrar modal de resultados
function displayResultsModal() {
    // Calcular aciertos
    let correctAnswers = userAnswers.filter(answer => answer.isCorrect).length;
    let totalTime = formatTime(time); // Tiempo en formato mm:ss
    
    // Mostrar resultados en el modal
    finalScoreElement.textContent = `Puntuación: ${score} puntos`;
    finalTimeElement.textContent = `Tiempo: ${totalTime}`;
    finalAccuracyElement.textContent = `Aciertos: ${correctAnswers}`;
    
    // Mostrar el modal
    modal.style.display = 'block';
}

// Cerrar el modal
closeButton.onclick = function() {
    modal.style.display = 'none';
}

closeModalButton.onclick = function() {
    modal.style.display = 'none';
}

// Cerrar el modal si el usuario hace clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
// reiniciar el question
function resetQuiz(){
    time = 0;
    score = 0;
    time = 30;
    timerElement.textContent = time;
    nextButton.style.display = 'none';
    options.forEach(option => {
        option.style.backgroundColor = '#007bff';
    });
    startTimer();
}