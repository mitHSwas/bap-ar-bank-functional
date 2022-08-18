function getInputValueById(inputId) {
    const inputValueString = document.getElementById(inputId);
    const inputValueAmount = parseFloat(inputValueString.value);
    return inputValueAmount;
}

function getElementValueById(elementId) {
    const previousElementString = document.getElementById(elementId);
    const previousDepositAmount = parseFloat(previousElementString.innerText);
    return previousDepositAmount;
}

function setElementValueById(elementId) {
    const
}