document.getElementById("btn-deposit").addEventListener("click", function () {
    const inputAmount = getInputValueById("deposit-field")
    const elementAmount = getElementValueById("deposit-total")
    const totaldepositAmount = inputAmount + elementAmount;
    setElementValueById("deposit-total", totaldepositAmount);

    const previousBalanceAmount = getElementValueById("balance-total");
    const newBalanceAmount = inputAmount + previousBalanceAmount;
    setElementValueById("balance-total", newBalanceAmount);
})