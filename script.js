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
const cardNumberDivs = document.querySelectorAll(".card-number-div");
const backLogo = document.querySelector(".backimg");

const borders = (input, card) => {
  input.addEventListener("focus", () => {
    card.style.border = "2px solid #ccc";
  });
  input.addEventListener("focusout", () => {
    card.style.border = "none";
  });
};

borders(inputNumber, cardNumber);
borders(inputHolder, cardHolder);
borders(inputExpMonth, cardExpMonth);
borders(inputExpYear, cardExpYear);

const error = document.createElement("div");
error.classList.add("error");

const months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();

const years = [];
for (let i = 0; i <= 4; i++) {
  years.push(currentYear + i);
} // cardul expira peste 4 ani din prezent, val. maxima

const textError = (input, error, msg) => {
  error.textContent = msg;
  error.style.color = "red";
  error.style.fontSize = "12px";
  error.classList.toggle("error", true);
  input.value = input.value.slice(0, -1);
  input.parentNode.append(error);
};

inputNumber.addEventListener("input", () => {
  error.textContent = "";
  error.classList.toggle("error", false);

  const digits = inputNumber.value.split("");

  if (digits[0] === "3") {
    VISAimg.src = "./imgs/mastercard-26161.png";
    VISAimg.style.width = "40px";
    backLogo.src = "./imgs/mastercard-26161.png";
    backLogo.style.width = "30px";
    backLogo.style.height = "30px";
  } else {
    VISAimg.src = "./imgs/pngwing.com (2).png";
    VISAimg.style.width = "80px";
  }

  cardNumberDivs.forEach((item) => {
    const cardNumberHiddens = item.querySelectorAll(".card-number-hidden");
    cardNumberHiddens.forEach((digit) => {
      digit.textContent = "#";
    });
  });

  digits.forEach((digit, index) => {
    if (/[^0-9]/.test(digit)) {
      textError(inputNumber, error, "Please only use digits");
    } else {
      const cardNumberHidden = cardNumberDivs[
        Math.floor(index / 4)
      ].querySelectorAll(".card-number-hidden")[index % 4]; // groups them by 4 by index

      cardNumberHidden.textContent = "#";

      if (index === digits.length - 1) {
        cardNumberHidden.classList.add("slide-up");
        setTimeout(() => {
          cardNumberHidden.textContent = digit;
          cardNumberHidden.classList.remove("slide-up");
        }, 300);
      } else {
        cardNumberHidden.textContent = digit;
      }
    }
  });
});

inputHolder.addEventListener("input", (event) => {
  if (!/^[a-zA-Z\s]+$/.test(event.target.value)) {
    textError(inputHolder, error, "Please only use letters");
  } else {
    error.textContent = "";
    cardHolder.innerText = event.target.value.toUpperCase();
  }
});

const updateExp = (time, current, options) => {
  time.forEach((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    option.selected = parseInt(item, 10) === current;
    options.append(option);
  });
};

updateExp(months, currentMonth, inputExpMonth);
updateExp(years, currentYear, inputExpYear);

inputExpMonth.addEventListener("change", (event) => {
  cardExpMonth.innerText = `${event.target.value} /`;
});

inputExpYear.addEventListener("change", (event) => {
  cardExpYear.innerText = event.target.value;
});

inputCVC.addEventListener("input", (event) => {
  let digits = event.target.value.split("");
  digits.forEach((digit) => {
    if (/[^0-9]/.test(digit)) {
      textError(event.target, error, "Please only use digits");
    } else {
      error.textContent = "";
      cardCVC.innerText = event.target.value;
    }
  });
});

inputCVC.addEventListener("focus", () => {
  frontCard.style.transform = "perspective(1000px) rotateY(-180deg)";
  backCard.style.transform = "perspective(1000px) rotateY(0deg)";
});

inputCVC.addEventListener("focusout", () => {
  frontCard.style.transform = "perspective(1000px) rotateY(0deg)";
  backCard.style.transform = "perspective(1000px) rotateY(180deg)";
});
