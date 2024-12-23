import { useMemo } from "react";
import { subtitle } from "./primitives";

export const Achievements = () => {
  const data = useMemo(
    () => [
      {
        title: "4.9",
        text: "Lorem ipsum dolor sit amet",
      },
      {
        title: "876K",
        text: "Lorem ipsum dolor sit amet",
      },
      {
        title: "No.1",
        text: "Lorem ipsum dolor sit amet",
      },
    ],
    []
  );

  return (
    <div className="flex flex-col justify-center w-full lg:flex-row bg-secondary transform scale-75 opacity-0 animate-block-in py-2 lg:py-6 rounded-xl lg:rounded-3xl divide-y divide-default-400 lg:divide-y-0">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-y-2 lg:gap-y-4 text-center text-white lg:text-start lg:items-start lg:w-1/4 px-3 py-3 lg:py-0"
        >
          <p className={subtitle({ className: "font-semibold " })}>
            {item.title}
          </p>
          <hr className="hidden lg:block border-b-3 w-1/3" />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};
