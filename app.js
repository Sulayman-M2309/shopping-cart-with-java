function updateCaseNumber(product, price, isIncreasing){
    const productInput=document.getElementById(product+'-number');
    let productNUmber=productInput.value;
    if(isIncreasing){

        productNUmber=parseInt(productNUmber)+1;
    }
    else if(productNUmber>0){
     productNUmber=parseInt(productNUmber)-1;
    }
    productInput.value=productNUmber;
// update casetotal
const caseTotal=document.getElementById(product+'-total');
caseTotal.innerText=productNUmber*price;
  // calculate total
  calculateTotal();

}



// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click',function(){
    updateCaseNumber('case',59,true);
    // console.log('clicked');
    // const productInput=document.getElementById('case-number');
    // const productNUmber=productInput.value;
    // productInput.value=parseInt(productNUmber)+1;
    // console.log(productInput);
})
document.getElementById('case-minus').addEventListener('click',function(){
    updateCaseNumber('case',59,false);
    // console.log('clicked');
    // const productInput=document.getElementById('case-number');
    // const productNUmber=productInput.value;
    // productInput.value=parseInt(productNUmber)-1;
    // console.log(productInput);
})



// phone increase decrease events
document.getElementById('phone-plus').addEventListener('click',function(){
    updateCaseNumber('phone',1219,true);
    // console.log('clicked');
    // const phoneInput=document.getElementById('phone-number');
    // const phoneNumbe=phoneInput.value;
    // phoneInput.value=parseInt(phoneNumbe)+1;
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateCaseNumber('phone',1219,false);
    // console.log('clicked');
    // const phoneInput=document.getElementById('phone-number');
    // const phoneNumbe=phoneInput.value;
    // phoneInput.value=parseInt(phoneNumbe)-1;
})



function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}