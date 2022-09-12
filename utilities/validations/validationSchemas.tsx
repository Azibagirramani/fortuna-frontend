import * as yup from "yup";

interface CandidateProfile {
  firstName: string;
  lastName: string;
  gender: "male" | "female";
  dob: Date;
  [key: string]: any;
}

/// login validation rules with yup
export const LoginValidation = new yup.ObjectSchema({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const ProfileValidation = new yup.ObjectSchema({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phone: yup.string().required("Phone is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  zip: yup.string().required("Zip is required"),
  country: yup.string().required("Country is required"),
});

// user profile validation rules with yup
export const NeedsValidation = new yup.ObjectSchema({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  tags: yup.string().required("Tags is required"),
  expires: yup.string().required("Expires is required"),
  active: yup.boolean().required("Active is required"),
  for: yup.string().required("For is required"),
  category: yup.string().required("Category is required"),
});
