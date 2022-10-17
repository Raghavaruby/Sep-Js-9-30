function display() {
    if(Name =="" && pasword ==""){
        document.getElementById("button").disabled = true;
    }
    else if(Name !=="" && password ==""){
        document.getElementById("button").disabled = true;
    }   
    else if(Name !=="" && password !==""){
        document.getElementById("button").disabled = false;
    }

    
}