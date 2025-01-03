const words = [
    "abandon", "beacon", "candy", "dove", "eagle", "flame", "grape", "happy", "ice", "jungle",
    "kingdom", "lunar", "mango", "noble", "ocean", "petal", "quest", "river", "shadow", "train",
    "umbrella", "vivid", "whale", "basket", "yellow", "zebra", "angel", "brave", "crane", "dusk",
    "enigma", "frost", "glow", "honey", "index", "juice", "knight", "lunar", "magic", "night",
    "oasis", "pearl", "quill", "rose", "scent", "tiger", "unity", "vortex", "wind", "xray",
    "yogurt", "zoned", "atlas", "bliss", "cider", "dawn", "epoch", "flame", "gauge", "heaven",
    "irony", "jolly", "koala", "lamb", "mint", "neon", "opal", "plum", "quartz", "ruby",
    "sunset", "tango", "urban", "vogue", "wave", "xerox", "yearn", "zephyr", "aqua", "bold",
    "crisp", "dove", "edge", "forge", "grace", "hush", "ink", "jade", "kite", "leaf",
    "mist", "navy", "oak", "pale", "quilted", "rare", "stone", "tone", "urban", "vibes",
    "wisp", "yacht", "zeal", "arc", "blaze", "core", "dust", "echo", "flint", "gaze",
    "halo", "iron", "june", "kale", "lime", "moss", "nest", "ore", "peach", "quail",
    "ridge", "snow", "tide", "use", "vow", "window", "xmas", "yoga", "zoo", "amber",
    "breeze", "clover", "drift", "enjoy", "flame", "grin", "hatch", "icicle", "jazz", "knack",
    "latch", "mocha", "nail", "open", "pale", "quiz", "rust", "sail", "tide", "ugly",
    "vowed", "wool", "xenon", "yawned", "zone", "awe", "belt", "charm", "dome", "elixir",
    "fawn", "gala", "hop", "inc", "june", "knot", "lump", "moon", "noon", "opal",
    "pier", "quiver", "ride", "stare", "twin", "unit", "vase", "wax", "yolk", "zoom",
    "arrow", "brick", "cloud", "dune", "eagle", "frost", "grip", "haze", "ignite", "jacket",
    "lure", "mesh", "nest", "ogre", "puff", "quilt", "rave", "swoop", "track", "urge",
    "view", "windy", "yell", "zen", "bolt", "clip", "deep", "echo", "flare", "gaze",
    "heron", "iris", "jolt", "key", "lily", "mint", "nook", "olive", "plow", "quill",
    "rust", "sage", "tick", "uniform", "vibe", "whip", "yarn", "zoomed", "art", "blow",
    "core", "dove", "eagle", "foam", "gloom", "hand", "ice", "joke", "knee", "loaf",
    "melt", "note", "open", "pale", "quill", "roar", "slug", "tear", "urge", "blank",
    "wait", "yawn", "zinc"
];

const textContainer = document.getElementById('text-container');
const timerElement = document.getElementById('timer');
const tryAgainButton = document.getElementById('try-again');
const finalScoreElement = document.getElementById('final-score');

//variables 
//variables for text 
let totalTyped = '';
let currentCharIndex = 0; 
let errorsChar = 0;
let longText = generationLongText();
//timer variables 
let timeLeft = 60;
let timerIntervel;
let typingStarted = false;


//shuffleArray 
function shuffleArray(array) {
    for(let i = array.length - 1; i > 0; i--){
        const x = Math.floor(Math.random() * (i + 1));
        [array[i], array[x] = [array[x]], array[i]];
    }

    return array;
}

//combine shuffled words into one lone string with spaces
function generationLongText() {
    const shuffleWords = shuffleArray([...words]);
    return shuffleWords.join(' '); 
}

//start countdown timer 
function startTimer() {
    if(!typingStarted){
        typingStarted = true;
        timerIntervel = setInterval(()=> {
            timeLeft--;
            timerElement.textContent = `Time left: ${timeLeft}s`;
            if(timeLeft <= 0) {
                clearInterval(timerIntervel);
                endTest();
            }
        }, 1000)
    }
}



//End the test 
function endTest() {
    timerElement.textContent = `Times up!`;
    finalScoreElement.textContent = `Final WPM: ${calculateWPM()}`;
    textContainer.style.display = 'none';
    tryAgainButton.style.display = 'block';
}

//calculate the words per minute with error adjustment
function calculateWPM() {
    const wordsTyped = totalTyped.trim().split(/\s+/).length; 
    const baseWPM = Math.round((wordsTyped / 60) * 60);
    const adjustedWPM = Math.max(baseWPM - errorsChar, 0); 
    return adjustedWPM;
    
}
//event handler to display and handle text 
document.addEventListener('keydown', (e) => {
    startTimer();

    if(e.key === 'Backspace') {
        if(totalTyped.length > 0){
            currentCharIndex = Math.max(currentCharIndex - 1, 0);
            totalTyped = totalTyped.slice(0, -1);
        }
    }else if(e.key.length === 1 && !e.ctrlKey && !e.metaKey){
        totalTyped += e.key;
        currentCharIndex++;
    }

    //console.log('e.key', e.key, 'totalTyped', totalTyped, 'currentindex', currentCharIndex);

    const textArray = longText.split('');
    textContainer.innerText = '';

    errorsChar = 0;

    for(let i = 0; i < textArray.length; i++) {
        const span = document.createElement('span');

        if(i < totalTyped.length) {
            if(totalTyped[i] === textArray[i]){
                span.classList.add('correct');
            }else{
                span.classList.add('error');
                errorsChar++;
            }
        }

        span.textContent = textArray[i];
        textContainer.appendChild(span);
    }

    if(totalTyped.length >= 20){
        const scrollAmount = (totalTyped.length - 20) * 14;
        textContainer.scrollLeft = scrollAmount;
    }
});

function resetTest() {
    clearInterval(timerIntervel);
    timeLeft = 60;
    timerElement.textContent = `Time left: ${timeLeft}`;
    finalScoreElement.textContent = '';
    textContainer.style.display = 'block';
    tryAgainButton.style.display = 'none';
    totalTyped = '';
    typingStarted = false;
    currentCharIndex = 0;
    errorsChar = 0;
    textContainer.scrollLeft = 0;
    longText = generationLongText();
    init();
}

//initialize function 
function init() {
    if(isMobileDevice) {
        showMobileMessage();
    }else {
        textContainer.textContent = longText;
        timerElement.textContent = `Time left: ${timeLeft}`;
    }
}

//try again listener 
tryAgainButton.addEventListener('click', resetTest);

//detect if mobile 
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < 800;
}

//show message to mobile user
function showMobileMessage() {
    textContainer.textContent = 'this typing test is designed for desktop';
}

//startup 
init();