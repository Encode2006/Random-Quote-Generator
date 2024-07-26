const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote:"Surviving is winning everything else is bullshit!, fairytales spun by people afraid to look life in the eye! whatever it takes kid, Survive",
        author:"CODEWRLD"
    },
    {
        quote:"It is never too late to be what you might have been",
        author:"George Eliot"
    },
    {
        quote:"To be yourself in a world that is constantly trying to make you something is the greatest accomplishment",
        author:"Ralph Waldo Emerson"
    }
];


function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('quote').textContent = randomQuote.quote;
    document.getElementById('author').textContent = "- " + randomQuote.author;
}


// generateQuote();


document.getElementById('new-quote-btn').addEventListener('click', generateQuote);


// setInterval(generateQuote, 1000);

// loops
