let formElement = document.querySelector(".js-form");
let radioSaleElement = document.querySelector(".js-form__radioSale");
let dolarSaleElement = document.querySelector(".js-form__fieldDolarSale");
let euroSaleElement = document.querySelector(".js-form__fieldEuroSale");
let funtSaleElement = document.querySelector(".js-form__fieldFuntSale");
let radioBuyElement = document.querySelector(".js-form__radioBuy");
let dolarBuyElement = document.querySelector(".js-form__fieldDolarBuy");
let euroBuyElement = document.querySelector(".js-form__fieldEuroBuy");
let funtBuyElement = document.querySelector(".js-form__fieldFuntBuy");
let selectElement = document.querySelector(".js-form__select");
let amount = document.querySelector(".js-form__fieldAmount");
let textAmount = document.querySelector(".js-form__textAmount");
let resultElement = document.querySelector(".js-form__result");
let resultSymbol = document.querySelector(".js-form__resultSymbol");
let underListSale = document.querySelector(".js-form__underListSale");
let underListBuy = document.querySelector(".js-form__underListBuy");
let button = document.querySelector(".js-form__refreshButton");
let removeButton = document.querySelector(".js-form__removeButton");


dolarSaleElement.value = (Math.random() * 0.2 + 4).toFixed(3);
euroSaleElement.value = ((Math.random() * 0.4) + 4.1).toFixed(3);
funtSaleElement.value = ((Math.random() * 0.3) + 5.1).toFixed(3);
dolarBuyElement.value = (dolarSaleElement.value - (dolarSaleElement.value * 1 / 200)).toFixed(3);
euroBuyElement.value = (euroSaleElement.value - (euroSaleElement.value * 1 / 200)).toFixed(3);
funtBuyElement.value = (funtSaleElement.value - (funtSaleElement.value * 1 / 200)).toFixed(3);

button.addEventListener("click", () => {
    dolarSaleElement.value = (Math.random() * 0.2 + 4).toFixed(3);
    euroSaleElement.value = ((Math.random() * 0.4) + 4.1).toFixed(3);
    funtSaleElement.value = ((Math.random() * 0.3) + 5.1).toFixed(3);
    dolarBuyElement.value = (dolarSaleElement.value - (dolarSaleElement.value * 1 / 200)).toFixed(3);
    euroBuyElement.value = (euroSaleElement.value - (euroSaleElement.value * 1 / 200)).toFixed(3);
    funtBuyElement.value = (funtSaleElement.value - (funtSaleElement.value * 1 / 200)).toFixed(3);
});

