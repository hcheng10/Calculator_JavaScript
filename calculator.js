alert("Hello! This is a JavaScript calculator");

// this function will append clicked button's value into the left text field
function addNumber_1() {
    let text = document.getElementById("first_value");
    text.value += this.value;
}

// this function will append clicked button's value into the right text field
function addNumber_2() {
    let text = document.getElementById("second_value");
    text.value += this.value;
}

// this function will fetch all the input values and selected operators then computing the calculation
function compute() {
    let num1 = document.getElementById("first_value").value;
    let num2 = document.getElementById("second_value").value;

    // we should not compute anything if either num1 or num2 are empty
    if (num1 === "" || num2 === "") {
        return;
    }

    // read which operator that user selected (default is +)
    let operator = document.getElementsByName("operator");

    for (const o of operator) {
        if (o.checked) {
            operator = o.value;
        }
    }

    let ans = ""; // result of calculation
    switch(operator){ 
        case "-": 
            ans = num1 - num2;
            break;
        case "*": 
            ans = num1 * num2; 
            break;
        case "/": 
            ans = num1 / num2;
            break; 
        default: 
            ans = num1*1 + num2*1;
    }

    document.getElementById("result").innerHTML = "Result is: " + ans;
}

// function that could disable/enable the compute button
function my_switch() {
    let checker = document.getElementById("compute").disabled;
    if (!checker) {
        document.getElementById("compute").disabled = true;
    } else {
        document.getElementById("compute").disabled = false;
    }
}

let buttons = document.getElementsByClassName("button");
for (let i=0; i<buttons.length; ++i){
    if (i < 12) {
        buttons[i].addEventListener("click", addNumber_1);
    } else {
        buttons[i].addEventListener("click", addNumber_2);
    } 
}

document.getElementById("compute").addEventListener("click", compute);
document.getElementById("Disable_Enabl").addEventListener("click", my_switch);
