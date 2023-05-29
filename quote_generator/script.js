//Dom elements to target html 
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const twitterBtn = document.getElementById('twitter');
const loader = document.getElementById('loader');

//get quotes and set into array
let apiQuotes = []; 

//show loading 
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//hide loading 
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}

//new quote request from user
function newQuote(){
    loading();
    //randomize quotes
    let randomQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]; 
    //check if author is blank
    if(!randomQuote.author){
        quoteAuthor.textContent = 'Unknown'
    }else {
        quoteAuthor.textContent = randomQuote.author;
    }

    //check if its a long quote
    if (randomQuote.text.length > 100){
        quoteText.classList.add('long-quote');
    }else {
        quoteText.classList.remove('long-quote');
    }
    //set quote and hide loader
    quoteText.textContent = randomQuote.text;
    complete();

}


async function getQuotes() {
    loading();
    const apiURL = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
    }catch(error){
        console.log(error, 'error')
    }
}

function twitterQuote(){
   alert('due to resent changes in dev policy, I have not opted into using dev account to post');
}

//event handler / listener 
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', twitterQuote);


//callback
getQuotes();
