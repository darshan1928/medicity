function handleSubmit() {
  let email = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let alert = document.getElementById("alert");
  function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  if (username.length == 0 || password.length == 0) {
    alert.style.display = "block";
    alert.innerHTML = "Please fill all the fields";

    return false;
  } else if (!validateEmail(email)) {
    alert.style.display = "block";
    alert.innerHTML = "enter valid email";
    return false;
  } else {
    console.log("Form is valid. Proceed with submission.");
    return true;
  }
}

function handleSubmitSignup() {
  let fullName = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let alert = document.getElementById("alert");

  function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function isValidPassword(password) {
    if (password.length < 8) {
      alert.style.display = "block";
      alert.innerHTML = "Password must be atleast 8 characters";
      return false;
    }

    if (!/[A-Z]/.test(password)) {
      alert.style.display = "block";
      alert.innerHTML = "Password should contain atleast 1 Uppercase";
      return false;
    }

    if (!/[a-z]/.test(password)) {
      alert.style.display = "block";
      alert.innerHTML = "Password should contain atleast 1 Lowercase";
      return false;
    }

    if (!/[^a-zA-Z0-9]/.test(password)) {
      alert.style.display = "block";
      alert.innerHTML = "Password should contain atleast 1 Special Character";
      return false;
    }
    if (password !== confirmPassword) {
      alert.style.display = "block";
      alert.innerHTML = "Password Mismacth";
      return false;
    }

    return true;
  }
  if (
    fullName.length == 0 ||
    password.length == 0 ||
    confirmPassword.length == 0
  ) {
    alert.style.display = "block";
    alert.innerHTML = "Please fill all the fields";

    return false;
  } else if (!validateEmail(email)) {
    alert.style.display = "block";
    alert.innerHTML = "enter valid email";

    return false;
  } else if (!isValidPassword(password)) {
    return false;
  } else {
    console.log("Form is valid. Proceed with submission.");
    return true;
  }
}
