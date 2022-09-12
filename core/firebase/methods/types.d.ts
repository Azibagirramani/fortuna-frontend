export enum accountType {
  personal = "personal",
  business = "business",
}

export type accountList = accountType.business | accountType.personal;

export type accounts = {
  type: accountList;
  terms: boolean;
};
