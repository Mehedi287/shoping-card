function productPrice(inputValue, priceId, price, add) {
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
    CalulateSubToal()
}
function InputProdcutNumber(inputIdName) {
    const inpuTvalue = document.getElementById(inputIdName);
    return inpuTvalue.value;

}
function CalulateSubToal() {
    const phnTotal = InputProdcutNumber('iphn-input-value') * 1219;
    const caseTotal = InputProdcutNumber('case-input-value') * 59;
    // calculate sub total 
    let getSubTotal = document.getElementById('sub-total');
    const subTotal = phnTotal + caseTotal;
    getSubTotal.innerText = parseInt(subTotal);
    // calculate tax amount 
    const getTaxAmount = document.getElementById('tax-amoun');
    const tax = subTotal * 0.07;
    getTaxAmount.innerText = tax;
    // calculate total amount 
    const totalAmount = document.getElementById('total-amount');
    totalAmount.innerText = tax + subTotal;
}
// for iphon 
document.getElementById('palus-iph-btn').addEventListener('click', function () {
    const inputFildIphn = productPrice('iphn-input-value', 'iph-price', '1219', true);


})
document.getElementById('iphon-minus-btn').addEventListener('click', function () {
    const inputFildIphn = productPrice('iphn-input-value', 'iph-price', '1219', false);
})
// for case 
document.getElementById('case-plus-btn').addEventListener('click', function () {
    const caseInput = productPrice('case-input-value', 'case-price', '59', true);
})
document.getElementById('case-minus-btn').addEventListener('click', function () {
    const caseInput = productPrice('case-input-value', 'case-price', '59', false);
})