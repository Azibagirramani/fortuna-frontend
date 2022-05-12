import { useFormik } from "formik";

import BaseInput from "../../components/forms/BaseInput";
import BaseButton from "../../components/forms/BaseButton";

import PublicLayout from "../../layouts/public/index";
function Login(){

    const formik = useFormik({
        initialValues:{
            email:"",
            password: ""
        },
        onSubmit(values){
            console.log(values)
        }
    })

    return (
        <div className="flex w-full h-screen overflow-y-hidden">
            <div className="flex-auto w-7/12 flex flex-col justify-center items-center">
                <div className="w-fit">
                    <h1 className="text-2xl font-extrabold">Welcome back, login</h1>
                    <p className="mt-2">Lorem ipsum dolor sit amet ipsum dolor sit amet .</p>
                    {/* <form className="flex flex-col mt-8" onSubmit={formik.handleSubmit}>
                        <div className="">
                            <BaseInput type="email" name="email" label="Email" />
                        </div>
                        <div className="my-5">
                            <BaseInput preIcon="submit" type="password" name="password" label="Password"/>
                        </div>
                        <BaseButton type="submit">
                            <span className="text-white">Login</span>
                        </BaseButton>
                    </form> */}
                </div>
            </div>
            <div className="flex-auto w-1/3 bg-primary"></div>
        </div>
    )
}

Login.getLayout = PublicLayout

export default Login