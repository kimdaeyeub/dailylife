import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const Navbar = () => {
  const navigate = useNavigate();
  const onMoveHomeScreen = () => {
    navigate("/");
  };
  const user = auth.currentUser;
  return (
    <div className="w-full py-5 px-10 flex justify-between items-center bg-[#272B44]">
      <h1
        className="text-white font-semibold text-3xl cursor-pointer"
        onClick={onMoveHomeScreen}
      >
        DailyLife
      </h1>
      <div className="space-x-6 flex justify-center items-center">
        <span className="text-white font-medium">피드백</span>
        {user === null ? (
          <button
            name="login"
            className="bg-[#393E5A] text-white px-4 py-2 rounded-md font-medium"
          >
            로그인
          </button>
        ) : (
          <>
            <button
              name="logout"
              className="bg-[#393E5A] text-white px-4 py-2 rounded-md font-medium"
            >
              로그아웃
            </button>
            <div className="bg-slate-300 w-10 h-10 rounded-full" />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
