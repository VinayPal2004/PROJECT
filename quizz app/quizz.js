const questions = [
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "Who wrote the National Anthem of India?",
        answers: [
            { text: "Rabindranath Tagore", correct: true },
            { text: "Mahatma Gandhi", correct: false },
            { text: "Subhash Chandra Bose", correct: false },
            { text: "Jawaharlal Nehru", correct: false }
        ]
    },
    {
        question: "What is the smallest prime number?",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false }
        ]
    },
    {
        question: "Which gas do plants absorb during photosynthesis?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Carbon dioxide", correct: true },
            { text: "Hydrogen", correct: false }
        ]
    }
];
let index = 0;
let score =0;
const quebox = document.getElementById('ques');
const options = document.querySelectorAll('.btn');
const submit = document.getElementById('submitbtn');
const restart = document.getElementById('restartbtn');

/* show question*/
function loadquestions(){
    const data = questions[index];
    quebox.innerHTML =`${index+1}. ${data.question}`;
    options.forEach((btn,index)=>{
        btn.innerHTML = data.answers[index].text;
        btn.dataset.correct = data.answers[index].correct;
        btn.classList.remove('correct','wrong');
        btn.disabled = false;
        btn.style.display ='inline-block';

    });
    submit.style.display ='inline-block';
if(index === questions.length -1){
    submit.innerText = 'Submit';

}
else{
    submit.innerText ='Next';

}
restart.style.display='none';
};
options.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const iscorrect = e.target.dataset.correct === 'true';
        if(iscorrect)score++;
        options.forEach((btn)=>{
            if(btn.dataset.correct ==='true'){
                btn.classList.add('correct');

            }
            
               else if (btn === e.target && !iscorrect) btn.classList.add("wrong");
            
        });
    });
});
submit.addEventListener('click',()=>{
    index++;
    if(index < questions.length){
        loadquestions();
    }
    else{
        showscore();
        }
});
const showscore =()=>{
    quebox.innerHTML = `Your Score is ${score} out of ${questions.length}`;
    options.forEach(btn => btn.style.display ='none');
    submit.style.display ='none';
    restart.style.display='inline-block';

}
restart.addEventListener('click',()=>{
    index =0;
    score =0;
    loadquestions();
});





loadquestions();


