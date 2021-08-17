document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositValue = depositInput.value;
    const newDeposit = document.getElementById('deposit-total');
    const newDepositText = newDeposit.innerText;
    newDeposit.innerText = parseFloat(depositValue) + parseFloat(newDepositText);
    // updating total balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const newTotalBalance = parseFloat(balanceTotalText) + parseFloat(depositValue);
    balanceTotal.innerText = newTotalBalance;
    // clear input field 
    depositInput.value = '';
});

// handling withdraw 

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValue = withdrawInput.value;
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawText = withdrawTotal.innerText;
    withdrawTotal.innerText = parseFloat(withdrawValue) + parseFloat(withdrawText);

    // updating total balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const newTotalBalance = parseFloat(balanceTotalText) - parseFloat(withdrawValue);
    balanceTotal.innerText = newTotalBalance;

    // clearing the input field 
    withdrawInput.value = '';
})