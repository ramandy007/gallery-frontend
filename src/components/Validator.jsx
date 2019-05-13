import Validator from "validator";


export const validateRegisterInput = (data) => {


    let errors ={};

    data.name=!Validator.isEmpty(data.name,ignore_whitespace=true)?data.name :"";
    data.email=!Validator.isEmpty(data.email,ignore_whitespace=true)?data.email :"" ;
    data.password=!Validator.isEmpty(data.password,ignore_whitespace=true)?data.password :"" ;
    data.password1=!Validator.isEmpty(data.password1,ignore_whitespace=true)?data.password1 :"" ;

    if (Validator.isEmpty(data.name)){
        errors.name = "Name field is required";
``    }

    if(Validator.isEmpty(data.email)){
        errors.email = "Email field is required";

    } else if (!Validator.isEmail(data.email)){
        errors.email ="Email is invalid";

    }

    if(Validator.isEmpty(data.password)){
        errors.password = "Password field is required";
    }

    if(Validator.isEmpty(data.password1)){
        errors.password1 = "Confirm Password field is required";
    }

    if(!Validator.equals(data.password,data.password1)){
        errors.password1 = "Passwords must match";
    }

    return{
        errors,
        isValid: isEmpty(errors)
    };


};

export  const validateLoginInput=(data)=>{
    let errors={};
    data.email = !Validator.isEmpty(data.email)?data.email:"";
    data.password = !Validator.isEmpty(data.password)?data.password:"";


    if (Validator.isEmpty(data.email)){
        errors.email="Email field is required";
    }else if (!validator.isEmail(data.email)){
        errors.email="Email is invalid!";
    }

    if(Validator.isEmpty(data.password)){
        errors.password="Password field is required";
    }

    return{
        errors,
        isValid:isEmpty(errors)
    };


};

