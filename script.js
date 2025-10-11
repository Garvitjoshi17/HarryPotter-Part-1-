const questions = [
  {
    question: "What is the name of Harry's school?",
    answer: "HOGWARTS",
    hint: "School of Witchcraft and Wizardry.",
    letters: "HOGWARTS".split("")
  },
  {
    question: "What sport is played on broomsticks?",
    answer: "QUIDDITCH",
    hint: "Harry plays as Seeker.",
    letters: "QUIDDITCH".split("")
  },
  {
    question: "What house does Harry join at Hogwarts?",
    answer: "GRYFFINDOR",
    hint: "House of bravery.",
    letters: "GRYFFINDOR".split("")
  },
  {
    question: "Which house values ambition and cunning?",
    answer: "SLYTHERIN",
    hint: "Snape's house.",
    letters: "SLYTHERIN".split("")
  },
  {
    question: "Who is the headmaster of Hogwarts?",
    answer: "DUMBLEDORE",
    hint: "Wise old wizard.",
    letters: "DUMBLEDORE".split("")
  },
  {
    question: "Who teaches Potions at Hogwarts?",
    answer: "SNAPESEVER",
    hint: "Greasy-haired professor.",
    letters: "SNAPESEVER".split("")
  },
  {
    question: "What is the name of Harry’s owl?",
    answer: "HEDWIGOWL",
    hint: "Snowy and loyal.",
    letters: "HEDWIGOWL".split("")
  },
  {
    question: "What broomstick is gifted to Harry?",
    answer: "NIMBUS2000",
    hint: "Fastest broom of its time.",
    letters: "NIMBUS2000".split("")
  },
  {
    question: "Who is the gamekeeper at Hogwarts?",
    answer: "RUBEUSHAG",
    hint: "Half-giant.",
    letters: "RUBEUSHAG".split("")
  },
  {
    question: "What magical stone grants immortality?",
    answer: "PHILOSTONE",
    hint: "Created by Flamel.",
    letters: "PHILOSTONE".split("")
  },
  {
    question: "What mirror shows your heart's desire?",
    answer: "ERISEDMIRR",
    hint: "Harry sees his parents.",
    letters: "ERISEDMIRR".split("")
  },
  {
    question: "What three-headed dog guards the trapdoor?",
    answer: "FLUFFYDOG",
    hint: "Owned by Hagrid.",
    letters: "FLUFFYDOG".split("")
  },
  {
    question: "What chess game comes alive at Hogwarts?",
    answer: "WIZCHESS",
    hint: "Ron plays bravely.",
    letters: "WIZCHESS".split("")
  },
  {
    question: "What spell creates light from a wand?",
    answer: "LUMOSSPELL",
    hint: "Opposite of Nox.",
    letters: "LUMOSSPELL".split("")
  },
  {
    question: "What creature do Harry and Ron fight in the bathroom?",
    answer: "MOUNTTROL",
    hint: "Big and smelly.",
    letters: "MOUNTTROL".split("")
  },
  {
    question: "What bank keeps wizard money safe?",
    answer: "GRINGOTTS",
    hint: "Run by goblins.",
    letters: "GRINGOTTS".split("")
  },
  {
    question: "What shop sells Harry’s wand?",
    answer: "OLIVANDERS",
    hint: "Makers since 382 BC.",
    letters: "OLIVANDERS".split("")
  },
  {
    question: "What is Harry’s first broomstick model?",
    answer: "NIMBUS2000",
    hint: "Gift from McGonagall.",
    letters: "NIMBUS2000".split("")
  },
  {
    question: "What color is Harry’s eyes?",
    answer: "GREEYEYES",
    hint: "Like his mother.",
    letters: "GREEYEYES".split("")
  },
  {
    question: "What guard creature protects Gringotts?",
    answer: "DRAGONPET",
    hint: "Fire-breathing beast.",
    letters: "DRAGONPET".split("")
  },
  {
    question: "What is the surname of Harry’s aunt and uncle?",
    answer: "DURSLEYS",
    hint: "Live at Privet Drive.",
    letters: "DURSLEYS".split("")
  },
  {
    question: "What is the name of Dudley’s school?",
    answer: "SMELTINGS",
    hint: "He gets a stick as part of uniform.",
    letters: "SMELTINGS".split("")
  },
  {
    question: "Who delivers Harry’s Hogwarts letter?",
    answer: "HAGRIDMAN",
    hint: "In a hut on a rock.",
    letters: "HAGRIDMAN".split("")
  },
  {
    question: "What is the address where Harry lives?",
    answer: "PRIVETDRV",
    hint: "Number 4, ____ Drive.",
    letters: "PRIVETDRV".split("")
  },
  {
    question: "What train takes students to Hogwarts?",
    answer: "HOGWTRAIN",
    hint: "Leaves from Platform 9¾.",
    letters: "HOGWTRAIN".split("")
  },
  {
    question: "What number platform leads to the train?",
    answer: "NINEAND34",
    hint: "You run through a wall.",
    letters: "NINEAND34".split("")
  },
  {
    question: "What ghost haunts Gryffindor tower?",
    answer: "HEADLESSNK",
    hint: "Nearly Headless.",
    letters: "HEADLESSNK".split("")
  },
  {
    question: "What Diagon Alley shop sells books?",
    answer: "FLOURISH",
    hint: "And Blotts.",
    letters: "FLOURISH".split("")
  },
  {
    question: "What is the name of Ron’s pet rat?",
    answer: "SCABBERS",
    hint: "Always with him.",
    letters: "SCABBERS".split("")
  },
  {
    question: "What game decides who wins the House Cup?",
    answer: "QUITCHAMP",
    hint: "Big Quidditch matches.",
    letters: "QUITCHAMP".split("")
  },
  {
    question: "What is the name of the dark forest?",
    answer: "FORBIDDEN",
    hint: "Detention is served there.",
    letters: "FORBIDDEN".split("")
  },
  {
    question: "What animal does Harry talk to at the zoo?",
    answer: "PYTHONSNK",
    hint: "It slithers away.",
    letters: "PYTHONSNK".split("")
  },
  {
    question: "Who is the Defense Against the Dark Arts teacher?",
    answer: "QUIRRELL",
    hint: "Nervous professor with a turban.",
    letters: "QUIRRELL".split("")
  },
  {
    question: "What powerful object does Harry catch in Quidditch?",
    answer: "GOLDENSNC",
    hint: "Tiny flying ball.",
    letters: "GOLDENSNC".split("")
  },
  {
    question: "What magical item makes you invisible?",
    answer: "CLOAKINVS",
    hint: "Gift from Dumbledore.",
    letters: "CLOAKINVS".split("")
  },
  {
    question: "What teacher can transform into a cat?",
    answer: "MCGONAGAL",
    hint: "Head of Gryffindor.",
    letters: "MCGONAGAL".split("")
  },
  {
    question: "Who is the poltergeist of Hogwarts?",
    answer: "PEEVESGG",
    hint: "Causes chaos.",
    letters: "PEEVESGG".split("")
  },
  {
    question: "What is the name of Hagrid’s dog?",
    answer: "FANGDOGGY",
    hint: "Large boarhound.",
    letters: "FANGDOGGY".split("")
  },
  {
    question: "What type of creature is Norbert?",
    answer: "DRAGONPET",
    hint: "Norwegian Ridgeback.",
    letters: "DRAGONPET".split("")
  },
  {
    question: "What candy comes with collectible cards?",
    answer: "CHOCOFROG",
    hint: "Harry gets Dumbledore’s card.",
    letters: "CHOCOFROG".split("")
  },
  {
    question: "What is the name of the Weasley matriarch?",
    answer: "MOLLYWEAS",
    hint: "Ron’s mum.",
    letters: "MOLLYWEAS".split("")
  },
  {
    question: "What is the name of Ron’s father?",
    answer: "ARTHURWEA",
    hint: "Works at Ministry of Magic.",
    letters: "ARTHURWEA".split("")
  },
  {
    question: "What candy lets you taste every flavor?",
    answer: "BERTIEBOT",
    hint: "Every Flavor Beans.",
    letters: "BERTIEBOT".split("")
  },
  {
    question: "Who runs the Hogwarts library?",
    answer: "MADAMPIRE",
    hint: "Strict librarian.",
    letters: "MADAMPIRE".split("")
  },
  {
    question: "What dark wizard is after the Stone?",
    answer: "VOLDEMORT",
    hint: "He Who Must Not Be Named.",
    letters: "VOLDEMORT".split("")
  },
  {
    question: "What chess piece does Ron ride in the final challenge?",
    answer: "KNIGHTCHS",
    hint: "He sacrifices himself.",
    letters: "KNIGHTCHS".split("")
  },
  {
    question: "What is the name of the caretaker of Hogwarts?",
    answer: "ARGUSFILC",
    hint: "Accompanied by Mrs. Norris.",
    letters: "ARGUSFILC".split("")
  },
  {
    question: "What is the name of Filch’s cat?",
    answer: "MRSNORRIS",
    hint: "Spies on students.",
    letters: "MRSNORRIS".split("")
  },
  {
    question: "Who teaches flying lessons?",
    answer: "HOOCHMADM",
    hint: "Madam ___.",
    letters: "HOOCHMADM".split("")
  },
  {
    question: "What sweet treat comes in frog form?",
    answer: "CHOCFROGS",
    hint: "Magical collectible sweet.",
    letters: "CHOCFROGS".split("")
  }
];





