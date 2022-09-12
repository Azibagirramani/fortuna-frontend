import { FC } from "react";

import type { BaseSelectProps } from "@/components/types";

const BaseSelect: FC<BaseSelectProps> = ({
  label,
  data = [],
  ...rest
}): JSX.Element => {
  let selectId: string = `${rest.id ? rest.id : "base"}-select`;
  return (
    <div className="">
      {label ? (
        <label
          htmlFor={selectId}
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          {label}
        </label>
      ) : null}
      <select
        className="active:border-none w-full py-3.5 rounded"
        id={selectId}
        {...rest}
      >
        {data?.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BaseSelect;
