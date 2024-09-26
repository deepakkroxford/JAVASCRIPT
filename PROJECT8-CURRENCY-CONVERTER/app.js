const BASE_URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies';

const dropdowns = document.querySelectorAll('.dropdown select')
const button = document.querySelector('form button')
const fromCurr = document.querySelector('from select')
const toCurr = document.querySelector('to select')
const msg = document.querySelector('.msg')

for (let select of dropdowns) {

    for (currcodes in countryList) {
        let newOptions = document.createElement("option")
        newOptions.innerText = currcodes;
        newOptions.value = currcodes;

        if (select.name === 'from' && currcodes === 'USD') {
            newOptions.selected = 'selected';
        }
        else if (select.name === 'to' && currcodes === 'INR') {
            newOptions.selected = 'selected';
        }
        select.append(newOptions);
    }
    select.addEventListener('change', (eve) => {
        updatingfalg(eve.target);
    })
}


const updatingfalg = function (element) {
    let currcodes = element.value;
    let countryCode = countryList[currcodes];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector('img');
    img.src = newSrc
};




const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
      amtVal = 1;
      amount.value = "1";
    }
    const URL = `${BASE_URL}/${fromCurr.value}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
 
  };


  button.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
  });
