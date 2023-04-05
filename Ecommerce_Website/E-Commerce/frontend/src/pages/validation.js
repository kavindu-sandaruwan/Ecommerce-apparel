
export default function validation(values){
    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(values.name === ""){
        errors.name = "name is required"
    }

    if(values.email === ""){
        errors.email = "email is required"
    }

    if(email_pattern.test(values.email)){
        errors.name = "email is not correct"
    }

    if(values.password === ""){
        errors.password = "password is required"
    }

    if(password_pattern.test(values.password)){
        errors.password = "email is not correct"
    }

    return errors;
}


