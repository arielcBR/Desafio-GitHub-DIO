const btn = document.getElementById("btn");
const inputForm = document.getElementById("myInput");
var activities = [];

btn.addEventListener("click", getInputValue);

function getInputValue() {
    activities.push(inputForm.value);
    inputForm.value = '';
    inputForm.focus();
    console.log(activities);
}