
const ConvertButton = document.querySelector(".content-button")
const currencySelect = document.querySelector(".currency-select")

function converValeus() {
    const inputCurrencyVale = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-vale-to-convert")//valor em Real//
    const currencyValueConverted = document.querySelector(".currency-vale")//outras moedas//

    console.log(currencySelect.value)

    const dolatToday = 5.2
    const euroToday = 6.2
    const libraToday = 5.6
    const btctoday = 7.6

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyVale / dolatToday)

    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyVale / euroToday)


    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyVale / libraToday)


    }

    if (currencySelect.value == "btc"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyVale / btctoday )
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyVale)

}
function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dóla"
        currencyImage.src = "./assets/imag/usa.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/imag/Euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/imag/Libra.png"
    }

    if (currencySelect.value == "btc") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/imag/bitcoin.png"
    }

    converValeus()

}

currencySelect.addEventListener("change", changeCurrency)
ConvertButton.addEventListener("click", converValeus)