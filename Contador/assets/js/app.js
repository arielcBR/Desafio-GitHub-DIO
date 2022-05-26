const btn_inc = document.querySelector("#incrementa");
const btn_dec = document.querySelector("#decrementa");
var quantidade = document.querySelector(".quantidade");

quantidade.innerHTML = 0;
var qnt = quantidade.textContent;


btn_dec.addEventListener("click", decrementa);
btn_inc.addEventListener("click", incrementa);

function decrementa() {
    if (qnt > 0) {
        qnt--;
    }
    quantidade.innerHTML = qnt;
    console.log("decrementando, valor = " + qnt);
}

function incrementa() {
    if (qnt <= 100) {
        qnt++;
    }
    quantidade.innerHTML = qnt;
    console.log("Incrementando, valor = " + qnt);
}