import { Auth as AuthService } from "@/core/index";
import type { ILogin } from "@/core/types";

export const SubmitForm = async (values: ILogin) => {
  let errorMg = undefined;
  let content = undefined;
  let message = null;
  try {
    const data = await AuthService.login(values);
    content = data.data;
    message = "Success...please wait";
  } catch (error: any) {
    errorMg = error.response.data.data ?? "Email or Password is not correct";
  } finally {
    console.log("--request finished---");
  }

  return {
    errorMg,
    message,
    content,
  };
};
