const validation = (values) => {
    console.log(values);
    let errors = {};
    if (!values.fullname) {
        console.log("name");
        errors.fullname = "Name is required";
    }
    if (!values.email) {
        console.log("email");
        errors.email = "email is required";
    }
    if(! /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(values.email)){
        console.log("email1");
        errors.email = "email is invalid";
    }
    if(!values.password) {
        console.log("password");
        errors.password = "Password is required!";
    } else if (values.password < 4) {
        console.log("password1");
        errors.password = "Password must not be less than 4";
    }

    return errors;
}

export default validation;