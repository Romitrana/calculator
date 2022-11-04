const final_resultE1 = document.querySelector(".final_result");
const clearE1 = document.querySelector(".clear_input");
const deleteE1 = document.querySelector(".delete");
const answerE1 = document.querySelector(".answer");
function calc(e) {
  change();
  final_resultE1.textContent += e.value;
}

clearE1.addEventListener("click", function () {
  change();
  final_resultE1.textContent = null;
});

// final exicution

function calculate_final() {
  let answer = eval(final_resultE1.textContent);
  final_resultE1.textContent = answer;
}

deleteE1.addEventListener("click", function () {
  change();
  final_resultE1.textContent = final_resultE1.textContent.slice(0, -1);
});

function change() {
  if (final_resultE1.textContent.length < 14) {
    answerE1.style.fontSize = "50px";
  } else {
    answerE1.style.fontSize = "30px";
  }
}
