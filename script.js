let optionalField = document.querySelectorAll(".optional-field");
let dynamicField = document.getElementById("dynamicField");

function addField() {
  event.preventDefault();
  dynamicField.innerHTML += `
    <input
        type="text"
        placeholder="Optional Field"
        class="optional-field"
    />`;
}
function removeField() {
  event.preventDefault();
  document.querySelector(".optional-field").remove();
}
