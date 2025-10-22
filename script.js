const usernameInput = document.getElementById("username");
const form = document.getElementById("user-form");
const profileInfo = document.getElementById("profile-info");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = usernameInput.value.trim();

  // Input validation
  if (username === "") {
    alert("Please enter a username.");
    return;
  }

  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      // Display fetched data
      profileInfo.innerHTML = `
        <h2>${data.login}</h2>
        <p>Name: ${data.name ? data.name : "N/A"}</p>
        <p>Bio: ${data.bio ? data.bio : "N/A"}</p>
        <a href="${data.html_url}" target="_blank">GitHub Profile</a>
      `;
    })
    .catch((error) => {
      // Handle errors
      profileInfo.innerHTML = `Error: ${error.message}`;
    });
});
