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
      "French bulldogs cant swim",
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
      "Jurassicpark",
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
    $("#finalStats").append(" <button id='restartButton' type='button' class='button'>Restart</button>")
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
    if (questionNumber === 4) {
      //if answer 5 is correct display The rock photo
      $("#response").html(
        `<div id='correct'><h3>Your answer is correct!</h3>  
        <img src='images/the-rock.jpg' alt='the rock and hobbs'
        class='images' width='200px'/></div>
        `
      )
    } else {
 // if answer is correct display happy frenchie goodjob
    //increase score
      $("#response").html(
        `<div id='correct'><h3>Your answer is correct!</h3>  
        <img src='images/happy.jpg' alt='happy french bulldog'
        class='images' width='200px'/></div>
        `
      );
     
      
    }
   
    //if answer is wrong display sad frenchie and correct answer
  } else {
    $("#response").html(
      `<div id='wrong'><h3>That's the wrong answer...</h3>
      <img src='images/sad.jpg' alt='sad french bulldog'
      class='images' width='200px'>
      <p class='wrongAnsTxT'>It's actually:</p>
      <p class='wrongAnsTxt'>${STORE[questionNumber].correctAnswer}</p>
     </div>`
    )

    
  } 
  //adds next button to response
  $("#response").append(" <button id='nextButton' type='button' class='button'>Next</button>")
  
}

// display next question
//add to questionNumber
//reset radio button
function nextQuestion() {
  $("input[name = 'choices']:checked")[0].checked = false;
  
  questionNumber++;
  displayQuestion();
 
}


  
    
      
      

 
  
  
  
  

$(document).ready(function(){
  $("#response").hide();
  $("#finalStats").hide();
  $(".question-box").hide();
  //start quiz
//--click a button to start
//--listen for a click on the start button
//--create id for start button to distingish from other buttons
  $("#startButton").on("click", function(event) {
    $("#startQuiz").hide();
    $(".question-box").show();
    displayQuestion();
  });
  
//-----------------
//submit answer
  $("#submit").on("click", function(event) {
    checkAnswer(event);
    $("#response").show();
    $(".question-box").hide();
  });
  //---------
  //Go to next question
  $("body").on("click", "#nextButton", function(event) {
    nextQuestion();
    $("#wrong, #correct, #nextButton").hide();
    $("#response").hide();
    
    //restart quiz
    $("body").on("click", "#restartButton", function(event) {
      event.preventDefault();
      resetStats();
      $("#startQuiz").show();
      $("#finalStats").hide();
      
    });

    

  });


  
})