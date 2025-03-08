const counterValue = document.getElementById("counter");
const incBtn = document.getElementById("incrementBtn");
const decBtn = document.getElementById("decrementBtn");
const resBtn = document.getElementById("resetBtn");
console.log(":::: counterValue :::  :::", counterValue);
let count = 0;

function updateValueCounter() {
  counterValue.textContent = count;
}
// increment count
incBtn.addEventListener("click", incrementCount);
function incrementCount() {
  count++;
  updateValueCounter();
}
// decrement count
decBtn.addEventListener("click", decrementCount);
function decrementCount() {
  if (count == 0) {
    alert("Minimum Count 0");
  } else {
    count--;
    updateValueCounter();
  }
}
// reset count
resBtn.addEventListener("click", resetCount);
function resetCount() {
  count = 0;
  updateValueCounter();
}
// update Value function
updateValueCounter();
