import React from "react";
import BigBoxList from "./BigBoxList";

const BigBox = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex justify-between items-center mb-8 w-full">
        <h1 className="text-3xl font-semibold">오늘</h1>
        <select className="outline-none bg-slate-300 text-gray-800 px-2 py-1 rounded-md">
          <option>오늘</option>
          <option>코딩</option>
          <option>운동</option>
          <option>독서</option>
        </select>
      </div>
      <div className="flex flex-col space-y-4 w-full">
        <BigBoxList title="코딩 1시간" />
        <BigBoxList title="코딩 2시간" />
        <BigBoxList title="코딩 3시간" />
        <BigBoxList title="코딩 4시간" />
      </div>
    </div>
  );
};

export default BigBox;
