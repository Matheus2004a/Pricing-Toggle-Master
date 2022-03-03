const buttonToggle = document.querySelector("#toggle")
let prices = document.querySelectorAll(".card span h2")

buttonToggle.onclick = () => {
    prices.forEach(price => {
        let valueHigh = 0

        if (buttonToggle.checked) {
            valueHigh = price.innerHTML * 10
            price.innerHTML = Math.ceil(valueHigh) - 0.01
        } else {
            valueHigh = price.innerHTML / 10
            price.innerHTML = Math.ceil(valueHigh) - 0.01
        }
    })
}