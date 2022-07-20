//Event Listeners
window.onload = loadPage;
const lengthInput = document.querySelector("#length");
lengthInput.addEventListener("input", handleLengthInput);

//Functions
function loadPage() {
    handleLengthInput();
}

function handleLengthInput() { 
    const label = document.querySelector("#lengthLabel");
    label.innerHTML = `Password Length - ${lengthInput.value}`;
}