formElement.addEventListener("input", () => {
    underListSale.classList = (radioSaleElement.checked === true) ? "form__underList form__underList--darker" : "form__underList form__underList--brighter";
    underListBuy.classList = (radioBuyElement.checked === true) ? "form__underList form__underList--darker" : "form__underList form__underList--brighter";

    // if (selectElement.value === "Dolar" && radioSaleElement.checked === false && radioBuyElement.checked === true) {
    //     textAmount.innerText = " (wartość w dolarach)  ";
    // } else if (selectElement.value === "Euro" && radioSaleElement.checked === false && radioBuyElement.checked === true) {
    //     textAmount.innerText = " (wartość w euro)  ";
    // } else if (selectElement.value === "Funt" && radioSaleElement.checked === false && radioBuyElement.checked === true) {
    //     textAmount.innerText = "  (wartość w funtach)  ";
    // } else if (radioSaleElement.checked === false && radioBuyElement.checked === false) {
    //     textAmount.innerText = " ";
    // } else {
    //     textAmount.innerText = "  (wartość w złotych) ";
    // };
     //                            \\//
    //                              \/  
    if (radioBuyElement.checked === true) {
        switch (selectElement.value) {
            case "Dolar":
                textAmount.innerText = " (wartość w dolarach)  ";
                break;
            case "Euro":
                textAmount.innerText = " (wartość w euro)  ";
                break;
            case "Funt":
                textAmount.innerText = " (wartość w funtach)  ";
                break;
            default:
                textAmount.innerText = "  ";
                break;
        }
    } else {
        textAmount.innerText = "  (wartość w złotych) ";
    };
});

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let dolarSale = amount.value / dolarSaleElement.value;
    let euroSale = amount.value / euroSaleElement.value;
    let funtSale = amount.value / funtSaleElement.value;
    let dolarBuy = amount.value * dolarBuyElement.value;
    let euroBuy = amount.value * euroBuyElement.value;
    let funtBuy = amount.value * funtBuyElement.value;


    // if (selectElement.value === "Dolar" && radioSaleElement.checked === true && radioBuyElement.checked === false) {
    //     resultElement.innerText = (dolarSale.toFixed(2));
    //     resultSymbol.innerText = " [ $ ]";
    //     resultElement.classList = "form__result--colorBlack";
    // } else if (selectElement.value === "Euro" && radioSaleElement.checked === true && radioBuyElement.checked === false) {
    //     resultElement.innerText = (euroSale.toFixed(2));
    //     resultSymbol.innerText = " [ € ]";
    //     resultElement.classList = "form__result--colorBlack";
    // } else if (selectElement.value === "Funt" && radioSaleElement.checked === true && radioBuyElement.checked === false) {
    //     resultElement.innerText = (funtSale.toFixed(2));
    //     resultSymbol.innerText = " [ £ ]";
    //     resultElement.classList = "form__result--colorBlack";
    // } else if (selectElement.value === "Dolar" && radioSaleElement.checked === false && radioBuyElement.checked === true) {
    //     resultElement.innerText = (dolarBuy.toFixed(2));
    //     resultSymbol.innerText = " [ PLN ]";
    //     resultElement.classList = "form__result--colorBlack";
    // } else if (selectElement.value === "Euro" && radioSaleElement.checked === false && radioBuyElement.checked === true) {
    //     resultElement.innerText = (euroBuy.toFixed(2));
    //     resultSymbol.innerText = " [ PLN ]";
    //     resultElement.classList = "form__result--colorBlack";
    // } else if (selectElement.value === "Funt" && radioSaleElement.checked === false && radioBuyElement.checked === true) {
    //     resultElement.innerText = (funtBuy.toFixed(2));
    //     resultSymbol.innerText = " [ PLN ]";
    //     resultElement.classList = "form__result--colorBlack";
    // } else {
    //     resultElement.classList = "form__result--colorRed";
    //     resultElement.innerText = ("Wybierz Sprzedaż/Kupno");

    // };
    //                            \\//
    //                             \/                
    if (radioSaleElement.checked === true) {
        switch (selectElement.value) {
            case "Dolar":
                resultElement.innerText = (dolarSale.toFixed(2));
                resultSymbol.innerText = " [ $ ]";
                resultElement.classList = "form__result--colorBlack";
                break;
            case "Euro":
                resultElement.innerText = (euroSale.toFixed(2));
                resultSymbol.innerText = " [ € ]";
                resultElement.classList = "form__result--colorBlack";
                break;
            case "Funt":
                resultElement.innerText = (funtSale.toFixed(2));
                resultSymbol.innerText = " [ £ ]";
                resultElement.classList = "form__result--colorBlack";
                break;
        }
    } else if (radioBuyElement.checked === true) {
        switch (selectElement.value) {
            case "Dolar":
                resultElement.innerText = (dolarBuy.toFixed(2));
                resultSymbol.innerText = " [ PLN ]";
                resultElement.classList = "form__result--colorBlack";
                break;
            case "Euro":
                resultElement.innerText = (euroBuy.toFixed(2));
                resultSymbol.innerText = " [ PLN ]";
                resultElement.classList = "form__result--colorBlack";
                break;
            case "Funt":
                resultElement.innerText = (funtBuy.toFixed(2));
                resultSymbol.innerText = " [ PLN ]";
                resultElement.classList = "form__result--colorBlack";
                break;
        }
    } else {
        resultElement.classList = "form__result--colorRed";
        resultElement.innerText = ("Wybierz Sprzedaż/Kupno");
    }
});

removeButton.addEventListener("click", () => {
    if (radioSaleElement.checked === true || radioBuyElement.checked === true) {
        underListSale.classList = "form__underList form__underList--brighter";
        underListBuy.classList = "form__underList form__underList--brighter";
    };

    if (radioSaleElement.checked === false || radioBuyElement.checked === false) {
        resultElement.innerText = "";
        textAmount.innerText = "";
        resultSymbol.innerText = "";
    };

    selectElement.value = "Dolar";
    radioBuyElement.checked = "";
    radioSaleElement.checked = "";
    amount.value = "";
});
