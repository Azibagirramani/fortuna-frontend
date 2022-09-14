import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";
import { MdDashboard } from "react-icons/md";

// custom store hook
import { useStore } from "@/store/index";

// component imports
import BaseInput from "@/components/forms/BaseInput";
import BaseAlert from "@/components/notifications/BaseAlert";
import BaseButton from "@/components/forms/BaseButton";
import BaseCheckBox from "@/components/forms/BaseCheckBox";
import PublicLayout from "@/layouts/public/index";
import Feature from "@/components/Features";

import { LoginValidation } from "@/utilities/validations/validationSchemas";

import { Auth } from "@/core/index";

const Login = () => {
  const router = useRouter();
  const [IsLoading, setLoading] = useState(false);
  const { dispatch } = useStore();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidation,
    async onSubmit(values) {
      setLoading(true);

      try {
        const data = await Auth.login(values);
        dispatch({ type: "SET_USER", payload: data });
        BaseAlert({
          type: "success",
          message: "Login Successful",
        });
        router.push("beta/dashboard");
      } catch (error) {
        BaseAlert({
          type: "error",
          message: "Email or Password is incorrect",
        });

        console.log(error);
      } finally {
        setLoading(false);
      }
    },
  });

  const loginFormConfig = [
    {
      component: BaseInput,
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
      value: formik.values.email,
      error: formik.touched.email ? formik.errors.email : undefined,
    },
    {
      component: BaseInput,
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
      value: formik.values.password,
      error: formik.touched.password ? formik.errors.password : undefined,
    },
  ];

  const featuresListing = [
    {
      Icon: MdDashboard,
      title: "Manage and monitor",
      description:
        "Manage and monitor your donations and donations requests. You can also see the donations and donations requests of other users.",
    },
    {
      Icon: MdDashboard,
      title: "Candidate module",
      description:
        "Create and manage candidates for your family or organization.",
    },
    {
      Icon: MdDashboard,
      title: "Schedule meetings",
      description: "Schedule meetings with donors and volunteers.",
    },
  ];

  return (
    <>
      <Head>
        <title>Fortuna | Login</title>
      </Head>

      <div className="flex flex-col items-center shadow-lg mx-2 md:mx-20 xl:mx-72 mt-24 border py-10">
        <div className="md:w-3/4 lg:w-[40%] w-[90%]">
          <h1 className="text-lg md:text-1xl lg:text-2xl text-center font-extrabold">
            Get started with our Beta version
          </h1>
          <p className="text-center text-sm md:text-base mt-2">
            Please login to access your account
          </p>
          <form
            className="flex flex-col mt-8"
            onSubmit={formik.handleSubmit}
            autoComplete="false"
          >
            {loginFormConfig.map((option, index) => {
              return (
                <div className="mb-5" key={index}>
                  <option.component
                    {...option}
                    disabled={IsLoading}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              );
            })}
            <div className="flex justify-between items-center mt-5">
              <BaseCheckBox />
            </div>

            <div className="w-full mt-5">
              <BaseButton
                loading={IsLoading}
                disabled={IsLoading}
                type="submit"
                exClass="bg-primary text-[white] md:w-full"
              >
                Continue
              </BaseButton>
            </div>
          </form>
        </div>

        <div className="mt-10 mx-5">
          <h1 className="text-2xl text-center">Available features</h1>
          <p className="text-center mt-5 text-sm md:text-base">
            We are working tirelessly to make all features available to the
            public. Feel free to{" "}
            <span className="text-white bg-blue-primary px-2 rounded capitalize cursor-pointer">
              get in touch
            </span>{" "}
            for feedbacks
          </p>

          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuresListing.map((items) => {
                return <Feature {...items} key={items.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Login.getLayout = PublicLayout;
export default Login;
