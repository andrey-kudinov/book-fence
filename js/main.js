// Select script start

const selectSingle = document.querySelector(".__select");
const selectSingle_title = selectSingle.querySelector(".__select__title");
const selectSingle_labels = selectSingle.querySelectorAll(".__select__label");
let material = 0;
// Toggle menu
selectSingle_title.addEventListener("click", () => {
  if ("active" === selectSingle.getAttribute("data-state")) {
    selectSingle.setAttribute("data-state", "");
  } else {
    selectSingle.setAttribute("data-state", "active");
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener("click", (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute("data-state", "");
  });
}

// Select script end

// Phone script start
const userTel = document.querySelector(".input-user__phone");

window.addEventListener("DOMContentLoaded", function () {
  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  }

  function mask(event) {
    let matrix = "+7 (___) ___ - __ - __",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });
    if (event.type == "blur") {
      if (this.value.length == 2) this.value = "";
    } else setCursorPosition(this.value.length, this);
  }
  userTel.addEventListener("input", mask, false);
  userTel.addEventListener("focus", mask, false);
  userTel.addEventListener("blur", mask, false);
});

// служебное переключение окон и состояний

const btnIn = document.querySelector(".btn1");
const btnUser = document.querySelector(".btn2");
const btnOut = document.querySelector(".btn3");
const btnTrue = document.querySelector(".btn4");
const btnFalse = document.querySelector(".btn5");
const btnClr = document.querySelector(".btn6");
const btnEnt = document.querySelector(".btn7");
const btnDel = document.querySelector(".btn8");
const winIn = document.querySelector(".in");
const winUser = document.querySelector(".user");
const winOut = document.querySelector(".out");

const check = document.querySelectorAll(".check");
const input = document.querySelectorAll(".input");

btnIn.onclick = function () {
  winIn.style.display = "block";
  winUser.style.display = "none";
  winOut.style.display = "none";
};

btnUser.onclick = function () {
  winIn.style.display = "none";
  winUser.style.display = "block";
  winOut.style.display = "none";
};

btnOut.onclick = () => {
  winIn.style.display = "none";
  winUser.style.display = "none";
  winOut.style.display = "block";
};

btnTrue.onclick = () => {
  for (let elem of check) {
    elem.style.display = "block";
  }
  for (let elem of input) {
    elem.style.borderColor = "#d7d7d7";
  }
  for (let elem of document.querySelectorAll("span.input-text-false")) {
    elem.style.display = "none";
  }
};

btnFalse.onclick = () => {
  for (let elem of input) {
    elem.style.borderColor = "#c98e99";
  }
  for (let elem of document.querySelectorAll("span.input-text-false")) {
    elem.style.display = "block";
  }
  for (let elem of check) {
    elem.style.display = "none";
  }
};

btnClr.onclick = () => {
  for (let elem of input) {
    elem.style.borderColor = "#d7d7d7";
  }
  for (let elem of document.querySelectorAll("span.input-text-false")) {
    elem.style.display = "none";
  }
  for (let elem of check) {
    elem.style.display = "none";
  }
};

btnEnt.onclick = () => {
  inputWidth.value = 10;
  validWidth();
  inputHeight.value = 2;
  validHeight();
  selectSingle_title.textContent = "Модули 500 Р за м²";
  validMaterial();
  document.querySelector(".input-in__check").checked = true;
  inst();
  sum();
  userName.value = "Ксения Дукалис";
  validName();
  userMail.value = "mail@mail.com";
  validMail();
  userTel.value = "+7 (777) 888 - 99 - 99";
  validTel();
  validSend()
};

btnDel.onclick = () => {
  inputWidth.value = "";
  inputHeight.value = "";
  selectSingle_title.textContent = "Выберите материал";
  document.querySelector(".input-in__check").checked = false;
  userName.value = "";
  userMail.value = "";
  userTel.value = "";
  document.querySelector(".in__total-sum").textContent = "0 ₽";
  userWidth.textContent = "";
  userHeiht.textContent = "";
  userMaterial.textContent = "";
  userTotal.textContent = "";
};

// validation script start

const inputWidth = document.querySelector(".input-width");
const inputHeight = document.querySelector(".input-height");
let btnNextFalse = document.querySelector(".button-in__next-false");
let btnNextTrue = document.querySelector(".button-in__next-true");
let width = inputWidth.value;
let height = inputHeight.value;
let price;
let total;

// проверка ширины
let validWidthBln = false;
inputWidth.onchange = function () {
  validWidth();
};

