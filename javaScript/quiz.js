const op = ["+", "-", "*"];
const quest = document.getElementById("quest");
const ansBox = document.getElementById("ansBox");
const para = document.getElementById("scoreText");
const score = document.getElementById("score");
var ans = eval(quest.innerHTML);
var redC = "#ED6A5A";
newQuest();
function checkKey(event) {
  if (event.key == "Enter") {
    if (parseInt(ansBox.value) == ans) {
      quest.style.color = "aliceblue";
      ansBox.value = "";
      newQuest();
      score.innerHTML = parseInt(score.innerHTML) + 1;
      para.style.color = "#00bb00";
      setTimeout(setColor, 1000, para, "white");
    } else {
      quest.style.color = redC;
      setTimeout(setColor, 700, quest, "white");
      quest.style.animation = "error 0.1s";
      setTimeout(remAnimation, 500, quest);
    }
  }
}
function newQuest() {
  let q =
    rand(200).toString() +
    " " +
    op[rand(op.length)] +
    " " +
    rand(200).toString();
  quest.innerHTML = q;
  ans = eval(q);
}
function rand(a, b = 0) {
  let res = b;
  res += Math.floor(Math.random() * (a - b));
  return res;
}
function setColor(obj, color) {
  obj.style.color = color;
}
function remAnimation(obj) {
  obj.style.animation = "none";
}
function reset() {
  score.innerHTML = "0";
  newQuest();
  ansBox.value = "";
}
