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
      value.style.color = "darkgreen";
    } else if (counter.contains("decrease")) {
      if (count > 0) {
        count--;
        value.style.color = "red";
      } else {
        count = 0;
        value.style.color = "azure";
      }
    } else if (counter.contains("reset")) {
      count = 0;
      value.style.color = "azure";
    }

    value.innerText = format(count);
  });
});

function format(counts) {
  return counts < 10 ? `0${counts}` : `${counts}`;
}
