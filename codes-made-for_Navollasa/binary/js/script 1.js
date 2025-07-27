function convertToDecimal() {
    var binary = document.getElementById('binaryInput').value.trim();
    if (!/^[01]+$/.test(binary)) {
        document.getElementById('decimalResult').innerText = "Please enter a valid binary number.";
        return;
    }
    var decimal = parseInt(binary, 2);
    document.getElementById('decimalResult').innerText = "Decimal: " + decimal;
}