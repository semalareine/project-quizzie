const questions = [
    {
        question: "Wat is een lichamelijk effect van verslaving?",
        answers: ["Geluk", "Slechte conditie", "Vriendschap", "Hobby’s"],
        correct: 1
    },
    {
        question: "Wat is een psychisch effect?",
        answers: ["Spierpijn", "Depressie", "Hoofdpijn", "Vermoeidheid"],
        correct: 1
    },
    {
        question: "Verslaving kan leiden tot:",
        answers: ["Betere concentratie", "Schulden", "Meer energie", "Gezondheid"],
        correct: 1
    },
    {
        question: "Wat gebeurt er vaak met relaties bij verslaving?",
        answers: ["Ze verbeteren", "Ze blijven gelijk", "Ze verslechteren", "Ze verdwijnen niet"],
        correct: 2
    },
    {
        question: "Wat is een sociaal effect?",
        answers: ["Hoesten", "Isolatie", "Misselijkheid", "Zweten"],
        correct: 1
    },
    {
        question: "Wat gebeurt er met schoolprestaties?",
        answers: ["Verbeteren", "Blijven gelijk", "Verslechteren", "Worden perfect"],
        correct: 2
    },
    {
        question: "Wat kan langdurig drugsgebruik veroorzaken?",
        answers: ["Gezondheid", "Hersenschade", "Energie", "Focus"],
        correct: 1
    },
    {
        question: "Wat is een financieel effect?",
        answers: ["Sparen", "Schulden", "Rijk worden", "Investeren"],
        correct: 1
    },
    {
        question: "Wat kan verslaving doen met emoties?",
        answers: ["Stabiliseren", "Versterken van negatieve gevoelens", "Verdwijnen", "Altijd blij maken"],
        correct: 1
    },
    {
        question: "Wat gebeurt er vaak met werk?",
        answers: ["Promotie", "Ontslag", "Bonus", "Meer vrije tijd"],
        correct: 1
    }
];

const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');


menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});


document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
        nav.classList.remove('active');
    }
});


const navLinks = nav.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

let currentQuestion = 0;
let score = 0;

const questionBox = document.getElementById("questionbox");
const answersDiv = document.getElementById("answers");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");

function loadQuestion() {
    const q = questions[currentQuestion];

    
    questionBox.textContent = q.question;

    
    progressText.textContent = `VRAAG ${currentQuestion + 1}/${questions.length}`;

   
    progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;

    
    answersDiv.innerHTML = "";

    
    q.answers.forEach((answer, index) => {
        const btn = document.createElement("div");
        btn.classList.add("answer");
        btn.textContent = answer;

        btn.onclick = () => selectAnswer(btn, index);

        answersDiv.appendChild(btn);
    });
}

function selectAnswer(element, index) {
    const correctIndex = questions[currentQuestion].correct;
    const allAnswers = document.querySelectorAll(".answer");

    allAnswers.forEach((ans, i) => {
        ans.onclick = null; 

        if (i === correctIndex) {
            ans.classList.add("correct");
        } else if (i === index) {
            ans.classList.add("wrong");
        }
    });

    if (index === correctIndex) {
        score++;
    }

    setTimeout(() => {
        currentQuestion++;

        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 1000);
}


function showResult() {
    questionBox.textContent = `${score}/${questions.length}`;
    answersDiv.innerHTML = "";
    progressText.textContent = "Bless";
    progressFill.style.width = "100%";

    document.getElementById('restartBtn').style.display = 'block';
}

loadQuestion();