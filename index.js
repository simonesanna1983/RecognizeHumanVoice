// Check for browser support
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.lang = 'it-IT';

  recognition.onstart = () => {
    console.log('Voice recognition started. Speak now...');
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    console.log('Recognized speech:', transcript);

    const mySpan = document.getElementById('recogninzeText');
    mySpan.textContent = transcript;

    navigator.clipboard
      .writeText(transcript)
      .then(() => {
        console.log('Text copied to clipboard:', transcript);
      })
      .catch((err) => {
        console.error('Error copying text: ', err);
      });
    // Do something with the recognized text
  };

  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
  };

  // Start recognition when a button is clicked or as needed
  const startRecognition = () => {
    recognition.start();
  };

  // Stop recognition when needed
  const stopRecognition = () => {
    recognition.stop();
  };

  // Example usage:
  // Start recognition when a button is clicked
  document
    .getElementById('startButton')
    .addEventListener('click', startRecognition);

  // Stop recognition when another button is clicked
  document
    .getElementById('stopButton')
    .addEventListener('click', stopRecognition);
} else {
  console.log('Speech recognition not supported in this browser');
}
