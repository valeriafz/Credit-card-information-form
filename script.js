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

const error = document.createElement("div");
error.className = "error-message";
error.style.color = "red";

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
      error.textContent = "Please use only digits";
      inputNumber.insertAdjacentElement("afterend", error);
      inputNumber.style.borderColor = "red";
      inputNumber.style.backgroundColor = "#FFCCCB";
    }
  });
});

inputHolder.addEventListener("input", () => {
  const inputNames = inputHolder.value;
  let containsNonLetter = false;

  const existingError = inputHolder.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }

  if (!/^[a-zA-Z\s]+$/.test(inputNames)) {
    containsNonLetter = true;
  }

  if (containsNonLetter) {
    error.textContent = "Please use only letters and spaces";
    inputHolder.insertAdjacentElement("afterend", error);
    inputHolder.style.backgroundColor = "#FFCCCB";
  } else {
    cardHolder.innerText = inputNames.toUpperCase();
  }
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
