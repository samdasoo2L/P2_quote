const quote = document.querySelector(".quote-saying");
const author = document.querySelector(".quote-author");
const restartButton = document.querySelector(".restart");

function changeQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerText = randomQuote.quote;
  author.innerText = randomQuote.author;
}

changeQuote();
restartButton.addEventListener("click", changeQuote);
