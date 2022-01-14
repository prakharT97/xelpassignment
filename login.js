var globalcount = 0;
var mean = 0;
var median;
let max=0;
let count = 0;

var emailArray = [];
var passArray = [];
var valarray = [];
const numoccurence = {};

function register() {

    var email = document.getElementById("e1").value;
    var password = document.getElementById("p1").value;
    var passwordRewrite = document.getElementById("rp1").value;

    if (email == "") {
        alert("Please enter email");
        return;
    }
    else if (password == "") {
        alert("Please enter password");
        return;
    }
    else if (passwordRewrite == "") {
        alert("Please enter password");
        return;
    }
    else if (password != passwordRewrite) {
        alert("Password doesnt match, please rewrite correctly");
        return;
    }
    else if (emailArray.indexOf(email) == -1) {
        emailArray.push(email);
        passArray.push(password);

        alert(email + "  Thank you for registration\nPlease login");

        document.getElementById("e1").value = "";
        document.getElementById("p1").value = "";
        document.getElementById("rp1").value = "";
    }
    else {
        alert(email + " is already registered");
        return;
    }
}
function login() {

    var email = document.getElementById("e2").value;
    var password = document.getElementById("p2").value;

    var i = emailArray.indexOf(email);

    if (emailArray.indexOf(email) == -1) {
        if (email == "") {
            alert("Please enter email");
            return;
        }
        alert("Email does not exist");
        return;
    }
    else if (passArray[i] != password) {
        if (password == "") {
            alert("Please enter password");
            return;
        }
        alert("Password does not match");
        return;
    }
    else {
        alert(email + " You are logged in\nYou will be redirected to next page to enter values");

        document.getElementById("e2").value = "";
        document.getElementById("p2").value = "";
        location.replace("Operations.html")
    }
    
}

function operation(){
    
    var values = parseInt(document.getElementById("val").value);
    if(values == "" || values == 0){
        alert("Please enter a number");
        return;
    }
    valarray.push(values);
    alert(JSON.stringify(valarray));
    globalcount++;
    if(globalcount==9){
        for(var i in valarray){
            mean+=valarray[i];
        }
        mean=mean/9;
        alert("Mean = "+mean);

        valarray.sort();
        alert("Median is = "+valarray[4]);

        for(var i in valarray){
            item = valarray[i];
            if(numoccurence[valarray[i]]){
            numoccurence[valarray[i]]++;
            }
            else{
                numoccurence[valarray[i]]=1;
            }

            if(count<numoccurence[item]){
                max=item;
                count=numoccurence[item];

            }
        }
        alert("Mode = "+max);
    }

}