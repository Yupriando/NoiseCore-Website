const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const dob = document.getElementById("dob");
const male = document.getElementById("male");
const female = document.getElementById("female");
const agreement = document.getElementById("agreement");

function validateRegister(event) {
  event.preventDefault();
  let valid = true;

  if (username.value.length < 5) {
    valid = false;
    alert("Username length must be more than 5.");
  } else if (!email.value.endsWith("@gmail.com")) {
    valid = false;
    alert("Email must end with @gmail.com");
  } else if (!isAlphaNum(password.value)) {
    valid = false;
    alert("{Password must be Alpha Numerical");
  } else if (!dob.value) {
    valid = false;
    alert("DOB must be select");
  } else if (!male.checked && !female.checked) {
    valid = false;
    alert("Gender must be select");
  } else if (!agreement.checked) {
    valid = false;
    alert("Agreement must be checked");
  }

  if (valid) {
    alert("Form successfully insert");
  }
}

function isAlphaNum(password) {
  let Alpha = false;
  let Number = false;

  for (let i = 0; i < password.length; i++) {
    if (isNaN(password[i])) {
      Alpha = true;
    } else {
      Number = true;
    }
  }

  return Alpha && Number;
}

form.addEventListener("submit", validateRegister);
