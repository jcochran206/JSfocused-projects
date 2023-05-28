//Dom elements to target html 
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const twitterBtn = document.getElementById('twitter');

//get quotes and set into array
let apiQuotes = []; 
//new quote request from user
function newQuote(){
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
    quoteText.textContent = randomQuote.text;

}


async function getQuotes() {
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
   // const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
   // window.open(twitterUrl, _blank);
   alert('due to resent changes in dev policy, I have not opted into using dev account to post');
}

//event handler / listener 
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', twitterQuote);


//callback
getQuotes();