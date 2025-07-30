// Delay function using a Promise
function delay(ms, text) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(text), ms);
  });
}

// Async function to handle the click and delay logic
async function handleSubmit() {
  const textInput = document.getElementById('text').value.trim();
  const delayInput = parseInt(document.getElementById('delay').value);
  const outputDiv = document.getElementById('output');

  // Clear output initially
  outputDiv.textContent = '';

  // Validate input
  if (textInput === '' || isNaN(delayInput)) {
    outputDiv.textContent = 'Please enter both text and valid delay.';
    return;
  }

  // Wait for the delay and then show the text
  const result = await delay(delayInput, textInput);
  outputDiv.textContent = result;
}

// Add event listener to the button
document.getElementById('btn').addEventListener('click', handleSubmit);

// Optional: Clear form and output on load
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('text').value = '';
  document.getElementById('delay').value = '';
  document.getElementById('output').textContent = '';
});
