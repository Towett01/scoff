import clsx from "clsx";
import React from "react";

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={clsx(className, "px-6 lg:px-8 bg-gradient-to-r from-green-100 via-white to-red-100")}>
      <div className="mx-auto max-w-2xl lg:max-w-7xl">{children}</div>
    </div>
  );
}
