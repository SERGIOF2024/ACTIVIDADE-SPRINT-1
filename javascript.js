function generateRandomPin() {
    return Math.floor(Math.random() * 9000) + 1000;
  }
  
  const expectedPin = generateRandomPin();
  function checkPin() {
    // Obtém o PIN inserido pelo usuário
    const userPin = parseInt(document.getElementById('pinInput').value);
  
  // Verifica se o PIN inserido é válido
  if (isNaN(userPin) || userPin < 1000 || userPin > 9999) {
    alert('Por favor, insira um PIN válido de no mínimo 4 dígitos.');
    return;
  }
