import React, { FC } from "react";
import { BaseAlertInterface } from "../types";



export const BaseAlert: FC<BaseAlertInterface> = ({ type, children }) => {

    console.log(type)

    let extendClass: string | undefined = "text-red-700 bg-red-100"
    if(type !== undefined && type !== ""){
        extendClass = type
    }

    return     <div className={`p-2 mb-4 text-sm w-fit rounded-lg ${extendClass}`} role="alert">
        {children}
</div>
}