import { FC } from "react";

import type { BaseInput as BaseInputProp } from "@/components/types";

// * Base input component
const BaseInput: FC<BaseInputProp> = ({
  label = "",
  error = "",
  exClass = "",
  component, // ? we need to remove this "component" to avoid errors.
  ...rest
}): JSX.Element => {
  const setRef: string = `${label ? rest.name + "-input" : "default-input"}`;
  return (
    <>
      {label && (
        <label
          htmlFor={setRef}
          className={`block mb-2 ${
            error ? "text-red-700" : ""
          } text-sm font-medium`}
        >
          {label}
        </label>
      )}
      <input
        {...rest}
        id={setRef}
        className={`bg-red-50 border rounded-full ${exClass ? exClass : null} ${
          error
            ? "border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500"
            : ""
        }  border-[#bcc1c7] h-fit text-sm rounded bg-white dark:bg-gray-700  block w-full`}
      />

      {error ? (
        <p className="mt-2 text-sm text-[red] dark:text-[red]-500">
          <span className="font-medium">{error}</span>
        </p>
      ) : null}
    </>
  );
};

export default BaseInput;
