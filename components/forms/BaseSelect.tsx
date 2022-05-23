import { FC } from "react";

import { BaseSelectProps } from "../types";

const BaseSelect: FC<BaseSelectProps> = ({ data, onChange }) => {
    return (
        <select onChange={onChange} >
            {data.map((item, index) => (
                <option key={index} value={item.value}>
                    {item.label}
                </option>
            ))}
        </select>
    )
}

export default BaseSelect;