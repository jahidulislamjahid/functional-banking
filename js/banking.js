document.getElementById('deposit-button').addEventListener('click', function () {
    // getting deposited amount 
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    console.log(depositAmount);

    const currentDeposit = document.getElementById('deposit-total');
    const previousTotalAmount = currentDeposit.innerText;

    const updatedDeposit = parseFloat(previousTotalAmount) + parseFloat(depositAmount);
    currentDeposit.innerText = updatedDeposit;

    // updating total deposited amount 
    const totalBalance = document.getElementById('balance-total');
    const balanceTotal = totalBalance.innerText;
    const newTotalBalance = parseFloat(balanceTotal) + parseFloat(depositAmount);
    totalBalance.innerText = newTotalBalance;

    depositInput.value = '';
});

// withdraw event hendler 
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;

    // withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;

    const totalWithdrawAmount = parseFloat(withdrawAmountText) + parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = totalWithdrawAmount;

    // clearing the input field 
    withdrawInput.value = '';

    // updating balance 
    const totalBalance = document.getElementById('balance-total');
    const previousBalanceTotal = totalBalance.innerText;
    const newBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(withdrawAmountText);
    totalBalance.innerText = newBalanceTotal;
});