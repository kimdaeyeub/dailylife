import React from "react";

const Modal = () => {
  return (
    <div
      className="w-2/4 h-3/4 bg-white absolute
         right-0 bottom-0 top-0 left-0 m-auto rounded-xl p-10 flex flex-col justify-start"
    >
      <h1 className="text-3xl font-semibold text-gray-700 mb-8">새로운 목표</h1>
      <div className="flex flex-col items-start justify-center mb-4">
        <span className="text-sm text-gray-400 mb-1">목표 이름</span>
        <input
          type="text"
          className="w-full outline-none border-none px-4 py-2 bg-gray-200 rounded-md"
        />
      </div>
      <div className="flex flex-col items-start justify-center mb-2">
        <span className="text-sm text-gray-400 mb-1">세부설명</span>
        <textarea
          rows={5}
          className="w-full outline-none border-none px-4 py-2 bg-gray-200 rounded-md resize-none"
        />
      </div>
    </div>
  );
};

export default Modal;
