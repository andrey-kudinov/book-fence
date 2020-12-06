// Select script start

const selectSingle = document.querySelector(".__select");
const selectSingle_title = selectSingle.querySelector(".__select__title");
const selectSingle_labels = selectSingle.querySelectorAll(".__select__label");

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
const btnTrue = document.querySelector(".btn3");
const btnFalse = document.querySelector(".btn4");
const btnClr = document.querySelector(".btn5");
const winIn = document.querySelector(".in");
const winUser = document.querySelector(".user");

const check = document.querySelectorAll(".check");
const input = document.querySelectorAll(".input");

btnIn.onclick = function () {
  winIn.style.display = "block";
  winUser.style.display = "none";
};

btnUser.onclick = function () {
  winIn.style.display = "none";
  winUser.style.display = "block";
};

btnTrue.onclick = () => {
  for (let elem of check) {
    elem.style.display = "block";
  }
  for (let elem of input) {
    elem.classList.remove("input-border-false");
  }
  for (let elem of document.querySelectorAll("span.input-text-false")) {
    elem.style.display = "none";
  }
};

btnFalse.onclick = () => {
  for (let elem of input) {
    elem.classList.add("input-border-false");
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
    elem.classList.remove("input-border-false");
  }
  for (let elem of document.querySelectorAll("span.input-text-false")) {
    elem.style.display = "none";
  }
  for (let elem of check) {
    elem.style.display = "none";
  }
};
