import { ReactNode, ChangeEventHandler, FocusEventHandler, ButtonHTMLAttributes } from "react";

export interface NavBarLinks {
    label: string,
    to: any,
}


export interface FooterLinks {
    title: string;
    links?: NavBarLinks[]
}

export interface BaseAlertInterface {
    type?: "" | string
    children: ReactNode
}

export interface BaseInput {
    placeholder?: string
    label?: string
    type: string
    name: string
    preIcon?: any // i will update this type soon
    value?: string | ReadonlyArray<string> | number | undefined;
    onChange?: ChangeEventHandler | undefined
    onBlur: FocusEventHandler
    error?: string
}


export interface BaseButtonInterface {
    disabled?: boolean,
    loading?: boolean,
    [key: string]: any
}

type Base = BaseButtonInterface & ButtonHTMLAttributes<T>

