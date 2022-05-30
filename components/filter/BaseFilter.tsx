import React, { useEffect, useState } from "react";
import BaseButton from "../forms/BaseButton";
import BaseSelect from "../forms/BaseSelect";

import { locations } from "./defaults";

import { FilterProps } from "./types";

function BaseFilter() {

    let stateData: any = [];

    const [filterObject, setFilterObject] = useState<FilterProps>({
        country: "nigeria",
        state: "",
        category: "",
    });

    // handle change 
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFilterObject({ ...filterObject, [name]: value });
    }


    // update filter data
    const updateFilterValues = () => {
        const { country } = filterObject;
        let values = [{
            value: "",
            label: "Data Unavailable",
        }];
        // update state 
        for (let i = 0; i < locations.length; i++) {
            const location = locations[i][country];
            if (location === undefined) {
                continue
            }
            // set state value 
            values = location.states.map((item: any) => ({
                label: item.name,
                value: item.name,
            }));
        }


        return { values };
    }


    const { values } = updateFilterValues();

    stateData = values;


    useEffect(() => {
        updateFilterValues();
    });



    return (
        <div className="flex items-center justify-between shadow-md p-3 mt-4 rounded">
            <h5 className="text-3xl font-extrabold">Fortuna</h5>
            <div className="flex items-center gap-4">
                <div className="flex gap-4 p-1">
                    <BaseSelect label="Country" id="contry" name="country" data={[{ label: "Nigeria", value: "nigeria" }, { label: "Kenya", value: "kenya" }]} value={filterObject.country} handleChange={handleChange} />
                    <BaseSelect label="State" id="state" name="state" data={stateData} value={filterObject.state} handleChange={handleChange} />
                </div>
                <div>
                    <BaseSelect id="category" label="Needs Category" name="category" />
                </div>
            </div>
        </div>
    )
}

export default BaseFilter;

function e(e: any): void {
    throw new Error("Function not implemented.");
}
