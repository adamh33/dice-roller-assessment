let buttonRoll = document.querySelector("#rollButton");
let rollInput = document.querySelector("#rollInput");
let rollTotal = document.querySelector("#rollTotal");
let show = document.querySelector("#showRolls");
let allRolls = document.querySelector("#allRolls");
let reset = document.querySelector("#reset");
let sides = document.querySelector("#sides");
let dieRolls = [];
let count = 0;

buttonRoll.addEventListener("click", function () {
  while (count < rollInput.value) {
    num = Math.floor(Math.random() * sides.value) + 1;
    dieRolls.push(num);
    console.log(dieRolls);
    count++;

    sum = 0;
    sum = dieRolls.reduce((a, b) => {
      return a + b;
    });
    rollTotal.innerHTML = sum;
  }

  show.addEventListener("click", function () {
    let x = 0;
    while (x < rollInput.value) {
      let rollList = "<li class=dice>" + dieRolls[x] + "</li>";
      allRolls.innerHTML += rollList;
      x++;
    }
  });
});

reset.addEventListener("click", function () {
  dieRolls = [];
  sides.value = "";
  rollInput.value = "";
  rollTotal.innerHTML = 0;
  allRolls.innerHTML = "";
});
