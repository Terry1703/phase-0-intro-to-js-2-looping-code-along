function countDown(n) {
    // Check if n is a positive integer
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
      throw new Error('Input must be a positive integer');
    }
  
    // Start counting down from n to 0
    while (n >= 0) {
      console.log(n);
      n--;
    }
  }
  
  module.exports = countDown;
  
  function writeCards(names) {
    if (!Array.isArray(names)) {
      throw new Error('Names should be provided in an array');
    }
  
    return names.map(name => `Thank you, ${name}, for the wonderful surprise gift!`);
  }
  
  module.exports = writeCards;
  
  