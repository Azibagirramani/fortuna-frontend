import { ChangeEventHandler, HtmlHTMLAttributes } from "react";

export interface NavBarLinks {
    label: string,
    to: any,
}


export interface BaseInput<T> {
    placeholder?: string
    label?: string
    type: string
    name: string
    preIcon?: any
    value?: any
    onChange?: any
}