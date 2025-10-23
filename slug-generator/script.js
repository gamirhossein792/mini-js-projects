var slugInput = document.getElementById("slugInput");
var slugOutput = document.getElementById("slugOutput");
var showSlug = document.getElementById("showSlug");

function slugGenerate() {
  // slugInput.value.split();
  // console.log(slugInput.value.split().join("-"));
  // slugOutput.setAttribute("value", slugInput.value);

  let separate = slugInput.value.split(" ").join("-");

  // slugOutput.setAttribute("value", slugInput.value.split(" ").join("-"));
  slugOutput.setAttribute("value", separate);

  document.getElementById("slugInput").value = "";
  showSlug.classList.contains("hidden")
    ? showSlug.classList.remove("hidden")
    : "";
}

function copyToClipboard() {
  slugOutput.select();
  navigator.clipboard.writeText(slugOutput.value);
}
