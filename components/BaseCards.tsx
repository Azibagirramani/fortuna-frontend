import { FC } from "react";
// import Link from "next/link";

import { BaseCardInterface } from "./types";

const BaseCard: FC<BaseCardInterface> = ({ to = "#" }) => {
  return (
    <div className="shadow-sm hover:cursor-pointer hover:shadow-md p-5">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, at
        repellendus temporibus laboriosam numquam quisquam rerum quis quidem?
        Facilis, libero!
      </p>
    </div>
  );
};

export default BaseCard;
