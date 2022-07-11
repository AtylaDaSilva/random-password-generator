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

    if (length < 1) {
        renderPassword("Invalid length");
        return;
    }

    //Verifies if the "Starts with" button has been pressed...
    const startsWith = document.querySelector("input#start").checked;

    //if so, startWith is attached to the password string
    if (startsWith) {
        password = attachStart(password);
    }

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

    //Checks if the "Ends with" checkbox has been checked...
    const endsWith = document.querySelector("input#end").checked;

    //if so, attaches the value from the "Ends with" to the password string
    if (endsWith) {
        password = attachEnd(password);
    }
    
    //Password generated will be displayed in the result input field
    renderPassword(password);
};

//Gets the value from the "Length" input field
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

//Attaches the value from the "Starts with" field to the start of the password string
function attachStart(password) {
    const startText = document.querySelector("#start-text").value;

    return startText + password;
};

//Attaches the value from the "Ends with" field to the end of the password string
function attachEnd(password) {
    const endText = document.querySelector("#end-text").value;

    return password + endText;
};

//Checks if index is contains within the selected options inside the "Contains" checkbox field.
//Returns true if index is equal to one of the selected options from "Contains". Otherwise, checkContains() returns
//false
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

//Copies the value from the "Result" field to the clipboard
function copyToClipboard() {
    const passwordField = document.querySelector("#result");
    const password = passwordField.value;

    passwordField.select();

    navigator.clipboard.writeText(password);
    
    alterCopyButtonTitle("Copied!");
};

//Alters the title HTML attribute from the copy to clipboard button
function alterCopyButtonTitle(newTitle) {
    const button = document.querySelector("#copy-button");
    button.title = newTitle;
};

//Event Listeners
//Copy to clipboard button
const copyButton = document.querySelector("#copy-button");
const defaultTitle = copyButton.title;
copyButton.addEventListener("click", copyToClipboard);

//Generate password button
const submit = document.querySelector("#submit");
submit.addEventListener("click", generatePassword);
submit.addEventListener("click", () => {
    alterCopyButtonTitle(defaultTitle);
});

//Result field
const result = document.querySelector("#result");
result.addEventListener("input", () => {
    alterCopyButtonTitle(defaultTitle);
});