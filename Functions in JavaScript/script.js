//Defining the Function
function showAlert() {
    //Function Code
    alert("You have clicked!");
}

//Function Paramters
function add(a, b) {
    document.write(a + b);
}

//Optional paramter & return keyword
function square(num = 5) {
    return num * num;
}

var square_result = square();
document.getElementById("square_result").innerHTML = square_result;

document.getElementById("square_result_with_para").innerHTML = square(15);

//Global variable
var a = 300;
//Function as variable
var calculate = function () {
    //result is a local variable
    var result = a + 100 * 2 - 56;
    document.write(result);
}
//Scope of a Function 
document.write(result);