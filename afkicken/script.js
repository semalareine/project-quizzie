const questions = [
    {
        question: "Wat betekent afkicken?",
        answers: ["Beginnen met gebruiken", "Stoppen met een verslaving", "Minder slapen", "Meer werken"],
        correct: 1
    },
    {
        question: "Wat zijn ontwenningsverschijnselen?",
        answers: ["Beloningen", "Klachten bij stoppen", "Gezonde effecten", "Hobby’s"],
        correct: 1
    },
    {
        question: "Wat helpt bij afkicken?",
        answers: ["Alleen blijven", "Hulp zoeken", "Meer gebruiken", "Niets doen"],
        correct: 1
    },
    {
        question: "Wie kan helpen bij afkicken?",
        answers: ["Niemand", "Vrienden en hulpverleners", "Alleen jezelf", "Internet alleen"],
        correct: 1
    },
    {
        question: "Wat is een voorbeeld van professionele hulp?",
        answers: ["Gamen", "Therapie", "Winkelen", "Slapen"],
        correct: 1
    },
    {
        question: "Waarom is afkicken moeilijk?",
        answers: ["Het is leuk", "Geen motivatie", "Lichamelijke en mentale drang", "Te makkelijk"],
        correct: 2
    },
    {
        question: "Wat helpt terugval voorkomen?",
        answers: ["Oude gewoontes", "Triggers vermijden", "Meer stress", "Alleen zijn"],
        correct: 1
    },
    {
        question: "Wat is een trigger?",
        answers: ["Iets dat je helpt stoppen", "Iets dat je laat terugvallen", "Een beloning", "Een doel"],
        correct: 1
    },
    {
        question: "Wat is belangrijk tijdens herstel?",
        answers: ["Geheim houden", "Ondersteuning", "Meer risico nemen", "Isolatie"],
        correct: 1
    },
    {
        question: "Hoe lang duurt afkicken?",
        answers: ["1 dag", "Altijd hetzelfde", "Verschilt per persoon", "Nooit lang"],
        correct: 2
    }
];


const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');

// Toggle menu on burger click
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
        nav.classList.remove('active');
    }
});

// Optional: close menu when clicking a link
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