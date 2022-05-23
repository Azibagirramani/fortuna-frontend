import { FC } from "react";

import { BaseSelectProps } from "../types";

const BaseSelect: FC<BaseSelectProps> = ({ label, data, id = "base", onChange }) => {

    const selectId: string = `${id}-select`;

    return (
        <div className="flex items-center gap-2">
            {label ? <label htmlFor={selectId} className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label> : null}
            <select className="h-fit active:border-none" onChange={onChange} id={selectId}>
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