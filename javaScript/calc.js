const inp = document.getElementById("inp");
const lab = document.getElementById("lab");
const adv = document.getElementById("adv");
const but_bin = document.getElementById("but_bin");
const but_hist = document.getElementById("but_hist");
inp.value = "";
lab.innerHTML = "N";
let operator = [];
let arr = new Array();
let a = null;
let res = 0;
let first = true;
function append(n) {
  if (n == ".") {
    if (inp.value.includes(".")) return;
  }
  if (first) {
    inp.value = n;
    first = false;
  } else if (inp.value.length != 0 || n != 0) {
    inp.value = inp.value + n;
  }
}
function back() {
  if (inp.value.length >= 1) inp.value = inp.value.slice(0, -1);
}
function op(operation) {
  operator.push(operation);
  if (operator[1] == null) {
    if (bin) a = parseInt(inp.value, 2);
    else a = parseFloat(inp.value);
  } else {
    if (bin) b = parseInt(inp.value, 2);
    else b = parseFloat(inp.value);
    switch (operator[0]) {
      case "a":
        res = a + b;
        break;
      case "s":
        res = a - b;
        break;
      case "m":
        res = a * b;
        break;
      case "d":
        res = a / b;
        break;
      case "p":
        res = Math.pow(a, b);
        break;
    }
    if (bin) inp.value = res.toString(2);
    else inp.value = res;
    a = res;
    operator.shift();
  }
  lab.innerHTML = operator[0];
  first = true;
}

function eq() {
  if (bin) b = parseInt(inp.value, 2);
  else b = parseFloat(inp.value);
  switch (operator[0]) {
    case "a":
      res = a + b;
      break;
    case "s":
      res = a - b;
      break;
    case "m":
      res = a * b;
      break;
    case "d":
      res = a / b;
      break;
    case "p":
      res = Math.pow(a, b);
  }
  if (bin) inp.value = res.toString(2);
  else inp.value = res;
  a = res;
  first = true;
  operator.shift();
  lab.innerHTML = "N";
}

function cl(z) {
  inp.value = "";
  switch (z) {
    case "ac":
      operator = [];
      res = 0;
      a = null;
      lab.innerHTML = "N";
      bin = false;
      adv_bool = false;
      but_bin.style.backgroundColor = "white";
      break;
  }
}
let adv_bool = false;
function disp_adv() {
  if (adv_bool) {
    adv.style.display = "none";
  } else {
    adv.style.display = "block";
  }
  adv_bool = !adv_bool;
}
let bin = false;
function binary() {
  if (!bin) {
    but_bin.style.backgroundColor = "#70abaf";
    but_bin.style.color = "#32292f";
  } else {
    but_bin.style.backgroundColor = "transparent";
    but_bin.style.color = "#70abaf";
    if (inp.value.length != 0) {
      inp.value = parseInt(inp.value, 2);
    }
  }
  bin = !bin;
}
let hist = false;
function history() {
  if (!hist) {
    but_hist.style.backgroundColor = "#70abaf";
    but_hist.style.color = "#32292f";
  } else {
    but_hist.style.backgroundColor = "transparent";
    but_hist.style.color = "#70abaf";
    if (inp.value.length != 0) {
      inp.value = parseInt(inp.value, 2);
    }
  }
  hist = !hist;
}
