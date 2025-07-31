function nashta() {
  let b2 = parseInt(document.getElementById('inputField').value);
  let a = parseInt(document.getElementById('inputField2').value);
  let output = [];
  const maxComb = Math.pow(2, b2);

  if (a > maxComb) {
    document.getElementById('output').textContent =
      "Error: The number of the combination cannot be greater than 2 to the power of the number of aksharas.";
    return;
  }

  for (let i = 0; i < b2; i++) {
    let b = a % 2;
    let b1;
    if (b === 0) {
      b1 = a / 2;
      output.push('I  ');
    } else {
      b1 = (a + 1) / 2;
      output.push('S  ');
    }
    a = b1;
  }
  document.getElementById('output').textContent = output.join('');
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('inputField').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      nashta();
    }
  });
  document.getElementById('inputField2').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      nashta();
    }
  });
});