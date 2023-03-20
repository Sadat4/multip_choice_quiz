//Questions
var questionBank= [
    {
        question : 'What is the first phase of software development?',
        option : ['Coding','Testing','Design','Requirement analysis'],
        answer : 'Requirement analysis'
    },
    {
        question : 'Design phase includes:',
        option : ['Data, architectural, interface and procedural designs','Architectural, procedural and interface designs only','Data, architecture and procedural designs only','All of these'],
        answer : 'Data, architectural, interface and procedural designs'
    },
    {
        question : 'Mnemonic codes and variable names are used in:',
        option : ['a high-level language','a machine Language','A & B','an assembly language'],
        answer : 'an assembly language'
    },
    {
        question : 'Top-down design does not require',
        option : ['Modularity','Flow Charting','Loop invariants','Step-wise refinement'],
        answer : 'Loop invariants'
    },
    {
        question : 'Railway reservation system currently operational in India can be classified as a',
        option : ['Expert system','Online system','Real time system','Catch processing system'],
        answer : 'Online system'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
//var sub = document.getElementById('submitdetail').textContent = "Answers Successfully Submitted";
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//display questions function
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//calculating scores function
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//next question display function
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//next button click
next.addEventListener('click',nextQuestion);

//Back to Quiz button 
function backToQuiz(){
    location.reload();
}

// function for submit

// function sub()(
//     document.getElementById('submitdetail').textContent = "Answers Successfully Submitted";
// )


//check Answers function
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}



displayQuestion();