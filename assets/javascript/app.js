const start = document.getElementById("start")
console.log(start)
$(document).ready(function(){
    $("#timeremaining").hide();
    $("#start").on("click",tgame.guesscheker);
}
    const tgame = {
     timer:30,
     currentQuestion:0,
     choices: [],
     userGuess:0,
     correctAnswer:0,
     noanswer:0,
     timerOn: false,
     timerid: "",
    }

const questions =[
    {
         question: "Whos is top world cup scorer?",
         answers:"Miroslav Klose", 
         choices: ("Ronaldo","Miroslav Klose", "Gerd muller","Pele")
         
        },

    {
        question: "What wsa the name of englands song for the 96 world cup?",
        answers:"Its coming home", 
        choises: ("Can't get enough","Its our time", "Never back down","Its coming home")
        
    },
    {
        question: "What was the name of the official 2010 world cup by shakira?",
        answers:"waka Waka", 
        choises: ("Its time for africa","hips dont lie", "Waka Waka","The cup")
        
    },

    {
        question: "Where was the first world cup tournament held in 1930?",
        answers:"Uruguay", 
        choises: ("Uruguay","England", "Brazil","Germany")
        
    },

    {
        question: "For which World cup, was the tournoment expandes to 32 teams? ",
        answers:"France 98", 
        choises: ("USA 94","Italy 90", "France 98","Mexico 86")
        
    },

    {
        question: "How many nations took part in the first FIFA World cup in 1930?",
        answers:"13", 
        choises: ("13","16", "8","10")
        
    },

    {
        question: "How many world cups have Germany won",
        answers:"Four", 
        choises: ("Four","Three", "Five","Two")
        
    },

    {
        question: "What was the name of the Trophy awarded from 1930 to 1970",
        answers:"Jules Rimet Trophy", 
        choises: ("Jules Rimet Trophy","World Cup trophy", "Fifa Cup","Gold Cup")
        
    },

    {
        question: "Which two nations have hosted a world cup together",
        answers:"Korea-Japan", 
        choises: ("Mexico-USA","Argentina-Chile", "Korea-Japan","Spain-france")
        
    },

    {
         question: "Which Nation has made three World Cup final apperances but never won? ",
        answers:"Netherlands", 
        choises: ("Netherlands","Hungary", "Czechoslovakia","Argentina")
        
    },
];

    startgame: function() {
        tgame.currentQuestion =0;
        tgame.userGuess =0;
        tgame.correctAnswer =0;
        tgame.noanswer =0;
       
        clearInterval(tgame.timerid);

        $("#tgame").show();
        $("#start").hide();
        $("#timer").show(tgame.timer)
        $("#timeremaining").show();
        $("#results").innerhtml("");

        tgame.nextquestion();
    }

    nextquestion : function  () {
        
        tgame.timer =30;
    $('#timer').text(tgame.timer);
    if(!tgame.timerOn){
        tgame.timerId = setInterval(trivia.timerRunning, 1000);
    }
        
    }() 

    const questionContent = Object.values(tgame.questions)[tgame.currentquestion];
    $('#question').text(questionContent);

    $.Each(questions)

    else if() {}

    $("results")

    while (game.question.length < 10); {
        number = math.floor(math.random() *questions.length);
      if (!(game.question.indexof(questions[Number]) >= 0)) game.question.push(questions[Number]) {
          
      }  
    }
    console.log (questions[number]);





// create a start funtion
// create array with questions 
// create variebles with html ids 
// create timer interval
// funtion for correct and wrong answer
// gif in answer page 
// rigth and wrong answers functions
//results and score 
// reset game function
// music 


  

