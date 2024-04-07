let intDay = document.querySelector(".input__day");
let intMonth = document.querySelector(".input__month");
let intYear = document.querySelector(".input__year");
let spanErorr = document.querySelectorAll(".span__erorr");
let lebelErorr = document.querySelectorAll("label");

function erorrInt() {
  intDay.style.border = "1px solid red";
  spanErorr[0].textContent = "Must be a valid day";
  lebelErorr[0].style.color = "red";

  intMonth.style.border = "1px solid red";
  spanErorr[1].textContent = "Must be a valid month";
  lebelErorr[1].style.color = "red";

  intYear.style.border = "1px solid red";
  spanErorr[2].textContent = "Must be a valid month";
  lebelErorr[2].style.color = "red";
}

function normalInt() {
  spanErorr[0].textContent = "";
  intDay.style.borderColor = "rgba(0, 0, 00, 0.1)";
  lebelErorr[0].style.color = "black";

  spanErorr[1].textContent = "";
  intMonth.style.borderColor = "rgba(0, 0, 00, 0.1)";
  lebelErorr[1].style.color = "black";

  spanErorr[2].textContent = "";
  intYear.style.borderColor = "rgba(0, 0, 00, 0.1)";
  lebelErorr[2].style.color = "black";
}
const dateObj = new Date();
const year = dateObj.getUTCFullYear();
const month = dateObj.getUTCMonth() + 1;
const day = dateObj.getUTCDate();

intDay.addEventListener("input", () => {
  if (intDay.value > 31) {
    intDay.style.border = "1px solid red";
    spanErorr[0].textContent = "Must be a valid day";
    lebelErorr[0].style.color = "red";
  } else if (intMonth.value == 2 && intDay.value >= 29) {
    erorrInt();
  } else if (
    intMonth.value == 4 ||
    intMonth.value == 6 ||
    intMonth.value == 9 ||
    intMonth.value == 11
  ) {
    if (intDay.value == 31) {
      erorrInt();
    } else {
      normalInt();
    }
  } else {
    normalInt();
  }
});

intMonth.addEventListener("input", () => {
  if (intMonth.value > 12) {
    spanErorr[1].textContent = "Must be a valid month";
    intMonth.style.border = "1px solid red";
    lebelErorr[1].style.color = "red";
  } else if (intMonth.value == 2 && intDay.value > 29) {
    erorrInt();
  } else if (
    intMonth.value == 4 ||
    intMonth.value == 6 ||
    intMonth.value == 9 ||
    intMonth.value == 11
  ) {
    if (intDay.value == 31) {
      erorrInt();
    }
  } else {
    normalInt();
  }
});

intYear.addEventListener("input", () => {
  if (intYear.value > year) {
    spanErorr[2].textContent = "Must be a valid month";
    intYear.style.border = "1px solid red";
    lebelErorr[2].style.color = "red";
    // erorrInt();
  } else if (intYear.value % 4 && intMonth.value == 2 && intDay.value >= 29) {
    erorrInt();
  } else {
    normalInt();
  }
});
let btn = document.querySelector("button");
let cardH1 = document.querySelectorAll(".card__sapn");

btn.addEventListener("click", () => {
  let yearAge = year - intYear.value;
  let monathAge = month - intMonth.value;
  let dayAge = day - intDay.value;

  if (intMonth.value > month) {
    yearAge--;
    cardH1[0].textContent = yearAge;
    console.log(yearAge);
  } else {
    cardH1[0].textContent = yearAge;
  }
  if (monathAge < 0) {
    cardH1[1].textContent = 12 + monathAge;
  } else {
    cardH1[1].textContent = monathAge;
  }
  if (dayAge < 0) {
    cardH1[2].textContent = 31 + dayAge;
  } else {
    cardH1[2].textContent = dayAge;
  }
  new Audio("../music/deClick.mp3").play();
});
