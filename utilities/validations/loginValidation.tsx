import * as yup from "yup"; 

/// login validation rules with yup 
export const LoginValidation = new yup.ObjectSchema({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required")
})