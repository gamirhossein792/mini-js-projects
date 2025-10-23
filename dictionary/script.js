document
  .getElementById("searchInput")
  .addEventListener("focusout", function () {
    const userInput = document.getElementById("searchInput").value.trim();

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("no word");
        }
        return response.json();
      })
      .then((data) => {
        const word = data[0].word;
        const phonetic = data[0].phonetic;
        const meaning = data[0].meanings[0];
        const definition = meaning.definitions[0];
        // let resultHTML = `<h1>${word}</h1>`;
        // resultHTML += `<h1>${meaning.partOfSpeech}</h1>`;
        // resultHTML += `<h1>${phonetic}</h1>`;
        // resultHTML += `<h1>${definition.definition}</h1>`;

        // document.getElementById("result").innerHTML = resultHTML;
        document.getElementById("wordsection").innerHTML = `
      <div class="left">
            <p>${word}</p>
            <span>${meaning.partOfSpeech} ${phonetic}</span>
          </div>
        </div>
        <div class="meaning">
          <p>Meaning</p>
          <span>${definition.definition}</span>
        </div>
        `;
      })
      .catch((error) => {
        document.getElementById("result").innerHTML = `error recived`;
      });
  });

var closeBtn = document.getElementById("closeBtn");

function showButton() {
  const status = closeBtn.classList.contains("hidden");
  if (status) {
    closeBtn.classList.remove("hidden");
  }
}

function hiddenBtn() {
  const searchInput = document.getElementById("searchInput");

  const status = closeBtn.classList.contains("hidden");

  if (status === false) {
    closeBtn.classList.add("hidden");
  }

  searchInput.value = " ";
}
