var card = $("#quiz-area");
var countStartNumber = 30;

// Question set
var questions =[
    {
         question: "Who is the top world cup scorer?",
         correctAnswer:"Miroslav Klose", 
         answers: ["Ronaldo","Miroslav Klose", "Gerd muller","Pele"],
         img:"assets/images/klose.gif"
        },

    {
        question: "What is the name of englands song for the 96 world cup?",
        correctAnswer:"Its coming home", 
       answers: ["Can't get enough","Its our time", "Never back down","Its coming home"],
       img:"assets/images/klose.gif"
        
    },
    {
        question: "What was the name of the official song for the 2010 world cup by shakira?",
        correctAnswer:"waka Waka", 
       answers: ["Its time for africa","hips dont lie", "Waka Waka","The cup"]
        
    },

    {
        question: "In what country was the first world cup tournament held in 1930?",
        correctAnswer:"Uruguay", 
       answers: ["Uruguay","England", "Brazil","Germany"]
        
    },

    {
        question: "For which World cup, was the tournament expanded to 32 teams? ",
        correctAnswer:"France 98", 
       answers: ["USA 94","Italy 90", "France 98","Mexico 86"]
        
    },

    {
        question: "How many nations took part in the first FIFA World cup in 1930?",
        correctAnswer:"13", 
       answers: ["13","16", "8","10"]
        
    },

    {
        question: "How many world cups have Germany won",
        correctAnswer:"Four", 
       answers: ["Four","Three", "Five","Two"]
        
    },

    {
        question: "What was the name of the Trophy awarded to the World Cup winner from 1930 to 1970",
        correctAnswer:"Jules Rimet Trophy", 
       answers: ["Jules Rimet Trophy","World Cup trophy", "Fifa Cup","Gold Cup"]
        
    },

    {
        question: "Which two nations have CO hosted a world cup",
        correctAnswer:"Korea-Japan", 
       answers: ["Mexico-USA","Argentina-Chile", "Korea-Japan","Spain-france"]
        
    },

    {
         question: "Which Nation has made three World Cup final apperances but never won? ",
       correctAnswer:"Netherlands", 
        answers: ["Netherlands","Hungary", "Czechoslovakia","Argentina"]
        
    },
];



// Variable to hold our setInterval
var timer;

var game = {

  questions: questions,
  currentQuestion: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,

  countdown: function() {
    this.counter--;
    $("#counter-number").text(this.counter);
    if (this.counter === 0) {
      console.log("TIME UP");
      this.timeUp();
    }
  },

  loadQuestion: function() {

    timer = setInterval(this.countdown.bind(this), 1000);

    card.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

    for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
      card.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
      + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
    }
  },

  nextQuestion: function() {
    this.counter = window.countStartNumber;
    $("#counter-number").text(this.counter);
    this.currentQuestion++;
    this.loadQuestion.bind(this)();
  },

  timeUp: function() {

    clearInterval(window.timer);

    $("#counter-number").text(this.counter);

    card.html("<h2>Out of Time!</h2>");
    card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
    card.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (this.currentQuestion === questions.length - 1) {
      setTimeout(this.results, 3 * 1000);
    }
    else {
      setTimeout(this.nextQuestion, 3 * 1000);
    }
  },

  results: function() {

    clearInterval(window.timer);

    card.html("<h2>All done, heres how you did!</h2>");

    $("#counter-number").text(this.counter);

    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    card.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    card.append("<br><button id='start-over'>Start Over?</button>");
  },

  clicked: function(e) {
    clearInterval(window.timer);
    if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
      this.answeredCorrectly();
    }
    else {
      this.answeredIncorrectly();
    }
  },

  answeredIncorrectly: function() {

    this.incorrect++;

    clearInterval(window.timer);

    card.html("<h2>Nope!</h2>");
    card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer + "</h3>");
    card.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (this.currentQuestion === questions.length - 1) {
      setTimeout(this.results.bind(this), 3 * 1000);
    }
    else {
      setTimeout(this.nextQuestion.bind(this), 3 * 1000);
    }
  },

  answeredCorrectly: function() {

    clearInterval(window.timer);

    this.correct++;

    card.html("<h2>Correct!</h2>");
    card.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (this.currentQuestion === questions.length - 1) {
      setTimeout(this.results.bind(this), 3 * 1000);
    }
    else {
      setTimeout(this.nextQuestion.bind(this), 3 * 1000);
    }
  },

  reset: function() {
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};

// CLICK EVENTS

$(document).on("click", "#start-over", game.reset.bind(game));

$(document).on("click", ".answer-button", function(e) {
  game.clicked.bind(game, e)();
});

$(document).on("click", "#start", function() {
  $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
  game.loadQuestion.bind(game)();
});

