const questions = [
    {
        prompt: "What is the only country that lemurs are native to?",
        correctAnswer: "Madagascar",
        answers: ["Madagascar", "Japan", "Brazil", "Romania"]
    },
    {
        prompt: "What is the worlds largest mammal?",
        correctAnswer: "Blue Whale",
        answers: ["Blue Whale", "Polar Bear", "Sperm Whale", "Humpback Whale"]
    },
    {
        prompt: "What is the largest fish species?",
        correctAnswer: "Whale Shark",
        answers: ["Whale Shark", "Great White Shark", "Sturgeon", "Basking Shark"]
    },
    {
        prompt: "What type of tree is the largest in the world?",
        correctAnswer: "Redwood",
        answers: ["Redwood", "Oak", "Sequoias", "Eucalyptus"]
    },
    {
        prompt: "what is the worlds fastest bird?",
        correctAnswer: "Peregrine Falcon",
        answers: ["Peregrine Falcon", "Golden Eagle", "Frigate Bird", "Gryfalcon"]
    }
];

let questionNumber = 0;
let score = 0;


function getQuestionAndAnswers() {
    if (questionNumber < questions.length) {
      
        $('.the-question').html(questions[questionNumber].prompt);
        $('.choice-1').html(questions[questionNumber].answers[0]);
        $('.choice-2').html(questions[questionNumber].answers[1]);
        $('.choice-3').html(questions[questionNumber].answers[2]);
        $('.choice-4').html(questions[questionNumber].answers[3]);
        $('input[value=answer-1').val(questions[questionNumber].answers[0]);
        $('input[value=answer-2').val(questions[questionNumber].answers[1]);
        $('input[value=answer-3').val(questions[questionNumber].answers[2]);
        $('input[value=answer-4').val(questions[questionNumber].answers[3]);
        
    }
}


function updateNumberCount() {
    questionNumber ++;
    $(".question-count").html(questionNumber);
}

function updateScore() {
    score += 25;
    $(".current-score").html(score);
}


/*function hideStart() {
    $(".start-page").addClass('hidden');
    $(".question-form").removeClass('hidden');
}*/

function startGame() {
    $(".start-page").on('click', ".start-button", function(event) {
        $(".start-page").addClass('hidden');
        $(".question-form").removeClass('hidden');
        updateNumberCount();
        event.preventDefault();   
        console.log(questionNumber);   
    });
}

/*function renderQuestion() {
    $('.question-form').html(getQuestionAndAnswers());
}*/

/*function clearChoices() {
    $('input[type=radio]').prop('checked', false);
    $("input").closest('div').css('background-color', 'white');
}*/

function wrongFeedback() {
    $(".question-form").addClass('hidden');
    $(".wrong-feedback").removeClass('hidden');
}
function correctFeedback() {
    $(".question-form").addClass('hidden');
    $(".correct-feedback").removeClass('hidden');
}

function evaluateChoice() {
    $('form').on('submit', function(event) {
    event.preventDefault();
    let choice = $('input:checked').val();
    let rightAnswer = questions[questionNumber-1].correctAnswer;
    if (choice === rightAnswer) {
        correctFeedback();
        updateScore();
    } else {
        wrongFeedback();
    }
    });
}

function nextQuestion() {
    console.log(questionNumber);
    $(".next").on('submit', function(event) {
        $(".question-form").removeClass('hidden');
        $(".correct-feedback").addClass('hidden');
        $(".wrong-feedback").addClass('hidden');
        updateNumberCount();
        getQuestionAndAnswers();
        event.preventDefault();
        console.log(questionNumber);
    });
}

function quiz() {
    startGame();
    getQuestionAndAnswers();
    evaluateChoice();
    nextQuestion();
}

$(quiz);











