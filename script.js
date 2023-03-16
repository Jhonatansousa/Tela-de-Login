//INVALID EMAIL BORDER COLOR

var emailInput = document.getElementById("email");

emailInput.addEventListener("input", function () {
  if (emailInput.validity.valid) {
    emailInput.style.borderColor = "#7C3AED";
  } else {
    emailInput.style.borderColor = "red";
  }
});


//SHOW PASSWORD

document.getElementById("show").addEventListener("click", function () {
  let password = document.getElementById("password");
  let eye = document.getElementById("show-image");

  if (password.type === "password") {
    password.type = "text";
    eye.src = "assets/eye-off.svg";
  } else {
    password.type = "password";
    eye.src = "assets/eye.svg"
  }
});
