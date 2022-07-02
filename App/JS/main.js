//initializing the count to 0
let count = 0;

//variables creations
const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

//selected all the buttons and will loop through each to appl an event

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const counter = e.currentTarget.classList;
    if (counter.contains("increase")) {
      count++;
    } else if (counter.contains("decrease")) {
      count--;
    } else if (counter.contains("reset")) {
      count = 0;
    }

    if (count < 0) {
      value.style.color = "red";
    } else if (count > 0) {
      value.style.color = "darkgreen";
    } else {
      value.style.color = "azure";
    }

    value.innerText = count;
  });
});
