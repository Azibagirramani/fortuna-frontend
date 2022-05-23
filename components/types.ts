import React, { ReactNode, ChangeEventHandler, FocusEventHandler, ButtonHTMLAttributes } from "react";
import { Url } from "url";
export interface NavBarLinks {
    label: string,
    to: Url,
    type?: string,
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
    id?: string,
    [key: string]: any
}

export declare type BaseCardInterface = {
    to?: Url,
    children?: ReactNode
}


type selectData = {
    label: string,
    value?: string | number
}

export declare type BaseSelectProps = {
    data: selectData[],
    id?: string,
    label?: string,
    onChange?: ChangeEventHandler,
}