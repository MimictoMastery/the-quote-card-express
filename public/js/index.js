"use strict";

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};

const quotes = [
    {
        quote: "I don’t know half of you half as well as I should like, and I like less than half of you half as well as you deserve.",
        author: "Bilbo Baggins, Lord of the Rings",
    },

    {
        quote: "When it comes to controlling human beings there is no better instrument than lies. Because, you see, humans live by beliefs. And beliefs can be manipulated. The power to manipulate beliefs is the only thing that counts.",
        author: "Michael Ende, The Neverending Story",
    },

    {
        quote: "If you have ever simultaneously felt like you were too much and not enough... stay a while, you belong here.",
        author: "Heather",
    }
];

function loopThroughQuotes() {
    let quoteIndex = 0;

    setInterval(() => {
        if (quoteIndex < quotes.length) {
            elements.quote.textContent = quotes[quoteIndex].quote;
            elements.author.textContent = quotes[quoteIndex].author;
            quoteIndex++;
        } else {
            quoteIndex = 0;
        }
    }, 3000);
}

loopThroughQuotes();