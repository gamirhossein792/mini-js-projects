let userNameInput = document.getElementById("username");
let form = document.getElementById("user-form");
let profileInfo = document.getElementById("profile-info");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let userName = userNameInput.value.trim();

  if (userName === "") {
    alert("please enter a username");
    return;
  }

  fetch(`https://api.github.com/users/${userName}`)
    .then((response) => response.json())
    .then((data) => {
      profileInfo.innerHTML = `
        <h2>${data.login}</h2>
        <p>name : ${data.name ? data.name : "N/A"}</p>
        <p>bio : ${data.bio ? data.bio : "N/A"}</p>
        <a href="${data.html_url}" target="_blank">github Profile</a>
        `;
    })
    .catch((error) => {
      profileInfo.innerHTML = `Error: ${error.message}`;
    });
});
