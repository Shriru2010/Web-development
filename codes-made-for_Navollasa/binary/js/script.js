function convertToBinary() {
    var num = document.getElementById('decimalInput').value;
    if(num === "" || isNaN(num)) {
        document.getElementById('result').innerText = "Please enter a valid number.";
        return;
    }
    var binary = parseInt(num, 10).toString(2);
    document.getElementById('result').innerText = "Binary: " + binary;
}
