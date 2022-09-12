import { useFormik } from "formik";

import BaseDashboardLayout from "../../../../layouts/private/PrivateDashboardLayout";
import { NeedsValidation } from "../../../../utilities/validations";

import BaseButton from "../../../../components/forms/BaseButton";
import BaseInput from "../../../../components/forms/BaseInput";
import BaseSelect from "../../../../components/forms/BaseSelect";

function CreateNeeds() {
  type ProfileType = {
    title: string;
    description: string;
    tags: string;
    expires: string;
    active: string;
    for: string;
    category: string;
    accountId?: number;
  };
  const needs = {} as ProfileType;
  const formik = useFormik({
    initialValues: needs,
    validationSchema: NeedsValidation,
    async onSubmit(values) {},
  });
  const formOptions = [
    {
      component: BaseInput,
      label: "Title",
      name: "title",
      type: "text",
      placeholder: "Enter Title",
      value: formik.values.title,
      error: formik.touched.title ? formik.errors.title : undefined,
    },
    {
      component: BaseInput,
      label: "Description",
      name: "description",
      type: "text",
      placeholder: "Enter Description",
      value: formik.values.description,
      error: formik.touched.description ? formik.errors.description : undefined,
    },
    {
      component: BaseInput,
      label: "Tags",
      name: "tags",
      value: formik.values.tags,
      error: formik.touched.tags ? formik.errors.tags : undefined,
    },
    {
      component: BaseInput,
      label: "Expires",
      name: "expires",
      type: "date",
      value: formik.values.expires,
      error: formik.touched.expires ? formik.errors.expires : undefined,
    },
    {
      component: BaseInput,
      label: "Active",
      name: "active",
      type: "checkbox",
      value: formik.values.active,
      error: formik.touched.active ? formik.errors.active : undefined,
    },
  ];
  return (
    <div>
      <div className="flex justify-end w-full">
        <BaseButton exClass="py-4 w-fit">View all posts</BaseButton>
      </div>
      <div className="flex gap-5">
        <div className="w-1/2">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="">Create Post</h1>
          </div>

          <form className="grid gap-4 mb-6 md:grid-cols-2 mt-5">
            {formOptions.map((field, index) => (
              <div key={index}>
                <field.component
                  key={index}
                  type={field.type ? field.type : "text"}
                  name={field.name}
                  label={field.label}
                  value={field.value}
                  placeholder={field.placeholder ? field.placeholder : ""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={field.error}
                />
              </div>
            ))}

            <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-0 md:flow-row justify-between items-center mt-5">
              <BaseButton exClass="bg-[white] w-full md:w-fit text-[dark]">
                Reset
              </BaseButton>
              <BaseButton
                exClass="w-full md:w-fit"
                type="submit"
                onClick={formik.handleSubmit}
              >
                Create
              </BaseButton>
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
}

CreateNeeds.getLayout = BaseDashboardLayout;
export default CreateNeeds;
