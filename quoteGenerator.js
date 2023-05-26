// Assuming the JSON file is in the same directory as your JavaScript code
const quotesFile = 'quotes.json';

// Function to fetch the JSON file
function fetchQuotes() {
  return fetch(quotesFile)
    .then(response => response.json())
    .catch(error => {
      console.log('An error occurred while fetching quotes:', error);
    });
}

// Function to select a random quote from the JSON data
function getRandomQuote(quotes) {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Display a random quote
fetchQuotes()
  .then(quotes => {
    const randomQuote = getRandomQuote(quotes);
    console.log('Random Quote:');
    console.log('-------------');
    console.log('Quote:', randomQuote.quote);
    if (randomQuote.author) {
      console.log('Author:', randomQuote.author);
    }
  });
