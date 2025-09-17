let one = document.getElementById("one");
let two = document.getElementById("two");
let output = document.getElementById("output");

function doAdd() {
  let answer = Number(one.value) + Number(two.value);
  output.innerHTML = String(answer);
  if (answer < 0) {
    output.style.color = "red";
  }
  else {
    output.style.color = "black";
  }
}

function doSubtract() {
  let answer = Number(one.value) - Number(two.value)
  output.innerHTML = String(Number(one.value) - Number(two.value));
  if (answer < 0) {
    output.style.color = "red"
  }
  else {
    output.style.color = "black"
  }
}

function doMultiply() {
  let answer = Number(one.value) * Number(two.value)
  output.innerHTML = String(Number(one.value) * Number(two.value));
  if (answer < 0) {
    output.style.color = "red"
  }
  else {
    output.style.color = "black"
  }
}

function doDivide() {
  let answer = Number(one.value) / Number(two.value)
  output.innerHTML = String(Number(one.value) / Number(two.value));
  if (answer < 0) {
    output.style.color = "red"
  }
  output
}

function doPower() {
  let base = Number(one.value);
  let exponent = Number(two.value);
  let answer = 1;

  for (let i = 0; i < exponent; i++) {
    answer *= base;
  }
  output.innerHTML = String(answer);
  if (answer < 0) {
    output.style.color = "red"
  }
  else {
    output.style.color = "black"
  }
}

function doClear() {
  one.value = "";
  two.value = "";
  output.innerHTML = "";
}