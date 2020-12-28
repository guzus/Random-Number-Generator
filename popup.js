let generate = document.getElementById('generate');

// var explanation = document.getElementById('explanation');
// explanation.innerText = "Generate Random among " + from + "~" + to;

generate.onclick = function(element) {
    var number = document.getElementById('number');
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    number.innerText = Math.floor(
        getRandom(parseInt(from,10), parseInt(to,10))
    );
};

function getRandom(min, max) {
    return Math.random()*(max-min+1) + min;
}