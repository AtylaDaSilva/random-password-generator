function generatePassword() {
    var password = "";
    charPool = [
        //Numbers
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        //Lower case letters
        ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        //Upper case letters
        ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    ];
    
    //Password Length
    const length = getPasswordLength();

    //Gets a character from charPool and concatenates it to password string
    for (var i = length; i > 0; i--) {
        var index1 = generateIndex(charPool.length);
        var index2 = generateIndex(charPool[index1].length);

        password += charPool[index1][index2];
    }
    
    //Result field. Password generated will be displayed here
    renderPassword(password);
};

function getPasswordLength() {
    return parseInt(document.querySelector("#length").value);
};

function renderPassword(password) {
    const resultField = document.querySelector("#result");
    resultField.value = password;
};

function generateIndex(range) {
    if (range < 1) {
        return 0;
    }

    return Math.floor(Math.random() * range);
};

//Event Listeners
const submit = document.querySelector("#submit");
submit.addEventListener("click", generatePassword);

const copyButton = document.querySelector("#copy-button");
copyButton.addEventListener("click", () => {
    const password = document.querySelector("#result").value;
    navigator.clipboard.writeText(password);
    console.log(password);
});