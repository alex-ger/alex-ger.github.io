var link = document.querySelector(".btn-contact-us");

var popup = document.querySelector(".popup-form");
var close = popup.querySelector(".btn-popup-close");

var form = popup.querySelector("form");
var forename = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

var storage = localStorage.getItem("email");


link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup-form-close");
  popup.classList.add("popup-form-show");
  if (storage) {
    forename.value = storage;
    email.focus();
  } else {
    forename.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup-form-show");
  popup.classList.add("popup-form-close");
});

form.addEventListener("submit", function(event) {
  if (!forename.value || !email.value) {
    event.preventDefault();
    console.log("Нужно ввести имя и e-mail");
  } else {
    localStorage.setItem("email", email.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("popup-form-show")) {
        popup.classList.remove("popup-form-show");
        popup.classList.add("popup-form-close");
    }
  }
});