function validWidth() {
  inputWidth.value = inputWidth.value.replace(",", ".");
  inputWidth.value = inputWidth.value.replace(/[^\d\s.]/g, "");
  if (inputWidth.value > 0) {
    document.getElementsByClassName("check")[0].style.display = "block";
    inputWidth.style.borderColor = "#d7d7d7";
    document.getElementsByClassName("input-text-false")[0].style.display =
      "none";
    width = inputWidth.value;
    validWidthBln = true;
    document.querySelector(
      ".in__width-m"
    ).textContent = `${declOfNum(inputWidth.value, [
      "метр",
      "метра",
      "метров",
    ])}`;
    sum();
    validBtn();
  } else {
    document.getElementsByClassName("check")[0].style.display = "none";
    inputWidth.style.borderColor = "#c98e99";
    document.getElementsByClassName("input-text-false")[0].style.display =
      "block";
    width = inputWidth.value;
    validWidthBln = false;
  }
}
// проверка высоты
let validHeightBln = false;
inputHeight.onchange = function () {
  validHeight();
};

function validHeight() {
  inputHeight.value = inputHeight.value.replace(",", ".");
  inputHeight.value = inputHeight.value.replace(/[^\d\s.]/g, "");
  if (inputHeight.value > 0) {
    document.getElementsByClassName("check")[1].style.display = "block";
    inputHeight.style.borderColor = "#d7d7d7";
    document.getElementsByClassName("input-text-false")[1].style.display =
      "none";
    height = inputHeight.value;
    validHeightBln = true;
    document.querySelector(
      ".in__height-m"
    ).textContent = `${declOfNum(inputHeight.value, [
      "метр",
      "метра",
      "метров",
    ])}`;
    sum();
    validBtn();
  } else {
    document.getElementsByClassName("check")[1].style.display = "none";
    inputHeight.style.borderColor = "#c98e99";
    document.getElementsByClassName("input-text-false")[1].style.display =
      "block";
    height = inputHeight.value;
    validHeightBln = false;
  }
}
// проверка материала
for (let elem of document.querySelectorAll(".__select__input")) {
  elem.onchange = function () {
    validMaterial();
  };
}

let validMaterialBln = false;
let materialName;
function validMaterial() {
  switch (selectSingle_title.textContent) {
    case "Профнастил 400 Р за м²":
      material = 400;
      validMaterialBln = true;
      materialName = "профнастил";
      inst();
      sum();
      validBtn();
      break;
    case "Модули 500 Р за м²":
      material = 500;
      validMaterialBln = true;
      materialName = "модули";
      inst();
      sum();
      validBtn();
      break;
    case "Бетон 700 Р за м²":
      material = 700;
      validMaterialBln = true;
      materialName = "бетон";
      inst();
      sum();
      validBtn();
      break;
    case "Сетка 200 Р за м²":
      material = 200;
      validMaterialBln = true;
      materialName = "сетка";
      inst();
      sum();
      validBtn();
      break;
    default:
      material = 0;
      validMaterialBln = false;
  }
  if (material != 0) {
    document.getElementsByClassName("check")[2].style.display = "block";
  } else {
    document.getElementsByClassName("check")[2].style.display = "none";
  }
  console.log(selectSingle_title.textContent);
  sum();
  validBtn();
}
// проверка монтажа
let install = 0;
document.querySelector(".input-in__check").onchange = function () {
  inst();
  sum();
};
function inst() {
  if (validMaterialBln == false) {
    install = 0;
  } else {
    if (document.querySelector(".input-in__check").checked == true) {
      install = 200;
    } else {
      install = 0;
    }
  }
}

// подсчет и вывод суммы
function sum() {
  total = width * height * (material + install);
  console.log(`длина ${width}`);
  console.log(`ширина ${height}`);
  console.log(`цена за м² ${material}`);
  console.log(`стоимость материала ${width * height * material}`);
  console.log(`монтаж ${document.querySelector(".input-in__check").checked}`);
  console.log(`стоимость монтажа ${width * height * install}`);
  console.log(`ВСЕГО ${total}`);

  if (isNaN(total)) {
    document.querySelector(".in__total-sum").textContent = "0 ₽";
  } else {
    if (total < 100000000) {
      document.querySelector(
        ".in__total-sum"
      ).textContent = `${total.toLocaleString("ru-RU", {
        useGrouping: true,
      })} ₽`;
      document.querySelector(".in__total-sum-l").style.background = "";
    } else {
      let totalMln;
      totalMln = Math.round(total / 1000000);
      document.querySelector(
        ".in__total-sum"
      ).textContent = `${totalMln.toLocaleString("ru-RU", {
        useGrouping: true,
      })}`;
      document.querySelector(".in__total-sum-l").style.background =
        "url(../img/svg/lemon.svg) no-repeat";
    }
  }
}

