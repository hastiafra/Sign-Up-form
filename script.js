let terms = document.getElementById("terms");

let pass = document.getElementById("pass");
let conPass = document.getElementById("conPass");
let error = document.getElementsByClassName("error")[0]; 

error.style.display="none";




function confirmation(event){
event.preventDefault();
let passFlag = true;

if (pass.value.length < 10 || pass.value!==conPass.value){

    error.style.display="block"
    error.style.height = "100px";
    error.style.margin = "20px";
    error.innerHTML="Your Password is too short, please provide a password at least 10 character long or your password doesn't match "
    passFlag = false;

}
else{
    passFlag = true;
    error.style.display="none";

 }


let flag = true;

if(terms.checked === false){
window.alert("Please agree to the terms before submitting");
flag = false;
}

else{
    flag = true;
}

if(flag === true && passFlag===true ){ 
window.alert("Success!");
document.querySelector("form").reset();

pass.style.border="2px solid rgb(172, 172, 172)"

    
conPass.style.border="2px solid rgb(172, 172, 172)";
};
}



const focus = function correction() {
    
    pass.style.outlineColor = "4px solid rgb(60, 0, 224)";

    if(pass.length < 10 || pass!==conPass ){
   

    pass.style.border="3px solid rgb(224, 0, 101)"

    
    conPass.style.border="3px solid rgb(224, 0, 101)";

    return false;
    }

    else if(pass.length > 10 && pass!==conPass ){ 
pass.style.border="3px solid rgb(224, 0, 101)"
    }
    


    

}





