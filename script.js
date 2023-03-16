//INVALID EMAIL BORDER COLOR

let emailInput = document.getElementById("email");
let errorEmail = document.getElementById("wrongEmail")

emailInput.addEventListener("input", function () {
  if (emailInput.validity.valid) {
    emailInput.style.borderColor = "#7C3AED";
    // errorEmail.classList.add("hide");
    errorEmail.classList.remove("wrong-email")
  } else {
    emailInput.style.borderColor = "#ED3A5A";
    errorEmail.classList.add("wrong-email")

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
