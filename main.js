const quotes = [
  "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "Do not wait for leaders; do it alone, person to person. – Mother Teresa",
  "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
  "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
  "The best way to predict the future is to create it. – Peter Drucker",
  "Your time is limited, don't waste it living someone else's life. – Steve Jobs",
  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
  "Don't be afraid to give up the good to go for the great. – John D. Rockefeller",
];

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
  const randomIdx = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIdx];
  quoteElement.innerHTML = quote;
}
