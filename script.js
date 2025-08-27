const words = [
  "AI (UNHLAB)",
  "WFP",
  "UNODC",
  "CHAMBER OF DEPUTIES",
  "UNWOMEN",
];

const span = document.querySelector(".typing-text span");
let index = 0;

function showNextWord() {
  span.textContent = words[index];
  span.style.color = "#e4b97d"; 
  index = (index + 1) % words.length;
}

showNextWord();
setInterval(showNextWord, 800);
