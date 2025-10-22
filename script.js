function speak() {
  const text = document.getElementById("textInput").value;
  const utterance = new SpeechSynthesisUtterance(text);

  utterance.rate = 1; // Speed of speech (1 is normal, 0.5 is slower, 2 is faster)
  utterance.pitch = 1; // Pitch of the voice (0 is low, 2 is high)
  utterance.volume = 1; // Volume level (0 is mute, 1 is full volume)

  window.speechSynthesis.speak(utterance);
}
