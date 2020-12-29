let generate = document.getElementById('generate');
let number = document.getElementById('number');
let from = document.getElementById('from');
let to = document.getElementById('to');

// var explanation = document.getElementById('explanation');
// explanation.innerText = "Generate Random among " + from + "~" + to;

generate.onclick = function(element) {
    number.innerText = Math.floor(
        getRandom(parseInt(from.value,10), parseInt(to.value,10))
    );
};

to.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      generate.click();
    }
  });

function getRandom(min, max) {
    return Math.random()*(max-min+1) + min;
}