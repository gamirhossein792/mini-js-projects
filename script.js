/*
function getTable() {
  let number = document.getElementById("number").value;
  let range = document.getElementById("range").value;

  for (let counter = 0; counter <= range; counter++) {
    console.log(number * counter);
  }
}
*/

// final

function getTable() {
  let number = document.getElementById("number").value;
  let range = document.getElementById("range").value;
  /*
    if (range >= 100) {
      alert("please select a value that is no more than 100");
      break;
    }
  */
  for (let counter = 0; counter <= range; counter++) {
    if (range >= 100) {
      alert("please select a value that is no more than 100");
      break;
    }

    let newLi = document.createElement("li");
    // newLi.innerHTML = number * counter;
    // newLi.className = "item";
    newLi.innerHTML = `${number}  X  ${counter}  =  ${number * counter} `;
    document.getElementById("myTable").appendChild(newLi);
  }
}

//                                          final code
/*
function getTable() {
  let number = document.getElementById("number").value;
  let range = document.getElementById("range").value;

  for (let counter = 0; counter <= range; counter++) {
    let newLi = document.createElement("li");
    // newLi.innerHTML = number * counter;
    // newLi.className = "item";
    newLi.innerHTML = `${number}  X  ${counter}  =  ${number * counter} `;
    document.getElementById("myTable").appendChild(newLi);
  }
}
*/
//                                          final 2

// function getTable() {
//   let number = document.getElementById("number").value;
//   let range = document.getElementById("range").value;
//   /*
//   if (range >= 100) {
//     alert("please select a value that is no more than 100");
//     break;
//   }
// */
//   for (let counter = 0; counter <= range; counter++) {
//     if (range >= 100) {
//       alert("please select a value that is no more than 100");
//       break;
//     }

//     let newLi = document.createElement("li");
//     // newLi.innerHTML = number * counter;
//     // newLi.className = "item";
//     newLi.innerHTML = `${number}  X  ${counter}  =  ${number * counter} `;
//     document.getElementById("myTable").appendChild(newLi);
//   }
// }

//                                          test2

/*
var newLi = document.createElement("li");
var newContent = document.createTextNode("test");
newLi.appendChild(newContent);

document.getElementById("myTable").append(newLi, newLi);
*/
/*
var text = ["text1", "tex2", "text3", "text4"];
for (var i = 0; i < text.length; i += 1) {
  var li = document.createElement("li");
  li.className = "finalBlock";
  li.innerHTML = text[i];
  //   document.body.appendChild(li);
  document.getElementById("myTable").appendChild(li);
}
*/
