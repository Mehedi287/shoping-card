function getInputValue(inputValue, priceId, price, add) {
    const inputFiled = document.getElementById(inputValue);
    let inputNumber = inputFiled.value;
    if (add == true) {
        inputNumber = parseInt(inputNumber) + 1;
    }
    else if (inputNumber > 0) {
        inputNumber = parseInt(inputNumber) - 1;
    }
    inputFiled.value = inputNumber;
    const iphnPrice = document.getElementById(priceId);
    iphnPrice.innerText = inputNumber * price;

}
// for iphon 
document.getElementById('palus-iph-btn').addEventListener('click', function () {
    const inputFildIphn = getInputValue('input-value', 'iph-price', '1219', true);
})
document.getElementById('iphon-minus-btn').addEventListener('click', function () {
    const inputFildIphn = getInputValue('input-value', 'iph-price', '1219', false);
})
// for case 
document.getElementById('case-plus-btn').addEventListener('click', function () {
    const caseInput = getInputValue('case-input-value', 'case-price', '59', true);
})
document.getElementById('case-minus-btn').addEventListener('click', function () {
    const caseInput = getInputValue('case-input-value', 'case-price', '59', false);
})