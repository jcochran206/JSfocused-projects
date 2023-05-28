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
    let randomQuote = Math.floor(Math.random() * apiQuotes.length); 
    return console.log(apiQuotes[randomQuote]);
}


async function getQuotes() {
    //randomize quotes
    //call function to display
    const apiURL = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
    }catch(error){
        console.log(error, 'error')
    }
}
//callback
getQuotes();