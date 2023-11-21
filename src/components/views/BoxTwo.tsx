import { useEffect, useState } from "react";
import Goal from "./Goal";
import Modal from "./Modal";
import { auth } from "../../firebase";
import { useRecoilState, useRecoilValue } from "recoil";
import { goalState, goalsState } from "../../atom";
import { getGoals } from "../../api";

export interface IGoal {
  title: string;
  description: string;
  createdAt: number;
  userId: string;
  id: string;
}

const BoxTwo = () => {
  const [openModal, setOpenModal] = useState(false);
  const user = auth.currentUser;
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  const goals = useRecoilValue(goalsState);
  useEffect(() => {
    if (user) {
      getGoals();
    }
  }, []);
  return (
    <>
      {openModal ? (
        <>
          <div
            onClick={toggleModal}
            className="cursor-pointer fixed top-0 left-0 w-screen h-full bg-black bg-opacity-40"
          ></div>
          <Modal toggleModal={toggleModal} />
        </>
      ) : null}
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-7">
          <h1 className="text-3xl  font-semibold">등록된 항목</h1>
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
        {goals.map((goal) => (
          <Goal key={goal.id} {...goal} />
        ))}
      </div>
    </>
  );
};

export default BoxTwo;
