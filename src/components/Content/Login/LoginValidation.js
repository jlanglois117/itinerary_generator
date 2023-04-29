function Validation(values) {
    let error = {}
    
    if(values.fname == "" || values.lname == "" || values.username == ""){
        error.password = "Please enter information"
    }
    else{
        error.fname = ""
        error.email = ""
        error.password = ""
        error.username = ""
        error.lname = ""
    }


    if(values.email == "" || values.password == "") {
        error.password = "Please enter information"
    }
    else{
        error.email = ""
        error.password = ""
    }


    return error;
}

export default Validation;