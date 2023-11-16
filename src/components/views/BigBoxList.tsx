import React from "react";

interface IProp {
  title: string;
}
const BigBoxList = ({ title }: IProp) => {
  return (
    <div className="w-full py-2 px-4 flex justify-between items-center border-l-4 border-red-500">
      <span className="">{title}</span>
      <svg
        className="text-gray-500 cursor-pointer"
        width={20}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          clipRule="evenodd"
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
        ></path>
      </svg>
    </div>
  );
};

export default BigBoxList;
