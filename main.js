var a, b, c;

a = prompt("Input first number: ", "");
b = prompt("Input second number: ", "");
c = prompt("Input third number: ", "");

var inputs = [a, b, c];

inputs.sort(function(a, b) {
    return a - b;
});

alert(inputs);