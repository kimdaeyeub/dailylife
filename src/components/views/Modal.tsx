import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../../firebase";

interface IProp {
  toggleModal: () => void;
}

const Modal = ({ toggleModal }: IProp) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title === "" || description === "") return;
    const user = auth.currentUser;
    try {
      await addDoc(collection(db, "goals"), {
        title,
        description,
        createdAt: Date.now(),
        userId: user?.uid,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setTitle("");
      setDescription("");
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
              onChange={onChangeTitle}
              value={title}
              name="title"
              type="text"
              className="w-full outline-none border-none px-4 py-2 bg-gray-200 rounded-md"
            />
          </div>
          <div className="flex flex-col items-start justify-center mb-2">
            <span className="text-sm text-gray-400 mb-1">세부설명</span>
            <textarea
              onChange={onChangeDescription}
              value={description}
              name="description"
              rows={5}
              className="w-full outline-none border-none px-4 py-2 bg-gray-200 rounded-md resize-none"
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

export default Modal;
