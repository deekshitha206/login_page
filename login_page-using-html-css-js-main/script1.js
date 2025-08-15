function validations(){
    var name = document.myform.name.value;
    var password = document.myform.password.value;
    var email=document.myform.email.value;
    var rename = /^[a-zA-Z]*$/;
    if ( name=== ""){
        alert("name cannot be blank");
        return false;
    }
    else  if(password===""){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
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
    else if (!rename.test(name)) {
        alert("Name should not contain numbers");
    return false;
    }
    else{
        return true;
    }
}