// Game state
let currentLevel = 0;
let lives = 15;
let score = 0;
let timer = 60;
let timerInterval;
let currentAnswer = "";
let usedLetters = [];
let hintsUsed = 0;

// --- Sound Function ---
function playClickSound() {
    const clickSound = document.getElementById('clickSound');
    if (clickSound) {
        clickSound.currentTime = 0; // Rewind to the start
        clickSound.play();
    }
}

// Initialize game
function initGame() {
    loadLevel();
    startTimer();
}

function loadLevel() {
    if (currentLevel >= questions.length) {
        showGameComplete();
        return;
    }

    const question = questions[currentLevel];
    currentAnswer = "";
    usedLetters = [];
    
    document.getElementById('question').textContent = question.question;
    document.getElementById('levelDisplay').textContent = currentLevel + 1;
    
    // Reset hint box
    const hintBox = document.getElementById('hintBox');
    hintBox.textContent = '💡 Tap the hint button for a clue';
    hintBox.classList.remove('show');
    
    setupWordDisplay(question.answer);
    setupLetters(question.letters);
    resetTimer();
}

function setupWordDisplay(answer) {
    const wordDisplay = document.getElementById('wordDisplay');
    wordDisplay.innerHTML = '';
    
    for (let i = 0; i < answer.length; i++) {
        const letterDiv = document.createElement('div');
        letterDiv.className = 'word-letter';
        letterDiv.dataset.letter = answer[i];
        letterDiv.dataset.position = i;
        
        // Show some letters initially (first letter and random letters)
        if (i === 0 || Math.random() < 0.3) {
            letterDiv.textContent = answer[i];
            letterDiv.classList.add('filled');
            letterDiv.style.opacity = '0.6';
            letterDiv.style.background = 'linear-gradient(135deg, #74b9ff, #0984e3)';
        } else {
            letterDiv.textContent = '';
        }
        
        wordDisplay.appendChild(letterDiv);
    }
}

