import { FC } from "react";

import { BaseSelectProps } from "../types";

const BaseSelect: FC<BaseSelectProps> = ({ label, value, name, data = [{ label: "item", value: "item-value" }, { label: "item2", value: "item-value2" }], id = "base", handleChange }) => {

    const selectId: string = `${id}-select`;


    /// handle change
    return (
        <div className="">
            {label ? <label htmlFor={selectId} className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label> : null}
            <select className="h-fit active:border-none" name={name} value={value} onChange={handleChange} id={selectId}>
                {data.map((item, index) => (
                    <option key={index} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>

    )
}

export default BaseSelect;