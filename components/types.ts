import { ReactNode, ChangeEventHandler, FocusEventHandler } from "react";
import { IconType } from "react-icons";
import { Url } from "url";
export type NavBarLinks = {
  label: string;
  to: string;
  type?: string;
};
export type FooterLinks = {
  title: string;
  links?: NavBarLinks[];
};

export type BaseAlertInterface = {
  type?: "" | string;
  children?: ReactNode;
};

export type BaseInput = {
  placeholder?: string;
  label?: string;
  type: string;
  name: string;
  preIcon?: any; // i will update this type soon
  value?: string | ReadonlyArray<string> | number;
  onChange?: ChangeEventHandler | undefined;
  onBlur?: FocusEventHandler;
  error?: string;
  disabled?: boolean;
  [key: string]: any;
};

export interface BaseButtonInterface {
  disabled?: boolean;
  loading?: boolean;
  id?: string;
  [key: string]: any;
}

export declare type BaseCardInterface = {
  to?: Url;
};

export type selectData = {
  label: string;
  value?: string | number;
};

export declare type BaseSelectProps = {
  data?: selectData[];
  id?: string;
  label?: string;
  value?: string | number;
  name: string;
  onChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
};

export type AccountCardI = {
  icon?: any;
  label: string;
  [key: string]: any;
};

export interface FeatureProps {
  Icon: IconType;
  title: string;
  description: string;
}
