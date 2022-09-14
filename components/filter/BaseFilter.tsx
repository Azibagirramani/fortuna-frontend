import React, { useEffect, useState } from "react";
import BaseSelect from "@/components/forms/BaseSelect";

import { locations } from "@/components/filter/defaults";

import { FilterProps } from "@/components/filter/types";
import BaseInput from "../forms/BaseInput";

function BaseFilter() {
  let stateData: any = [];

  const [filterObject, setFilterObject] = useState<FilterProps>({
    country: "Country",
    state: "",
    category: "",
  });

  // handle change
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFilterObject({ ...filterObject, [name]: value });
  };

  // update filter data
  const updateFilterValues = () => {
    const { country } = filterObject;
    let values = [
      {
        value: "",
        label: "Data Unavailable",
      },
    ];
    // update state
    for (let i = 0; i < locations.length; i++) {
      const location = locations[i][country];
      if (location === undefined) {
        continue;
      }
      // set state value
      values = location.states.map((item: any) => ({
        label: item.name,
        value: item.name,
      }));
    }

    return { values };
  };

  const { values } = updateFilterValues();

  stateData = values;

  useEffect(() => {
    updateFilterValues();
  });

  return (
    <div className="flex items-center justify-between gap-4 bg-white px-7 py-1">
      <div>
        <BaseInput
          type="search"
          name="search"
          value={filterObject.category}
          onChange={handleChange}
          placeholder="Search..."
        />
      </div>
      <div>
        <div className="flex gap-4">
          <BaseSelect
            id="country"
            name="country"
            data={[
              { label: "Country", value: "" },
              { label: "Nigeria", value: "nigeria" },
            ]}
            value={filterObject.country}
            // handleChange={handleChange}
          />
          <BaseSelect
            id="state"
            name="state"
            data={stateData}
            value={filterObject.state}
            // handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default BaseFilter;
