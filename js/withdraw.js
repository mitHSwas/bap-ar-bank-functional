document.getElementById("btn-withdraw").addEventListener("click", function () {
    const inputAmount = getInputValueById("withdraw-field")
    const elementAmount = getElementValueById("withdraw-total")
    const totaldepositAmount = inputAmount + elementAmount;
    setElementValueById("withdraw-total", totaldepositAmount);

    const previousBalanceAmount = getElementValueById("balance-total");
    const newBalanceAmount = previousBalanceAmount - inputAmount;
    setElementValueById("balance-total", newBalanceAmount);
})