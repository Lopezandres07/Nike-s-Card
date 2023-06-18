let price = 114990;
let amount = document.querySelector("#productAmount");
let colour = document.querySelector("#productColor");
let button = document.querySelector("#getTotal");

button.addEventListener("click", () => {
    document.querySelector("#total").innerHTML = (amount.value * price).toLocaleString();
    document.querySelector("#amount").innerHTML = amount.value;
    document.querySelector("#colour").style.backgroundColor = colour.value;
})

let trash = document.querySelector("#trash");

trash.addEventListener("click", () => {
    document.querySelector("#total").innerHTML = "";
    document.querySelector("#amount").innerHTML = "";
    document.querySelector("#productAmount").value = "";
    document.querySelector("#productColor").value = "";
    document.querySelector("#colour").style.backgroundColor = "";

})
