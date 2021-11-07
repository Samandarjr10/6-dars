//Currency
var USD = 10700;
var EUR = 12000;
var RUB = 145.5;

RUB = Math.round(RUB);

var elCurrencies = document.getElementById("header__currency");
var elHeaderButton = document.getElementById("button");

elHeaderButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    var elInput = document.getElementById("input").value;
    if (elCurrencies.value === "1") {
        alert(elInput * USD + " so'm");
        console.log(elInput * USD + " so'm");
    }
    if (elCurrencies.value === "2") {
        alert(elInput * EUR + "so'm");
        console.log(elInput * EUR + " so'm");
    }
    if (elCurrencies.value === "3") {
        alert(elInput * RUB + " so'm");
        console.log(elInput * RUB + " so'm");
    }
})