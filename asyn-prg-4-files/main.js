// Create a new worker, giving it the code in "generate.js"
// using worker() constructor -> pass it a URL pointing to worker script
// as soon as worker is created, the worker script is executed
const worker = new Worker('./generate.js');

// When the user clicks "Generate primes", send a message to the worker.
// The message command is "generate", and the message also contains "quota",
// which is the number of primes to generate.
// add click event handler to "generate primes" button 
// -> send message to worker with worker.postMessage()
// message takes argument
// (JSON object- command (string identifying task for worker), quota (# primes to generate))
document.querySelector('#generate').addEventListener('click', () => {
  const quota = document.querySelector('#quota').value;
  worker.postMessage({
    command: 'generate',
    quota,
  });
});

// When the worker sends a message back to the main thread,
// update the output box with a message for the user, including the number of
// primes that were generated, taken from the message data.
// add message event handler to worker
// -> worker can tell us when it's finished, pass resulting data
// handler takes data from data property of msg, and writes it to output element
worker.addEventListener('message', (message) => {
  document.querySelector('#output').textContent = `Finished generating ${message.data} primes!`;
});

// implement click event handler for "Reload" button
document.querySelector('#reload').addEventListener('click', () => {
  document.querySelector('#user-input').value = 'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});
