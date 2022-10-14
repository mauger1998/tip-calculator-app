const percentButtons = document.querySelectorAll(".buttonJava");
const billPrice = document.getElementById("billPrice");
const totalOutput = document.getElementById("total");
const numberOfPeople = document.getElementById("numberOfPeople");
const tipOutput = document.getElementById("tipOutput");
const resetButton = document.getElementById("reset");
const leftBottomContainer = document.querySelector(".leftBottomContainer");



resetButton.addEventListener("click", (e) => {
    tipOutput.textContent = "";
    totalOutput.textContent = "";
});







percentButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        
        if(numberOfPeople.value <= 0) {
            numberOfPeople.classList.add("borderAdd");
            let message = document.createElement("p");
            leftBottomContainer.appendChild(message);
            message.textContent = "Amount must be greater than zero!"
            message.classList.add("stop");
            

        } else {
            numberOfPeople.classList.remove("borderAdd");
            leftBottomContainer.lastElementChild.textContent = ""
            let amountToAdd = e.target.textContent.slice(0, -1);
            tipOutput.textContent = displayTipAmount(billPrice, amountToAdd, numberOfPeople)
            totalOutput.textContent = displayTotal(numberOfPeople, billPrice, amountToAdd);
        }
        
    })
})

function displayTotal(numberOfPeople, billPrice, amountToAdd) {
    let result = billPrice.value * parseFloat(`1.${amountToAdd}`) / numberOfPeople.value;
    let newResult = result.toFixed(2);

      
    
    return newResult;
}

function displayTipAmount(billPrice, amountToAdd, numberOfPeople) {
    let result = billPrice.value * parseFloat(`0.${amountToAdd}`) / numberOfPeople.value;
    let newResult = result.toFixed(2);
    return newResult;
}
    
    



