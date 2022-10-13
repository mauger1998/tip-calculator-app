const percentButtons = document.querySelectorAll(".buttonJava");
const billPrice = document.getElementById("billPrice");
const totalOutput = document.getElementById("total");
const numberOfPeople = document.getElementById("numberOfPeople");

function displayTotal(numberOfPeople, billPrice) {
    let result = billPrice.value / numberOfPeople.value;
    return result;
}

percentButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        totalOutput.textContent = displayTotal(numberOfPeople, billPrice);
    })
})
    
    



