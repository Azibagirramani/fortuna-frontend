import { Routes } from "./types";
const routes: Routes = {
  login: "auth/login",
  register: "auth/register",
  logout: "auth/logout",
  verify: "auth/verify",
  forgotPassword: "accounts/forgot-password",
  resetPassword: "accounts/reset-password",
  updatePassword: "accounts/update-password",
  updateProfile: "accounts/update-profile",
  updateProfilePicture: "accounts/update-profile-picture",
};

export default routes;
