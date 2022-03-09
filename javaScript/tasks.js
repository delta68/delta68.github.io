const table = document.getElementById("mainTable");
const title = document.getElementById("tskName");
const time = document.getElementById("tskTime");
const notes = document.getElementById("tskNotes");
const inps = document.getElementsByClassName("inp");
const butSave = document.getElementById("butSave");
var tasksT = document.getElementsByClassName("tsk");
var actInd = 0;
var ind = 1;
var len = "30px";
function save() {
  if (checkInps(inps)) {
    let res = `<tr class='tsk' id='tsk${ind}' onclick='act(this)'><td class='id'>${ind}</td>`;
    if (title.value.length > 13) {
      res += `<td class="taskTitle" style='padding: 12.5px 20px 0 20px'>${title.value}</td>`;
    } else res += `<td class="taskTitle">${title.value}</td>`;
    if (time.value.length > 8) {
      res += `<td style='padding: 12.5px 20px 0 20px' class="dueTime">${time.value}</td>`;
    } else res += `<td class="dueTime">${time.value}</td>`;
    if (notes.value.length > 24) {
      res += `<td class="notes" style='padding-top: 12.5px; padding-bottom: 0'><div class="marDiv">${notes.value}</div></td>`;
    } else
      res += `<td class="notes"><div class="marDiv">${notes.value}</div></td>`;
    res += "</tr>";
    ind++;
    table.innerHTML += res;
    table.scroll(0, table.scrollHeight);
    for (let i of inps) i.value = "";
  } else {
    butSave.style.animation = "error 0.1s";
    setTimeout(remAnimation, 100, butSave);
  }
}
function reset() {
  if (ind == 1) {
    alert("Enter a task first!");
  } else {
    if (confirm("Are you sure?")) {
      table.innerHTML = "<tr><th>Task</th><th>Due Time</th><th>Notes</th></tr>";
      for (let i of inps) i.value = "";
      ind = 1;
      actInd = 0;
    }
  }
}
function checkInps(objs) {
  for (let i of objs) {
    if (i.value == "") return false;
  }
  return true;
}
function remAnimation(obj) {
  obj.style.animation = "none";
}
function del() {
  let obj = document.getElementById(`tsk${actInd}`);
  let indB = actInd;
  if (actInd != 0) {
    obj.remove();
    let i = -1;
    for (let it of tasksT) {
      i++;
      if (i >= indB - 1 && i < ind - 1) {
        it.firstChild.innerHTML = i + 1;
        it.id = `tsk${i + 1}`;
      }
    }
    ind--;
    actInd = 0;
  } else alert("Select something to delete first!");
}
function act(obj) {
  if (`tsk${actInd}` == obj.id) {
    console.log("test");
    if (obj.style.backgroundColor == "black") {
      obj.style.background = "white";
      obj.style.color = "black";
    } else {
      obj.style.backgroundColor = "black";
      obj.style.color = "white";
      actInd = 0;
    }
    return;
  }
  if (actInd != 0) {
    document.getElementById(`tsk${actInd}`).style.background = "inherit";
    document.getElementById(`tsk${actInd}`).style.color = "inherit";
  }
  actInd = obj.id;
  actInd = actInd.slice(3, 5);
  obj.style.background = "white";
  obj.style.color = "black";
}
