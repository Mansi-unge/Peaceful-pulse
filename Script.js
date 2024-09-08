// Array of texts to cycle through
const texts = [
  "Improving Focus and Concentration",
  "Managing Pain",
  "Improving Mental Health",
  "Promoting Emotional Well-being",
  " Encouraging Spiritual Growth"
];

// Get the element to change text
const textElement = document.getElementById('changing-text');

// Function to change text
let currentIndex = 0;
function changeText() {
  // Update text
  textElement.textContent = texts[currentIndex];
  
  // Update index and reset if necessary
  currentIndex = (currentIndex + 1) % texts.length;
  
  // Repeat the change after 3 seconds
  setTimeout(changeText, 2000);
}

// Start the cycle
setTimeout(changeText, 2000);
