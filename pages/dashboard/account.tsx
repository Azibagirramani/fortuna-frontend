import React, { Fragment } from "react";

import { useFormik } from "formik";
import BaseAlert from "@/components/notifications/BaseAlert";

import PrivateLayout from "@/layouts/private/PrivateDashboardLayout";

import BaseInput from "@/components/forms/BaseInput";
import BaseButton from "@/components/forms/BaseButton";

import { post } from "@/core/firebase/methods/storage";

import { ProfileValidation } from "@/utilities/validations/validationSchemas";

import type { ProfleType } from "@/core/types";

const Account = () => {
  const profile = {
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  } as ProfleType;

  const formik = useFormik({
    initialValues: profile,
    validationSchema: ProfileValidation,
    async onSubmit(values) {
      console.log(values);
      try {
        await post(`profile/H4doVsPWgFZZ3AzkGsjnS7TAfTB2`, values);
        BaseAlert({
          type: "success",
          message: "Profile Updated",
          autoClose: 10000,
        });
      } catch (error) {
        console.log(error);
        BaseAlert({
          type: "error",
          message: "Error",
        });
      }
    },
  });

  const formOptions = [
    {
      title: "Personal Information",
      fields: [
        {
          component: BaseInput,
          label: "First Name",
          name: "firstName",
          type: "text",
          placeholder: "First Name",
          value: formik.values.firstName,
          error: formik.touched.firstName ? formik.errors.firstName : undefined,
        },
        {
          component: BaseInput,
          label: "Last Name",
          name: "lastName",
          type: "text",
          placeholder: "Enter last name",
          value: formik.values.lastName,
          error: formik.touched.lastName ? formik.errors.lastName : undefined,
        },
        {
          component: BaseInput,
          label: "Phone",
          name: "phone",
          type: "text",
          placeholder: "Enter Phone number",
          value: formik.values.phone,
          error: formik.touched.phone ? formik.errors.phone : undefined,
        },
      ],
    },
    {
      title: "Location Information",
      fields: [
        {
          component: BaseInput,
          label: "Address",
          name: "address",
          type: "text",
          placeholder: "Enter address",
          value: formik.values.address,
          error: formik.touched.address ? formik.errors.address : undefined,
        },
        {
          component: BaseInput,
          label: "City",
          name: "city",
          type: "text",
          placeholder: "Enter city",
          // data: states,
          value: formik.values.city,
          error: formik.touched.city ? formik.errors.city : undefined,
        },
        {
          component: BaseInput,
          label: "State",
          name: "state",
          type: "text",
          // data: states,
          placeholder: "Enter state",
          value: formik.values.state,
          error: formik.touched.state ? formik.errors.state : undefined,
        },
        {
          component: BaseInput,
          label: "Zip",
          name: "zip",
          type: "text",
          placeholder: "Enter zip",
          value: formik.values.zip,
          error: formik.touched.zip ? formik.errors.zip : undefined,
        },
        {
          component: BaseInput,
          label: "Country",
          name: "country",
          type: "text",
          placeholder: "Enter country",
          value: formik.values.country,
          error: formik.touched.country ? formik.errors.country : undefined,
        },
      ],
    },
  ];
  return (
    <div>
      <form
        className="flex flex-col gap-5"
        onSubmit={formik.handleSubmit}
        autoComplete="false"
      >
        {formOptions.map((option, index) => (
          <Fragment key={index}>
            <div className="font-bold">{option.title}</div>
            <div className="grid gap-4 mb-6 md:grid-cols-2">
              {option.fields.map((field, index) => (
                <div key={index}>
                  <field.component
                    key={index}
                    type={field.type}
                    name={field.name}
                    label={field.label}
                    value={field.value}
                    placeholder={field.placeholder}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={field.error}
                  />
                </div>
              ))}
            </div>
          </Fragment>
        ))}

        <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-0 md:flow-row justify-between items-center mt-5">
          <BaseButton
            exClass="bg-[white] w-full md:w-fit text-[dark]"
            type="reset"
          >
            Clear
          </BaseButton>
          <BaseButton
            exClass="text-[white] bg-primary text-white"
            type="submit"
          >
            Finish
          </BaseButton>
        </div>
      </form>
    </div>
  );
};

Account.getLayout = PrivateLayout;
export default Account;
