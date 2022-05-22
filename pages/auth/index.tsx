import { useFormik } from "formik";

import BaseInput from "../../components/forms/BaseInput";
import BaseButton from "../../components/forms/BaseButton";

import PublicLayout from "../../layouts/public/index";

import { LoginValidation } from "../../utilities/validations";

function Login(){

    interface LoginInterface {
        email: string
        password: string
    }
    const formik = useFormik({
        initialValues: {
            email:"",
            password: ""
        },
        validationSchema: LoginValidation,
        onSubmit(values){
            console.log(values)
        }
    })

    return (
        <div className="flex w-full xl:h-[65vh] lg:h-[65vh]  overflow-y-hidden">
            <div className="flex-auto hidden w-1/3 lg:flex xl:flex bg-primary flex-col justify-center items-center">
            </div>
            <div className="flex-auto w-7/12 flex flex-col items-center justify-center mt-5">
            <div className="w-fit">
                    <h1 className="text-2xl font-extrabold text-center md:text-left">Welcome back, login</h1>
                    <p className="mt-2 text-center md:text-left">Lorem ipsum dolor sit amet ipsum dolor sit amet .</p>
                    <form className="flex flex-col mt-8" onSubmit={formik.handleSubmit} autoComplete="false">
                        
                        <div>
                            <BaseInput type="email" name="email" label="Email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.email ? formik.errors.email : undefined}/>
                        </div>
                        <div className="my-5">
                            <BaseInput type="password" name="password" label="Password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} error={ formik.touched.password ? formik.errors.password : undefined }/>
                        </div>
                        <BaseButton type="submit">
                            <span className="text-[white]">Login</span>
                        </BaseButton>
                    </form>
                </div>
            </div>
        </div>
    )
}

Login.getLayout = PublicLayout

export default Login