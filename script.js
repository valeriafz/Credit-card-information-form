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

  let cardNumberArray = Array(16).fill("#");

  const digits = inputNumber.value.split("");

  if (digits[0] === "3") {
    VISAimg.src = "./imgs/mastercard-26161.png";
    VISAimg.style.width = "40px";
  } else {
    VISAimg.src = "./imgs/pngwing.com (2).png";
  }

  digits.forEach((digit, index) => {
    if (/[^0-9]/.test(digit)) {
      textError(inputNumber, error, "Please only use digits");
    } else {
      cardNumberArray[index] = digit;

      cardNumber.innerText = cardNumberArray
        .join("")
        .replace(/(....)/g, "$1 ")
        .trimStart(); // Group in sets of 4;

      cardNumber.classList.add("slide-up");

      setTimeout(() => {
        cardNumber.classList.remove("slide-up");
      }, 300);
    }
  });
});

inputHolder.addEventListener("input", (event) => {
  const inputNames = event.target.value;

  if (!/^[a-zA-Z\s]+$/.test(inputNames)) {
    textError(inputHolder, error, "Please only use letters");
  } else {
    error.textContent = "";
    cardHolder.innerText = inputNames.toUpperCase();
  }
});

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

const updateExp = (time, current, options) => {
  time.forEach((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    option.selected = parseInt(item, 10) === current ? true : false;
    options.appendChild(option);
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
