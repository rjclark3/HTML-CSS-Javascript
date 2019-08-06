function isNumber(num) {
    return !Number.isNaN(num) && Number.isFinite(num);
}

function Validation() {
    var Num1 = Number.parseFloat(document.getElementById("value1").value);
    var Num2 = Number.parseFloat(document.getElementById("value2").value);
    //Check if Num1 and Num2 are Numeric
    if (isNumber(Num1) == true) {
        if (isNumber(Num2) == true) {
            return true;
        } else {
            alert("Please Enter Numbers only for the Second number");
            return false;
        }
    } else {
        alert("Please Enter Numbers only for the first number");
        return false;
    }
}

function Calculate() { //Function to run calculation

    var Num1 = Number.parseFloat(document.getElementById("value1").value);
    var Num2 = Number.parseFloat(document.getElementById("value2").value);
    var Total;
    if (Validation() == true) { //Run Validation

        //check operation and get total accordingly
        if (document.getElementById("Operation").value == "+") {
            Total = Num1 + Num2;
        }
        if (document.getElementById("Operation").value == "-") {
            Total = Num1 - Num2;
        }
        if (document.getElementById("Operation").value == "*") {
            Total = Num1 * Num2;
        }
        if (document.getElementById("Operation").value == "/") {
            Total = Num1 / Num2;
        }
        //Output total
        document.getElementById("Total").value = Total;
    }
}

function clears() { //Clear Function
    document.getElementById("value1").value = "";
    document.getElementById("value2").value = "";
    document.getElementById("Total").value = "";
}

