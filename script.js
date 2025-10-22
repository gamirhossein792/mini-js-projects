const passwordInput = document.getElementById("password");

passwordInput.addEventListener("input", function () {
  const pass = passwordInput.value;

  document.getElementById("error-lowercase").textContent = /[a-z]/.test(pass)
    ? ""
    : "a lowercase letter";

  document.getElementById("error-uppercase").textContent = /[A-Z]/.test(pass)
    ? ""
    : "a capital letter";

  document.getElementById("error-number").textContent = /\d/.test(pass)
    ? ""
    : "a number";

  document.getElementById("error-length").textContent =
    pass.length >= 8 ? "" : "minimum 8 characters";
});
