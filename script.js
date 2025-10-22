// final 1

document.getElementById("decodeButton").addEventListener("click", function () {
  const binaryMessage = document.getElementById("MessageInput").value;
  function decodeBinaryMessage(binaryMessage) {
    // Split the binary message into 8-bit chunks
    const chunks = binaryMessage.match(/.{1,8}/g);

    // Convert each chunk to its ASCII equivalent
    const decodedMessage = chunks
      .map((chunk) => String.fromCharCode(parseInt(chunk, 2)))
      .join("");

    return decodedMessage;
  }
  document.getElementById("result").innerHTML =
    decodeBinaryMessage(binaryMessage);
});

function encode() {
  var output = document.getElementById("result");
  var input = document.getElementById("MessageInput").value;
  let result = "";
  for (var i = 0; i < input.length; i++) {
    result += input[i].charCodeAt(0).toString(2) + " ";
  }

  document.getElementById("result").innerHTML = result;
}
