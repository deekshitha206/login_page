function validations(){
    var password = document.myform.password.value;
    var email=document.myform.email.value;
    if(password===""){
        alert("password should not be empty")
        return false;
    }
    
    
    else if(password.length<6){
        alert("Password must be atleast 6 characters long");
        return false;
    }
    else if(email===""){
        alert("Email cannot be blank!!")
        return false;
    }
    else{
        return true;
    }
}