import React, { ChangeEventHandler, useState } from "react";
import BaseSelect from "../forms/BaseSelect";

import { locations } from "./defaults";

import { FilterProps } from "./types";

function BaseFilter() {

    const [filterObject, setFilterObject] = useState<FilterProps>({
        country: "",
        lga: "",
        state: ""
    });

    // handle change 
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        // setFilterObject({ ...filterObject, [name]: value });
        console.log(e, "FIlter component");
    }

    return (
        <div className="flex items-center justify-between shadow-md p-3 mt-4 rounded">
            <h5 className="text-3xl font-extrabold">Fortuna</h5>
            <div className="flex items-center gap-4">
                <div className="flex gap-4 border border-primary rounded-lg p-1">
                    <BaseSelect label="Country" id="contry" value={filterObject.country} handleChange={handleChange} />
                    <BaseSelect label="State" id="state" />
                    <BaseSelect label="LGA" id="lga" />
                </div>
                <div>
                    <BaseSelect id="category" label="Category" />
                </div>
            </div>
        </div>
    )
}

export default BaseFilter;