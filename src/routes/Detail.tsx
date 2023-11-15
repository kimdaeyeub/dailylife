import { useParams } from "react-router-dom";

const Detail = () => {
  const param = useParams();
  return (
    <div className="w-full h-screen grid grid-cols-3 grid-rows-2 px-12 py-8 gap-4">
      <div className="col-span-1 row-span-1 bg-white rounded-xl shadow-md">
        1
      </div>
      <div className="col-span-2 row-span-2 bg-white rounded-xl shadow-md">
        2
      </div>
      <div className="col-span-1 row-span-1 bg-white rounded-xl shadow-md">
        3
      </div>
    </div>
  );
};

export default Detail;
