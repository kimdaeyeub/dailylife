import { useEffect, useState } from "react";
import BigBoxList from "./BigBoxList";
import { useRecoilValue } from "recoil";
import { goalState } from "../../atom";
import AddDetailModal from "./AddDetailModal";
import { auth, db } from "../../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export interface IList {
  title: string;
  createdAt: string;
  count: number;
  id: string;
}

const BigBox = () => {
  const [openModal, setOpenModal] = useState(false);
  const [list, setList] = useState<IList[]>([]);
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      {openModal ? (
        <>
          <div
            onClick={toggleModal}
            className="cursor-pointer fixed top-0 left-0 w-screen h-full bg-black bg-opacity-40"
          ></div>
          <AddDetailModal toggleModal={toggleModal} />
        </>
      ) : null}
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex justify-between items-center mb-4 w-full">
          <h1 className="text-3xl font-semibold">title</h1>
          <button
            onClick={toggleModal}
            className="bg-black bg-opacity-10 p-2 rounded-md"
          >
            <svg
              color="white"
              width={25}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
              ></path>
            </svg>
          </button>
        </div>
        <p className="mb-6 text-gray-500 text-start w-full">asdasdasdasd</p>
        <div className="flex flex-col space-y-4 w-full">
          {list.map((item) => (
            <BigBoxList key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BigBox;
