import React from "react";
import BaseSelect from "../forms/BaseSelect";

function BaseFilter() {
    return (

        <div className="flex items-center justify-between shadow-md p-3 mt-4 rounded">
            <h5 className="text-3xl font-extrabold">Fortuna</h5>
            <div className="flex items-center gap-4">
                <BaseSelect label="Country" />
                <BaseSelect label="State" />
                <BaseSelect label="LGA" />
            </div>
        </div>
    )
}

export default BaseFilter;