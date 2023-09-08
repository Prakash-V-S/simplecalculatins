var btn = document.getElementById("start");

var num1, num2;

num1 = "";
num2 = "";
o = "";



function start(){

while (true) {
    num1 = prompt("Enter the first value(in numeric)");
    if (num1 === null || !isNaN(num1)) {
        break;
    }
}
while (true) {
    o = prompt("Enter the operation(+,-,*,/)");
    if (o === null || o === "*" || o === "+" || o === "-" || o === "/") {
        break;
    }
}

while (true) {
    num2 = prompt("Enter the second value(in numeric)");
    if (num2 === null || !isNaN(num2)) {
        break;
    }
}

if (num1 === "" || num2 == "" || o == "") {
    alert("Please enter all operands and an operator.");
}
switch (o) {
    case "+": result = parseFloat(num1) + parseFloat(num2);break;
    case "-": result = parseFloat(num1) - parseFloat(num2);break;
    case "*": result = parseFloat(num1) * parseFloat(num2);break;
    case "/": {
        if (num2 !== 0) {
            result = parseFloat(num1) / parseFloat(num2);
        } else {
            alert("Division by zero is not allowed.");
        }
        break;
    }
}
document.getElementById("result").innerHTML = " Result: " + result;



}

btn.onclick=start;
