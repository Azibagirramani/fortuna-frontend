import { FC } from "react";

import { AccountCardI } from "@/components/types";

const BaseCard: FC<AccountCardI> = ({
  handleClick,
  exClass = "",
  label = "personal",
  children,
}) => {
  return (
    <div
      onClick={() => {
        handleClick(label);
      }}
      className={`capitalize hover:cursor-pointer hover:bg-primary hover:text-[white] gap-3 flex justify-center flex-col items-center flex-1 border-[#d9dade] border rounded py-8 md:p-3 md:py-10 ${exClass}`}
    >
      {children}
      <h3 className="font-bold">{label}</h3>
    </div>
  );
};

export default BaseCard;