function setupLetters(letters) {
    const container = document.getElementById('lettersContainer');
    container.innerHTML = '';
    
    // Shuffle letters
    const shuffled = [...letters].sort(() => Math.random() - 0.5);
    
    shuffled.forEach(letter => {
        const btn = document.createElement('button');
        btn.className = 'letter-btn';
        btn.textContent = letter;
        btn.onclick = () => selectLetter(btn, letter);
        container.appendChild(btn);
    });
}

function selectLetter(btn, letter) {
    playClickSound();
    if (btn.classList.contains('used')) return;
    
    btn.classList.add('used');
    currentAnswer += letter;
    
    // Check if letter exists in answer
    const targetAnswer = questions[currentLevel].answer;
    const wordLetters = document.querySelectorAll('.word-letter');
    let letterFound = false;
    
    wordLetters.forEach((wordLetter, index) => {
        if (wordLetter.dataset.letter === letter && !wordLetter.classList.contains('filled')) {
            if (targetAnswer[index] === letter) {
                wordLetter.textContent = letter;
                wordLetter.classList.add('filled');
                wordLetter.style.opacity = '1';
                wordLetter.style.background = 'linear-gradient(135deg, #51cf66, #40c057)';
                letterFound = true;
                score += 10;
                updateScore();
            }
        }
    });
    
    if (!letterFound) {
        btn.classList.add('wrong');
        lives--;
        updateLives();
        
        if (lives <= 0) {
            showGameOver();
            return;
        }
    }
    
    // Check if word is complete (excluding pre-filled letters)
    const emptyLetters = document.querySelectorAll('.word-letter:not([style*="opacity: 0.6"])');
    const filledLetters = Array.from(emptyLetters).filter(letter => letter.classList.contains('filled'));
    
    if (filledLetters.length === emptyLetters.length) {
        setTimeout(() => {
            score += timer * 2; // Bonus for remaining time
            updateScore();
            showLevelComplete();
        }, 500);
    }
}

