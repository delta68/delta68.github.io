const hrs = document.getElementById("hrs");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");
const strt = document.getElementById("strt");
const inps = document.getElementsByClassName("timerInp");
const aud = document.getElementById("timeUp");

hrs.value = "00";
mins.value = "00";
secs.value = "00";
var x = false;
let setTime = "0";
function start() {
  let d = timeSec();
  if (d <= 10 && d > 0) secs.style.color = "red";
  if (d == 0) {
    alert("Set the timer first!");
  } else {
    strt.disabled = true;
    setTime = `${hrs.value} ${mins.value} ${secs.value}`;
    x = setInterval(function () {
      d -= 1;
      if (d <= 10) {
        secs.style.color = "red";
      }
      if (parseInt(secs.value) == 0) {
        if (parseInt(mins.value) == 0) {
          if (parseInt(hrs.value) == 0) {
            aud.play();
            if (confirm("Time Up!!")) {
            }
            secs.style.color = "black";
            secs.value = "00";
            strt.disabled = false;
            aud.pause();
            aud.load();
            console.log("after");
            clearInterval(x);
          } else if (parseInt(hrs.value) > 0) {
            hrs.value = parseInt(hrs.value) - 1;
            if (hrs.value == 0) hrs.value = "00";
            mins.value = 59;
            secs.value = 59;
          } else {
            alert("Error!!");
            clearInterval(x);
          }
        } else if (parseInt(mins.value) > 0) {
          mins.value = parseInt(mins.value) - 1;
          if (mins.value == 0) mins.value = "00";
          secs.value = 59;
        } else {
          alert("Error!!");
          clearInterval(x);
        }
      } else if (parseInt(secs.value) > 0) {
        secs.value = parseInt(secs.value) - 1;
        if (secs.value == 0) secs.value = "00";
      } else {
        alert("Error!!");
        clearInterval(x);
      }
    }, 1000);
  }
}
function timeSec() {
  return (
    parseInt(hrs.value) * 3600 +
    parseInt(mins.value) * 60 +
    parseInt(secs.value)
  );
}
function reset() {
  if (strt.disabled) {
    clearInterval(x);
    secs.style.color = "black";
    for (let i of inps) {
      i.value = "00";
    }
    strt.disabled = false;
  }
}
function restart() {
  if (strt.disabled) {
    clearInterval(x);
    let arr = setTime.split(" ");
    secs.style.color = "black";
    strt.disabled = false;
    for (let i = 0; i < arr.length; i++) {
      inps[i].value = arr[i];
    }
  }
  start();
}
