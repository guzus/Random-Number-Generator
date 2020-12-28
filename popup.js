let generate = document.getElementById('generate');

generate.onclick = function(element) {
    // from, to default : 0~9
    var number = document.getElementById('number');
    var from = document.getElementById('from');
    var to = document.getElementById('to');
    number.innerText = Math.floor(from + Math.random()*(to-from+1));
};