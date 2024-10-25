const quotes = [
    "Life is what happens when you're busy making other plans.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The purpose of our lives is to be happy.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "Get busy living or get busy dying."
  ];
  
  function getQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
  }
  