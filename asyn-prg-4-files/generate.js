// Listen for messages from the main thread.
// runs as soon as the main script creates worker


// If the message command is "generate", call `generatePrimes()`
// worker starts listening for msgs from main script with addEventListener() (global function in worker)
// Inside message event handler, the data property of the event contains a copy of the argument passed from main script.
// If the main script passed the generate command, call generatePrimes(), passing in quota value from message event
addEventListener("message", (message) => {
    if (message.data.command === 'generate') {
      generatePrimes(message.data.quota);
    }
  });
  
  // Generate primes (very inefficiently)
  // Instead of returning a value, send a msg to the main script when done
  function generatePrimes(quota) {
  
    function isPrime(n) {
      for (let c = 2; c <= Math.sqrt(n); ++c) {
        if (n % c === 0) {
            return false;
         }
      }
      return true;
    }
  
    const primes = [];
    const maximum = 1000000;
  
    while (primes.length < quota) {
      const candidate = Math.floor(Math.random() * (maximum + 1));
      if (isPrime(candidate)) {
        primes.push(candidate);
      }
    }
  
    // When we have finished, send a message to the main thread,
    // including the number of primes we generated.
    // global function in a worker
    // main script is listening for this msg and will update DOM when msg is received

    // to run this program, need to run local web server, since file:// URLs can't load workers
    postMessage(primes.length);
  }
  