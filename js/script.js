function keliling() {
    num1 = document.getElementById("firstNumber").value;
    result = document.getElementById("result").innerHTML = ("keliling = "+ "\n"+ num1 * 4); 
}

function luas() {
    num1 = document.getElementById("firstNumber").value;
    result = document.getElementById("result").innerHTML = ("luas = "+  "\n" + num1 * num1); 
}

function myFunction() {
    var x = document.getElementById("mySelect").value;
    if (x == "luas") {
        document.querySelector(".button1").setAttribute("onclick", "luas()");
    } else if (x == "keliling") {
        document.querySelector(".button1").setAttribute("onclick", "keliling()");
    }
}