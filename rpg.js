function generatePassword() {
    var password = "";
    
    charPool = [
        //Numbers - Index = 0
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        //Symbols - Index = 1
        ["!", "@", "#", "$", "%", "&", "?"],
        //Lower case letters - Index = 2
        ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        //Upper case letters - Index = 3
        ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    ];
    
    //Password Length
    const length = getPasswordLength();

    const startsWith = document.querySelector("input#start").checked;

    if (startsWith) {
        password = attachStart(password);
    }

    //Gets a character from charPool and concatenates it to password string
    for (var i = length; i > 0; i--) {
        var index1 = generateIndex(charPool.length);
        
        while (!checkContains(index1)) {
            index1 = generateIndex(charPool.length);
            console.log(index1);
        }

        var index2 = generateIndex(charPool[index1].length);

        password += charPool[index1][index2];
    }

    const endsWith = document.querySelector("input#end").checked;

    if (endsWith) {
        password = attachEnd(password);
    }
    
    //Password generated will be displayed in the result input field
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

function attachStart(password) {
    const startText = document.querySelector("#start-text").value;

    return startText + password;
};

function attachEnd(password) {
    const endText = document.querySelector("#end-text").value;

    return password + endText;
};

function checkContains(index) {
    //Checkbox list references
    const checkboxList = document.querySelectorAll("#checkbox-list > li > input");

    //Contains checked items from the checkbox list
    var checkedChars = new Array(checkboxList.length);

    for (var i = 0; i < checkboxList.length; i++) {
        if (!checkboxList[i].checked) {
            continue;
        }
        checkedChars[i] = checkboxList[i].dataset.index;
    }

    for (var i = 0; i < checkedChars.length; i++) {
        if (checkedChars[i] == index) {
            return true;
        }
    }

    return false;

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