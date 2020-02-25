function Point(x, y) {
  this.x = Number(x);
  this.y = Number(y);
}

function distance(p1, p2) {
  console.log(p1);
  console.log(p2);
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

function calculate() {
  let inputs = document.getElementsByTagName("input");
  console.log(inputs);
  let answer = distance(
    new Point(inputs[0].value, inputs[1].value),
    new Point(inputs[2].value, inputs[3].value)
  );
  document.getElementById("distance").innerHTML = "Avstånd: " + answer;
}

let btn = document.getElementById("calculator");
btn.addEventListener("click", calculate);
