const percentButtons = document.querySelectorAll(".buttonJava");
const billPrice = document.getElementById("billPrice");
const totalOutput = document.getElementById("total");
const numberOfPeople = document.getElementById("numberOfPeople");
const tipOutput = document.getElementById("tipOutput");







percentButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        let amountToAdd = e.target.textContent.slice(0, -1);
        tipOutput.textContent = displayTipAmount(billPrice, amountToAdd, numberOfPeople)
        totalOutput.textContent = displayTotal(numberOfPeople, billPrice, amountToAdd);
    })
})

function displayTotal(numberOfPeople, billPrice, amountToAdd) {
    let result = billPrice.value * parseFloat(`1.${amountToAdd}`) / numberOfPeople.value;

      
    
    return result;
}

function displayTipAmount(billPrice, amountToAdd, numberOfPeople) {
    let result = billPrice.value * parseFloat(`0.${amountToAdd}`) / numberOfPeople.value;
    let newResult = result.toFixed(2);
    return newResult;
}
    
    



