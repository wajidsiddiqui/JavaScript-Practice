var passwordEl = document.getElementById('password');
var lengthInput = document.getElementById('length');
var numbersBox = document.getElementById('numbers');
var symbolsBox = document.getElementById('symbols');
var generateBtn = document.getElementById('generate-btn');

var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var symbols = '!@#$%^&*';

generateBtn.addEventListener('click', function () {

    var length = lengthInput.value;
    var chars = letters;

    if (numbersBox.checked) {
        chars += numbers;
    }

    if (symbolsBox.checked) {
        chars += symbols;
    }

    var password = '';

    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    passwordEl.textContent = password;

});