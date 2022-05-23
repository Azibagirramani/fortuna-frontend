import React from "react";
import BaseSelect from "../forms/BaseSelect";

function BaseFilter() {

    const data = [
        {
            label: "All",
            value: "all"
        }
    ]

    return (

        <div className="flex items-center justify-between py-5 shadow-sm">
            <p>Fortuna</p>
            <div className="flex items-center gap-4">
                <BaseSelect data={data} label="Country" />
                <BaseSelect data={data} label="state" />
            </div>
        </div>
    )
}

export default BaseFilter;