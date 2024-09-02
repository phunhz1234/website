window.onload = init;

function init(){
    document.getElementById("house").onclick=houseDelivery;
    document.getElementById("office").onclick=officeDelivery;
    document.getElementById("saveAdd1").onclick=popUpForm;
    document.getElementById("saveAdd2").onclick=popUpForm;
    document.getElementById("signupbtn").onclick=matchingPsw;
}

function matchingPsw(){
    var password=document.getElementById("psw").value;
    var repeatPassword=document.getElementById("repeatPsw").value;

    if(password != repeatPassword){
        alert("Password didn't match, try again!");
        return false;
    }
}
function popUpForm(){
    document.getElementById("signUpForm").style.display="block";
    document.getElementById("deliveryAddress1").style.display="none";
    document.getElementById("deliveryAddress2").style.display="none";
    document.getElementById("prevIcon").style.display="block";
}

function houseDelivery(){
    document.getElementById("signUpForm").style.display="none";
    document.getElementById("deliveryAddress1").style.display="block";
    document.getElementById("deliveryAddress2").style.display="none";
}

function officeDelivery(){
    document.getElementById("signUpForm").style.display="none";
    document.getElementById("deliveryAddress1").style.display="none";
    document.getElementById("deliveryAddress2").style.display="block";
}