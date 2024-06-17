import React from "react";

export const Button = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="px-4 py-2 rounded-lg border border-slate-600 bg-black-100 text-white text-sm h-12 w-full overflow-hidden focus:outline-none mt-5 md:w-40 md:ml-4">
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg gap-2 ${otherClasses}`}>
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};
