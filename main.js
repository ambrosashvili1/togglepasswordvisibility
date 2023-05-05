
var x = document.getElementById("forPassword");
var xy = document.getElementById("maimuni").classList;

function myFoo() {
    if(x.type === "password"){
        x.type = "text";
    }else{
        x.type = "password"
    }
    xy.toggle("for-red-monkey");
}