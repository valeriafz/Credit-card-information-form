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
error.classList.add("error");

const textError = (input, error, msg) => {
  error.textContent = msg;
  error.style.color = "red";
  error.style.fontSize = "12px";
  error.classList.toggle("error", true);
  input.parentNode.append(error);
};

inputNumber.addEventListener("input", () => {
  error.textContent = "";
  error.classList.toggle("error", false);
  cardNumber.innerText = "";
  const digits = inputNumber.value.split("");

  if (digits[0] === "3") {
    VISAimg.src = "./imgs/mastercard-26161.png";
    VISAimg.style.width = "40px";
  } else {
    VISAimg.src = "./imgs/pngwing.com (2).png";
  }

  digits.forEach((digit) => {
    if (isNaN(digit)) {
      textError(inputNumber, error, "Please only use digits");
    } else {
      cardNumber.textContent += digit;
    }
  });
});

inputHolder.addEventListener("input", (event) => {
  const inputNames = event.target.value;

  if (!/^[a-zA-Z\s]+$/.test(inputNames)) {
    textError(inputHolder, error, "Please only use letters");
  } else {
    cardHolder.innerText = inputNames.toUpperCase();
  }
});

inputExpMonth.addEventListener("input", (event) => {
  cardExpMonth.innerText = `${event.target.value} /`;
});

inputExpYear.addEventListener("input", (event) => {
  cardExpYear.innerText = event.target.value;
});

inputCVC.addEventListener("input", (event) => {
  cardCVC.innerText = event.target.value;
});

inputCVC.addEventListener("focus", () => {
  frontCard.style.transform = "perspective(1000px) rotateY(-180deg)";
  backCard.style.transform = "perspective(1000px) rotateY(0deg)";
});

inputCVC.addEventListener("focusout", () => {
  frontCard.style.transform = "perspective(1000px) rotateY(0deg)";
  backCard.style.transform = "perspective(1000px) rotateY(180deg)";
});
