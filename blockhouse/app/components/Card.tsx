import { cn } from "../../lib/cn";
import React, { ReactNode } from "react";

function Card({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <div
      className={cn(
        className,
        "bg-neutral-50 border-1.5 px-2 py-1.5 border-zinc-800 shadow-md "
      )}
    >
      {children}
    </div>
  );
}

export default Card;
