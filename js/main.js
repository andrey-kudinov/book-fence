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

window.addEventListener("DOMContentLoaded", function () {
  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  }

  function mask(event) {
    var matrix = "+7 (___) ___ - __ - __",
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
  var input = document.querySelector(".input-user__phone");
  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
});

// служебное переключение окон и состояний

const btnIn = document.querySelector(".btn1");
const btnUser = document.querySelector(".btn2");
const btnOut = document.querySelector(".btn3");
const btnTrue = document.querySelector(".btn4");
const btnFalse = document.querySelector(".btn5");
const btnClr = document.querySelector(".btn6");
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

// валидация

const inputWidth = document.querySelector(".input-width");
const inputHeight = document.querySelector(".input-height");
let btnNextFalse = document.querySelector(".button-in__next-false");
let btnNextTrue = document.querySelector(".button-in__next-true");
let width = inputWidth.value;
let height = inputHeight.value;

let price;
let total;

// btnNextFalse.onclick = function () {
//   if (inputWidth.value > 0) {
//     document.getElementsByClassName("check")[0].style.display = "block";
//     inputWidth.style.borderColor = "#d7d7d7";
//     document.getElementsByClassName("input-text-false")[0].style.display =
//       "none";
//     width = inputWidth.value;
//   } else {
//     document.getElementsByClassName("check")[0].style.display = "none";
//     inputWidth.style.borderColor = "#c98e99";
//     document.getElementsByClassName("input-text-false")[0].style.display =
//       "block";
//     width = inputWidth.value;
//   }
//   if (inputHeight.value > 0) {
//     document.getElementsByClassName("check")[1].style.display = "block";
//     inputHeight.style.borderColor = "#d7d7d7";
//     document.getElementsByClassName("input-text-false")[1].style.display =
//       "none";
//     height = inputHeight.value;
//   } else {
//     document.getElementsByClassName("check")[1].style.display = "none";
//     inputHeight.style.borderColor = "#c98e99";
//     document.getElementsByClassName("input-text-false")[1].style.display =
//       "block";
//     height = inputHeight.value;
//   }

//   switch (selectSingle_title.textContent) {
//     case "Профнастил 400 Р за м²":
//       material = 400;
//       break;
//     case "Модули 500 Р за м²":
//       material = 500;
//       break;
//     case "Бетон 700 Р за м²":
//       material = 700;
//       break;
//     case "Сетка 200 Р за м²":
//       material = 200;
//       break;
//     default:
//       material = 0;
//   }
//   if (material != 0) {
//     document.getElementsByClassName("check")[2].style.display = "block";
//   } else {
//     document.getElementsByClassName("check")[2].style.display = "none";
//   }
//   console.log(selectSingle_title.textContent);

//   if (document.querySelector(".input-in__check").checked != true) {
//     price = material;
//   } else {
//     price = material + 200;
//   }
//   total = width * height * price;
//   console.log(`длина ${width}`);
//   console.log(`ширина ${height}`);
//   console.log(`монтаж ${document.querySelector(".input-in__check").checked}`);
//   console.log(`цена за м² ${price}`);
//   console.log(`всего ${total}`);

//   document.querySelector(".in__total-sum").textContent = "";
//   document.querySelector(".in__total-sum").textContent = `${total} ₽`;

//   if (total != 0) {
//     document.querySelector(".button-in__next-true").style.zIndex = "1";
//   }
// };

// валидация высоты
let validWidthBln = false
inputWidth.onchange = function validWidth() {
  if (inputWidth.value > 0) {
    document.getElementsByClassName("check")[0].style.display = "block";
    inputWidth.style.borderColor = "#d7d7d7";
    document.getElementsByClassName("input-text-false")[0].style.display =
      "none";
    width = inputWidth.value;
    validWidthBln = true
    sum()
    validBtn()
    validInst()
  } else {
    document.getElementsByClassName("check")[0].style.display = "none";
    inputWidth.style.borderColor = "#c98e99";
    document.getElementsByClassName("input-text-false")[0].style.display =
      "block";
    width = inputWidth.value;
    validWidthBln = false
  }
}
// валидация ширины
let validHeightBln = false
inputHeight.onchange = function validHeight() {
  if (inputHeight.value > 0) {
    document.getElementsByClassName("check")[1].style.display = "block";
    inputHeight.style.borderColor = "#d7d7d7";
    document.getElementsByClassName("input-text-false")[1].style.display =
      "none";
    height = inputHeight.value;
    validHeightBln = true
    sum()
    validBtn()
    validInst()
  } else {
    document.getElementsByClassName("check")[1].style.display = "none";
    inputHeight.style.borderColor = "#c98e99";
    document.getElementsByClassName("input-text-false")[1].style.display =
      "block";
    height = inputHeight.value;
    validHeightBln = false
  }
}
// валидация материала
for (let elem of document.querySelectorAll(".__select__input")) {
  elem.onchange = function() {validMaterial()}
}

let validMaterialBln = false
function validMaterial() {
  switch (selectSingle_title.textContent) {
    case "Профнастил 400 Р за м²":
      material = 400;
      validMaterialBln = true
      sum()
      validBtn()
      validInst()
      break;
    case "Модули 500 Р за м²":
      material = 500;
      validMaterialBln = true
      sum()
      validBtn()
      validInst()
      break;
    case "Бетон 700 Р за м²":
      material = 700;
      validMaterialBln = true
      sum()
      validBtn()
      validInst()
      break;
    case "Сетка 200 Р за м²":
      material = 200;
      validMaterialBln = true
      sum()
      validBtn()
      validInst()
      break;
    default:
      material = 0;
      validMaterialBln = false
  }
  if (material != 0) {
    document.getElementsByClassName("check")[2].style.display = "block";
  } else {
    document.getElementsByClassName("check")[2].style.display = "none";
  }
  console.log(selectSingle_title.textContent);
  sum()
  validBtn()
}
// валидация монтажа
document.querySelector('.input-in__check').onchange = function () {validInst()}

function validInst() {
  if (document.querySelector(".input-in__check").checked == true) {
    material += 200;
  }
  sum()
}
// вывод суммы
function sum() {
  total = width * height * material;
  console.log(`длина ${width}`);
  console.log(`ширина ${height}`);
  console.log(`монтаж ${document.querySelector(".input-in__check").checked}`);
  console.log(`цена за м² ${price}`);
  console.log(`всего ${total}`);

  if (isNaN(total)) {
    document.querySelector(".in__total-sum").textContent = "0 ₽";
  } else {
    document.querySelector(".in__total-sum").textContent = `${total} ₽`;
  }
}
// валидация кнопки
function validBtn() {
  if (validWidthBln == true && validHeightBln == true && validMaterialBln == true) {
    document.querySelector(".button-in__next-true").style.zIndex = "1";
  }
}

btnNextTrue.onclick = function () {
  winIn.style.display = "none";
  winUser.style.display = "block";
  winOut.style.display = "none";
};


