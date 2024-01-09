function generateRandomPin() {
    return Math.floor(Math.random() * 9000) + 1000;
  }
  
  const expectedPin = generateRandomPin();
  function checkPin() {
    // Obtém o PIN inserido pelo usuário
    const userPin = parseInt(document.getElementById('pinInput').value);
  
  