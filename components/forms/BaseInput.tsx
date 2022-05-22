import BaseInput from "../../scss/components/BaseInput.module.scss"

import { BaseInput as BaseInputProp } from "../types"

import { BaseAlert } from "../notifications/BaseAlert";

export default ({ placeholder = "default", label, type, name, onChange, value, onBlur, error }: BaseInputProp) => (
    <div className={BaseInput.inputControl}>
    <div className={BaseInput.container}>
        {label ? <label htmlFor={`${name}-field`} className={BaseInput.container__label}>{label}</label> : null }
        <input type={type} value={value} onChange={onChange} onBlur={onBlur} className={BaseInput.container__input} id={`${name}-field`} placeholder={placeholder} name={`${name}`} />
    </div>
        {error ? <BaseAlert> {error} </BaseAlert>: null}
    </div>
  );