function showHint() {
    playClickSound();
    const hintBox = document.getElementById('hintBox');
    hintBox.textContent = `💡 ${questions[currentLevel].hint}`;
    hintBox.classList.add('show');
    hintsUsed++;
    score = Math.max(0, score - 20); // Penalty for using hint
    updateScore();
}

function skipQuestion() {
    playClickSound();
    document.getElementById('skipConfirm').classList.add('show');
}

function confirmSkip() {
    playClickSound();
    lives--;
    updateLives();
    
    if (lives <= 0) {
        showGameOver();
    } else {
        currentLevel++;
        loadLevel();
    }
    closeSkipConfirm();
}

function closeSkipConfirm() {
    playClickSound();
    document.getElementById('skipConfirm').classList.remove('show');
}

function startTimer() {
    timerInterval = setInterval(() => {
        timer--;
        updateTimer();
        
        if (timer <= 0) {
            lives--;
            updateLives();
            
            if (lives <= 0) {
                showGameOver();
            } else {
                currentLevel++;
                loadLevel();
            }
        }
    }, 1000);
}

function resetTimer() {
    timer = 60;
    updateTimer();
}

function updateTimer() {
    const timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.textContent = timer;
    
    if (timer <= 10) {
        timerDisplay.parentElement.style.animation = 'pulse 1s infinite';
    } else {
        timerDisplay.parentElement.style.animation = 'none';
    }
}

// Add pulse animation
const pulseKeyframes = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;

const style = document.createElement('style');
style.textContent = pulseKeyframes;
document.head.appendChild(style);

function updateLives() {
    document.getElementById('livesDisplay').textContent = lives;
}

function updateScore() {
    document.getElementById('scoreDisplay').textContent = score;
}

function showGameOver() {
    clearInterval(timerInterval);
    document.getElementById('finalScore').textContent = score;
    document.getElementById('gameOver').classList.add('show');
}

function showLevelComplete() {
    clearInterval(timerInterval);
    document.getElementById('levelComplete').classList.add('show');
}

function showGameComplete() {
    clearInterval(timerInterval);
    document.getElementById('gameCompleteScore').textContent = score;
    document.getElementById('gameComplete').classList.add('show');
}

function nextLevel() {
    playClickSound();
    document.getElementById('levelComplete').classList.remove('show');
    currentLevel++;
    loadLevel();
    startTimer();
}

function restartGame() {
    playClickSound();
    currentLevel = 0;
    lives = 15;
    score = 0;
    hintsUsed = 0;
    
    document.getElementById('gameOver').classList.remove('show');
    document.getElementById('gameComplete').classList.remove('show');
    
    updateLives();
    updateScore();
    
    clearInterval(timerInterval);
    initGame();
}

// Start the game
initGame();

function pauseGame() {
    playClickSound();
    clearInterval(timerInterval);
    document.getElementById('pauseModal').classList.add('show');
}

function resumeGame() {
    playClickSound();
    document.getElementById('pauseModal').classList.remove('show');
    startTimer();
}
