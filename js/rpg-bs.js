//Event Listeners
window.onload = loadPage;
//Password length input
const lengthInput = document.querySelector("#length");
lengthInput.addEventListener("input", handleLengthInput);
//Generate password button
const submit = document.querySelector("#submitButton");
submit.addEventListener("click", generatePassword);
//Copy to clipboard button
const copyButton = document.querySelector("#copyButton");
copyButton.addEventListener("click", copyToClipboard);

//Functions
function loadPage() {
    handleLengthInput();
}

function handleLengthInput() { 
    const badge = document.querySelector("#lengthBadge");
    badge.innerText = `${lengthInput.value}`;
}

// generatePassword() is invoked when generate password button is clicked
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

    //This is still here because, in a previous version, the password length was a number input. 
    //Decided to keep this here as a failsafe.
    if (length < 1) {
        renderPassword("Invalid length");
        return;
    }

    password = attachStart(password);

    //Generates a pair of indexes to obtain a character from charPool. The character is then concatenated in 
    //the password string
    for (var i = length; i > 0; i--) {
        var index1 = generateIndex(charPool.length);

        //checkContains() will return -1 if no options inside the "Contanis" field are checked...
        let noOptionsSelected = checkContains(index1);

        //and render the message inside renderPassword().
        if (noOptionsSelected === -1) {
            renderPassword("No Options Selected");
            return;
        }
        
        //checkContains() checks if the number generated in index1 is "compatible" with the options selected
        //in the "Contains" field. This is done to prevent characters that haven't been selected in the "Contains"
        //field from being generated
        
        while (!checkContains(index1)) {
            
            index1 = generateIndex(charPool.length);
            
        }

        var index2 = generateIndex(charPool[index1].length);

        password += charPool[index1][index2];
    }

    password = attachEnd(password);

    //Password generated will be displayed in the result input field
    renderPassword(password);
};

function getPasswordLength() {
    return parseInt(document.querySelector("#length").value);
};

//Displays password inside the "Result" input field
function renderPassword(password) {
    const resultField = document.querySelector("#result");
    resultField.value = password;
};

//Generates a pseudo-random integer from 0 to range -1. The generated number will be used as index for the
//charPool array
function generateIndex(range) {
    if (range < 1) {
        return 0;
    }

    return Math.floor(Math.random() * range);
};

//Checks if index is contains within the selected options inside the "Contains" checkbox field.
//Returns true if index is equal to one of the selected options from "Contains". Otherwise, checkContains() returns
//false
function checkContains(index) {
    //NOTE: NAME THIS CONSTANT SOMETHING MORE GENERIC
    //Checkbox list references
    const checkboxList = document.querySelectorAll(".form-check-input");

    //Contains checked items from the checkbox list
    var checkedChars = new Array(checkboxList.length);

    for (var i = 0; i < checkboxList.length; i++) {
        if (!checkboxList[i].checked) {
            continue;
        }
        checkedChars[i] = checkboxList[i].dataset.index;
    }

    //Verifies every element inside the checkedChars array. If all alements are undefined, noCheckedChars will
    //be true.
    let noCheckedChars = checkedChars.every((element) => {
        element === undefined;
    })

    //If noCheckedChars is true, the user has not selected any options in the "Contains" field.
    if (noCheckedChars) {
        return -1;
    }

    for (var i = 0; i < checkedChars.length; i++) {
        if (checkedChars[i] == index) {
            return true;
        }
    }

    return false;

};

//Attaches the value from the "Starts with" field to the start of the password string
function attachStart(password) {
    const startText = document.querySelector("#startsWith").value;

    return startText + password;
};

//Attaches the value from the "Ends with" field to the end of the password string
function attachEnd(password) {
    const endText = document.querySelector("#endsWith").value;

    return password + endText;
};

//Copies the value from the "Result" field to the clipboard
function copyToClipboard() {
    const passwordField = document.querySelector("#result");
    const password = passwordField.value;

    passwordField.select();

    navigator.clipboard.writeText(password);

    copyButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="42" fill="currentColor" class="bi bi-clipboard-check"
        viewBox="0 0 16 16">
        <path fill-rule="evenodd"
            d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
        <path
            d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
        <path
            d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
        </svg>
    `;

    let timer = setTimeout(revertCopyButtonIcon, 3000);
};

function revertCopyButtonIcon() {
    copyButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="42" fill="currentColor" class="bi bi-clipboard"
        viewBox="0 0 16 16">
        <path
            d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
        <path
            d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
        </svg>
    `;
}