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
const VISAimg = document.querySelector(".VISA");

inputNumber.addEventListener("input", () => {
  const inputDigits = inputNumber.value.split("");
  cardNumber.innerText = "";

  const existingError = inputNumber.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }

  inputDigits.forEach((digit) => {
    if (digit[0] === "3") {
      VISAimg.src = "./imgs/mastercard-26161.png";
      VISAimg.style.width = "40px";
    }
    if (!isNaN(digit)) {
      cardNumber.innerText += digit;
    } else {
      const error = document.createElement("div");
      error.textContent = "Please use only digits";
      error.className = "error-message";
      inputNumber.insertAdjacentElement("afterend", error);
      error.style.color = "red";
      inputNumber.style.borderColor = "red";
    }
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
