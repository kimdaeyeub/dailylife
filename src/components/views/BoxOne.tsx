import Chart from "./Chart";

const BoxOne = () => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-semibold text-3xl text-white">이번 주</h1>
          <h1 className="font-semibold text-xl text-gray-400">81.5점</h1>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-gray-400">지난주 대비 4점 상승</span>
          {false ? (
            <svg
              className="text-green-400"
              width={25}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
              ></path>
            </svg>
          ) : (
            <svg
              className="text-red-400"
              width={25}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
              ></path>
            </svg>
          )}
        </div>
      </div>
      <Chart />
    </div>
  );
};

export default BoxOne;
