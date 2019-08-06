function intAreaCalc() { // Calculate area
    var intWidth = parseInt(document.getElementById("width").value);
    var intHeight = parseInt(document.getElementById("height").value);
    var blnValidation = true; //Test for <0 and not more than 2x
    var intArea;
    // Validate that the numbers are greater than 0 and not more than
    // 2 times the value of eachother
    if (intWidth <= 0) {
        alert("Please Enter Numbers greater than 0 for the width");
        blnValidation = false;

        if (intHeight <= 0) {
            alert("Please Enter Numbers greater than 0 for the Height");
            blnValidation = false;

            if (intWidth > intHeight * 2) {
                alert("The Width Cannot be more than 2 times the height");
                blnValidation = false;

                if (intHeight > (intWidth * 2)) {
                    alert("The Height Cannot be more than 2 times the Width");
                    blnValidation = false;
                }
            }
        }
    }

    //Run area calculation if validation is true
    if (blnValidation == true) {
        intArea = intWidth * intHeight / 2;
        document.getElementById("area").value = intArea;
    }
}



function minimumCalc() { // Find minimum Number

    //Gather inputs
    var Num1 = Number.parseFloat(document.getElementById("Number1").value);
    var Num2 = Number.parseFloat(document.getElementById("Number2").value);
    var Num3 = Number.parseFloat(document.getElementById("Number3").value);
    var Num4 = Number.parseFloat(document.getElementById("Number4").value);
    var Num5 = Number.parseFloat(document.getElementById("Number5").value);
    var minimumNum = 10000000000;

    //Check if numeric
    if (isNumber(Num1) == true) {
        if (isNumber(Num2) == true) {
            if (isNumber(Num3) == true) {
                if (isNumber(Num4) == true) {
                    if (isNumber(Num5) == true) {


                        //find minimum
                        if (Num1 < minimumNum) {
                            minimumNum = Num1;
                        }

                        if (Num2 < minimumNum) {
                            minimumNum = Num2;
                        }

                        if (Num3 < minimumNum) {
                            minimumNum = Num3;
                        }

                        if (Num4 < minimumNum) {
                            minimumNum = Num4;
                        }

                        if (Num5 < minimumNum) {
                            minimumNum = Num5;
                        }

                        //Non Numeric error alerts
                    } else {
                        alert("Please Enter only Numbers for the Fifth Number")
                    }
                } else {
                    alert("Please Enter only Numbers for the Fourth Number")
                }
            } else {
                alert("Please Enter only Numbers for the Third Number")
            }
        } else {
            alert("Please Enter only Numbers for the Second Number")
        }
    } else {
        alert("Please Enter only Numbers for the First Number")
    }

    //Set output for minimum
    document.getElementById("miniDisplay").value = minimumNum;
}

function isNumber(num) {
    return !Number.isNaN(num) && Number.isFinite(num);
}

//Calculate the sq root 
function CalcRoot() {
    //Get Number
    var numIn = Number.parseInt(document.getElementById("rootInput").value);

    //Validate num is over 100
    if (numIn > 99) {

        for (var i = 0; i < 6; i++) {
            //Get square root
            var numOut = Math.sqrt(numIn);
            alert("The square root of " + numIn + " is " + numOut)
            var numIn = Number.parseInt(numOut);
        }
    } else 
    alert("Please Enter a number 100 or higher")
}

function maximumCalc() {
    //Gather inputs
    var Num1 = Number.parseFloat(document.getElementById("Number1").value);
    var Num2 = Number.parseFloat(document.getElementById("Number2").value);
    var Num3 = Number.parseFloat(document.getElementById("Number3").value);
    var Num4 = Number.parseFloat(document.getElementById("Number4").value);
    var Num5 = Number.parseFloat(document.getElementById("Number5").value);
    var maximumNum = .000001;
    if (isNumber(Num1) == true) {
        if (isNumber(Num2) == true) {
            if (isNumber(Num3) == true) {
                if (isNumber(Num4) == true) {
                    if (isNumber(Num5) == true) {


                        //find minimum
                        if (Num1 > maximumNum) {
                            maximumNum = Num1;
                        }

                        if (Num2 > maximumNum) {
                            maximumNum = Num2;
                        }

                        if (Num3 > maximumNum) {
                            maximumNum = Num3;
                        }

                        if (Num4 > maximumNum) {
                            maximumNum = Num4;
                        }

                        if (Num5 > maximumNum) {
                            maximumNum = Num5;
                        }

                        //Non Numeric error alerts
                    } else {
                        alert("Please Enter only Numbers for the Fifth Number")
                    }
                } else {
                    alert("Please Enter only Numbers for the Fourth Number")
                }
            } else {
                alert("Please Enter only Numbers for the Third Number")
            }
        } else {
            alert("Please Enter only Numbers for the Second Number")
        }
    } else {
        alert("Please Enter only Numbers for the First Number")
    }

    //Set output for minimum
    document.getElementById("maxDisplay").value = maximumNum;

}
