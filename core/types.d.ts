export type IAccount = "personal" | "business";

export type ProfleType = {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  currency: string;
  language: string;
  timezone: string;
};

export type ILogin = {
  email: string;
  password: string;
};

export type Routes = {
  login: string;
  register: string;
  logout: string;
  verify: string;
  forgotPassword: string;
  resetPassword: string;
  updatePassword: string;
  updateProfile: string;
  updateProfilePicture: string;
};

export type HttpResponse = {
  data: null | object;
  message: string;
  statusCode: string;
};

export type IAccount = {
  id: number;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

export type institution = {
  id: number;
  name: string;
  type: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  accountId?: number;
};

export type INeeds = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  expires: Date;
  active: boolean;
  purpose: string;
  category: string;
  accountId: number;
  createdAt: Date;
  updatedAt: Date;
  country: string;
  city: string;
};
