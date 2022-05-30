import BaseInputModule from "../../scss/components/BaseInput.module.scss"

import { BaseInput as BaseInputProp } from "../types"

import { BaseAlert } from "../notifications/BaseAlert";

const BaseInput = ({ placeholder = "default", label, type, name, onChange, value, onBlur, error }: BaseInputProp) => (
    <div className={BaseInputModule.inputControl}>
        <div className={BaseInputModule.container}>
            {label ? <label htmlFor={`${name}-field`} className={BaseInputModule.container__label}>{label}</label> : null}
            <input type={type} value={value} onChange={onChange} onBlur={onBlur} className={BaseInputModule.container__input} id={`${name}-field`} placeholder={placeholder} name={`${name}`} />
        </div>
        {error ? <BaseAlert> {error} </BaseAlert> : null}
    </div>
);

export default BaseInput