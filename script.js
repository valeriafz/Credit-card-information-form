const inputNumber = document.getElementById("card-number");
const cardNumber = document.querySelector(".card-number");
const cardHolder = document.querySelector(".card-holder");
const inputHolder = document.querySelector("#card-holder");
const inputExpMonth = document.getElementById("expire-month");
const cardExpMonth = document.querySelector(".expires-m");
const cardExpYear = document.querySelector(".expires-y");
const inputExpYear = document.getElementById("expire-year");
const inputCVC = document.getElementById("cvc");
const cardCVC = document.querySelector(".CVV-container");
const frontCard = document.querySelector(".front");
const backCard = document.querySelector(".back");

inputNumber.addEventListener("input", () => {
  //cardNumber.style.borderColor = "#ccc";
  const inputDigits = inputNumber.value.split("");
  cardNumber.innerText = "";
  inputDigits.forEach((digit) => {
    cardNumber.innerText += digit;
  });
});

inputHolder.addEventListener("input", () => {
  const inputNames = inputHolder.value.split(" ");
  cardHolder.innerText = inputNames.join(" ");
});

inputExpMonth.addEventListener("input", () => {
  const selectedOption = inputExpMonth.options[inputExpMonth.selectedIndex];
  cardExpMonth.innerText = `${selectedOption.textContent} /`;
});

inputExpYear.addEventListener("input", () => {
  const selectedOption = inputExpYear.options[inputExpYear.selectedIndex];
  cardExpYear.innerText = selectedOption.textContent;
});

inputCVC.addEventListener("input", () => {
  frontCard.style.transform = "perspective(1000px) rotateY(-180deg)";
  backCard.style.transform = "perspective(1000px) rotateY(0deg)";
  cardCVC.innerText = inputCVC.value;
});
