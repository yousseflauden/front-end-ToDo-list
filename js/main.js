console.log("youssef0");


var arr = [];

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "" || x == null) {
        alert("Name must be filled out");
        return true;
    }
    arr.push(x);
    var pval = "";
    for (i = 0; i< arr.length; i++){
        pval = pval + arr[i]
    }
    document.getElementById('typing').innerHTML = pval;
}


function validateDate() {
    var i = document.forms["myDate"]["fDate"].value;
    if (i == new Date()) {
        alert("Date must be filled out");
        return true;
    }
}