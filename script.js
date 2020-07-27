const STORE = [
  {
    question: "Where do French bulldogs originate from?",
    answers: [
      "France",
      "Spain",
      "England",
      "Mexico"
    ],
    correctAnswer: "England"
  },
  {
    question: "How can French bulldogs swim?",
    answers: [
      "Naturally",
      "French bulldogs can't swim",
      "Maybe? if you teach them",
      "With a life jacket"
    ],
    correctAnswer: "French bulldogs cant swim"
  },
  {
    question: "What is the largest recommended weight for a AKC show French bulldog",
    answers: [
      "It's 25 pounds",
      "It's 28 pounds",
      "It's 31 pounds",
      "It's 22 pounds"
    ],
    correctAnswer: "It's 28 pounds"
  },
  {
    question: "In which movie did a French bulldog make an appearance",
    answers: [
      "Topgun",
      "Titanic",
      "Jurassic Park",
      "Dark Knight"
    ],
    correctAnswer: "Titanic"
  },
  {
    question: "What is Dwayne 'The Rock' Johnson's French bulldogs name?",
    answers: [
      "Trappy",
      "Legend",
      "Hobbs",
      "Rockie"
    ],
    correctAnswer: "Hobbs"
  }
];
  

//variable to store the quiz score and question number information
let score = 0;
let questionNumber = 0;




//---------------------
//reset stats
function resetStats() {
  score = 0;
  questionNumber = 0;
  $(".score").text(0);
  $(".questionNumber").text(0);
  
}

//load quiz
//--where is my question
//--store which is an array
//--how do i grab the question im on at that time
//--keep track of what question im on 
//grab answer
function displayQuestion() {
  if (questionNumber < STORE.length) {

    //update question number and score number 
    //update question and answers 
   
    $("#score").text(score);
    $("#questionNumber").text(questionNumber+1);
    let questionTxt = STORE[questionNumber].question;
    let answers = STORE[questionNumber].answers;
    $("#question").text(questionTxt);
    $("#answerLabel0").text(answers[0]);
    $("#answerLabel1").text(answers[1]);
    $("#answerLabel2").text(answers[2]);
    $("#answerLabel3").text(answers[3]);
    $("#answer0").val(answers[0]);
    $("#answer1").val(answers[1]);
    $("#answer2").val(answers[2]);
    $("#answer3").val(answers[3]);
    
    $(".question-box").show();
  }
  else {
    $("#stat").text(score);
    $(".question-box").hide();
    $("#finalStats").show();  
  }  
}



    
    
//---------------
// check answer
function checkAnswer(e) {
  e.preventDefault();
  let userChoice = $("input[name = 'choices']:checked")[0].value;
  let correctAnswer = STORE[questionNumber].correctAnswer;
  
  if (userChoice === correctAnswer) {
    score++;
    $("#correct-wrong").text("correct!");
    if (questionNumber === 4) {
      $("#responseImage").attr("src", "images/the-rock.jpg").attr("alt", "the rock holding a dog");
    
    } else {
      $("#responseImage").attr("src", "images/happy.jpg").attr("alt", "happy dog");
      
    }
    
  } else {
    $("#responseImage").attr("src", "images/sad.jpg").attr("alt", "sad dog");
    $("#correct-wrong").text("wrong!");
    $("#wrongAnsTxt").text(STORE[questionNumber].correctAnswer);

  } 
  
  
  
 
}





// display next question
//add to questionNumber
//reset radio button
function nextQuestion() {
  $("input[name = 'choices']:checked")[0].checked = false;
  
  questionNumber++;
  displayQuestion();
 
}
 //start quiz
//--click a button to start
//--listen for a click on the start button
//--create id for start button to distingish from other buttons
function startButtonListener() {
  $("#startButton").on("click", function(event) {
    $("#startQuiz").hide();
    $(".question-box").show();
    displayQuestion();
  });
}
//-----------------
//submit answer
function submitButtonListener() {
  $("#submit").on("click", function(event) {
    checkAnswer(event);
    $("#response").show();
    $(".question-box").hide();
  });
}
//---------
  //Go to next question
function nextButtonListener() {
  $("body").on("click", "#nextButton", function(event) {
    nextQuestion();
    $("#wrong, #correct").hide();
    $("#response").hide();
  });
}
 //restart quiz
function restartButtonListener() {
  $("#restartButton").on("click", function(event) {
    event.preventDefault();
    resetStats();
    $("#startQuiz").show();
    $("#finalStats").hide();
    
  });

}


  
    
      
    
$(document).ready(function(){
  $("#response").hide();
  $("#finalStats").hide();
  $(".question-box").hide();
 
  startButtonListener();
  submitButtonListener();
  nextButtonListener();
  restartButtonListener(); 
});