// проверка кнопки
function validBtn() {
  if (
    validWidthBln == true &&
    validHeightBln == true &&
    validMaterialBln == true
  ) {
    document.querySelector(".button-in__next-true").style.zIndex = "1";
  }
}

// проверка имени
const userName = document.querySelectorAll(".input-user")[0];
userName.onchange = function () {
  validName();
};

let validNameBln = false;
function validName() {
  userName.value.length = 5;
  if (userName.value.match(/[А-Яа-яЁё\s]/g) && userName.value != "") {
    console.log("имя верно");
    userName.value = userName.value.replace(/[^А-Яа-яЁё\s]/g, "");
    document.getElementsByClassName("check")[3].style.display = "block";
    userName.style.borderColor = "#d7d7d7";
    document.getElementsByClassName("input-text-false")[2].style.display =
      "none";
      validNameBln = true;
      validSend()
  } else {
    console.log("имя ошибка");
    document.getElementsByClassName("check")[3].style.display = "none";
    userName.style.borderColor = "#c98e99";
    document.getElementsByClassName("input-text-false")[2].style.display =
      "block";
      validNameBln = false;
  }
}

// проверка почты
const userMail = document.querySelectorAll(".input-user")[1];
userMail.onchange = function () {
  validMail();
};

let validMailBln = false;
function validMail() {
  if (
    userMail.value.match(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    console.log("почта верно");
    document.getElementsByClassName("check")[4].style.display = "block";
    userMail.style.borderColor = "#d7d7d7";
    document.getElementsByClassName("input-text-false")[3].style.display =
      "none";
      validMailBln = true;
      validSend()
  } else {
    console.log("почта ошибка");
    document.getElementsByClassName("check")[4].style.display = "none";
    userMail.style.borderColor = "#c98e99";
    document.getElementsByClassName("input-text-false")[3].style.display =
      "block";
      validMailBln = false;
  }
}

// проверка телефона
userTel.onchange = function () {
  validTel();
};
let validTelBln = false;
function validTel() {
  console.log(`количество символов в номере ${userTel.value.length}`);
  console.log(`номер ${userTel.value}`);

  if (userTel.value.length == 22) {
    console.log("телефон верно");
    document.getElementsByClassName("check")[5].style.display = "block";
    userTel.style.borderColor = "#d7d7d7";
    document.getElementsByClassName("input-text-false")[4].style.display =
      "none";
      validTelBln = true;
      validSend()
  } else {
    console.log("телефон ошибка");
    document.getElementsByClassName("check")[5].style.display = "none";
    userTel.style.borderColor = "#c98e99";
    document.getElementsByClassName("input-text-false")[4].style.display =
      "block";
      validTelBln = false;
  }
}

function validSend() {
  if (validNameBln == true && validMailBln == true && validTelBln == true) {
    document.querySelector(".button-user__send").classList.add("button-user__send-active") 
    document.querySelector(".out__name").textContent = userName.value;
    document.querySelector(".out__number").textContent = getRandomInt(9999);
    document.querySelector(".out__mail-user").textContent = userMail.value;
    document.querySelector(".out__phone-user").textContent =
      "+7 (999) 000 - 11 - 22";
  }
}

// validation script end

// переход
btnNextTrue.onclick = function () {
  winIn.style.display = "none";
  winUser.style.display = "block";
  winOut.style.display = "none";
  showOrder();
};

document.querySelector(".button-user__send").onclick = function () {
  winIn.style.display = "none";
  winUser.style.display = "none";
  winOut.style.display = "block";
};

// вывод заказа
const userWidth = document.querySelector(".user__width");
const userHeiht = document.querySelector(".user__height");
const userMaterial = document.querySelector(".user__material");
const userTotal = document.querySelector(".user__total");

function showOrder() {
  userWidth.textContent = `длиной ${
    inputWidth.value +
    " " +
    declOfNum(inputWidth.value, ["метр", "метра", "метров"])
  }`;
  userHeiht.textContent = `высотой ${
    inputHeight.value +
    " " +
    declOfNum(inputHeight.value, ["метр", "метра", "метров"])
  }`;
  userMaterial.textContent = `${materialName}`;
  userTotal.textContent = `${total.toLocaleString("ru-RU", {
    useGrouping: true,
  })} ₽`;
}

// склонение метров
function declOfNum(n, text_forms) {
  n = Math.abs(n) % 100;
  let n1 = n % 10;
  if (n > 10 && n < 20) {
    return text_forms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return text_forms[1];
  }
  if (n1 == 1) {
    return text_forms[0];
  }
  return text_forms[2];
}

// random
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
