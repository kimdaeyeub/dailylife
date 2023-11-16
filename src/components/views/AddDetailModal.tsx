import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../../firebase";
import { useRecoilValue } from "recoil";
import { goalState } from "../../atom";

interface IProp {
  toggleModal: () => void;
}

const AddDetailModal = ({ toggleModal }: IProp) => {
  const user = auth.currentUser;
  const value = useRecoilValue(goalState);
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "number") {
      setNumber(e.target.value);
    }
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const date = new Date();
    const createdAt = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
    console.log(createdAt);
    try {
      addDoc(collection(db, "user", user!.uid, value.id), {
        title,
        createdAt,
        count: Number(number),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setTitle("");
      setNumber("");
      toggleModal();
    }
  };
  return (
    <div
      className="w-2/4 h-3/4 bg-white absolute
         right-0 bottom-0 top-0 left-0 m-auto rounded-xl p-10"
    >
      <form
        className="w-full h-full flex flex-col justify-between items-end"
        onSubmit={onSubmit}
      >
        <div className="w-full">
          <h1 className="text-3xl font-semibold text-gray-700 mb-8">
            새로운 목표
          </h1>
          <div className="flex flex-col items-start justify-center mb-4">
            <span className="text-sm text-gray-400 mb-1">목표 이름</span>
            <input
              onChange={onChange}
              value={title}
              name="title"
              type="text"
              className="w-full outline-none border-none px-4 py-2 bg-gray-200 rounded-md mb-6"
            />
            <span className="text-sm text-gray-400 mb-1">수치</span>
            <input
              onChange={onChange}
              value={number}
              name="number"
              type="text"
              className="w-full outline-none border-none px-4 py-2 bg-gray-200 rounded-md"
            />
          </div>
        </div>
        <input
          className="bg-gray-200 px-5 py-1.5 rounded-md text-gray-700 font-medium cursor-pointer"
          value="등록하기"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDetailModal;
