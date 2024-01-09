function generateRandomPin() {
    return Math.floor(Math.random() * 9000) + 1000;
  }
  
  const expectedPin = generateRandomPin();
  