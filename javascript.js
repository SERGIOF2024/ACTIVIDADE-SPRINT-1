// Gera um PIN aleatório entre 1000 e 9999
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
// Compara o PIN inserido com o PIN esperado
if (userPin === expectedPin) {
    document.getElementById('result').textContent = 'Parabéns! PIN correto!';
  } else {
    // Gera uma dica com base na comparação dos PINs
    let hint = 'PIN incorreto. O próximo valor deve ser ' + (userPin < expectedPin ? 'maior' : 'menor');

        // Adiciona 'Muito' se a diferença for maior que 500
        if (Math.abs(userPin - expectedPin) > 500) {
            hint += ' Muito';
          }
      
          document.getElementById('result').textContent = hint;
          console.log('PIN esperado:', expectedPin);
        }
      }
      
