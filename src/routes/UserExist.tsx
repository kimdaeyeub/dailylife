//로그인한 유저가 로그인창을 볼려고 하면 해당 화면을 띄워준다.
const UserExist = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <h1 className="text-4xl text-white">이미 로그인된 상태입니다.</h1>;
    </div>
  );
};

export default UserExist;
