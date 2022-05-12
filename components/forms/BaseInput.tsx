import { MdEmail } from "react-icons/md"

import BaseInput from "../../scss/components/BaseInput.module.scss"

import { BaseInput as BaseInputProp } from "../types"

export default ({ placeholder = "default", label, type, name, onChange, value }: BaseInputProp) => (
    <div className={BaseInput.inputControl}>
    {/* { preIcon ? <MdEmail className={BaseInput.icon} /> : null } */}
    <div className={BaseInput.container}>
        {label ? <label htmlFor={`${name}-field`} className={BaseInput.container__label}>{label}</label> : null }
        <input type={type} value={value} onChange={()=> {}} className={BaseInput.container__input} id={`${name}-field`} placeholder={placeholder} name={`${name}`} />
    </div>
    </div>
  );