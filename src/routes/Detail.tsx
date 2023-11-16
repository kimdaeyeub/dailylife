import { useParams } from "react-router-dom";
import BoxOne from "../components/views/BoxOne";
import BoxTwo from "../components/views/BoxTwo";
import BigBox from "../components/views/BigBox";

const Detail = () => {
  const param = useParams();
  return (
    <div className="w-full max-h-screen grid grid-cols-3 grid-rows-2 px-32 py-12 box-border gap-4">
      <div className="col-span-1 row-span-1 bg-white rounded-xl shadow-md p-8">
        <BoxOne />
      </div>
      <div className="col-span-2 row-span-2 bg-white rounded-xl shadow-md p-10">
        <BigBox />
      </div>
      <div className="col-span-1 row-span-1 bg-white rounded-xl shadow-md p-8">
        <BoxTwo />
      </div>
    </div>
  );
};

export default Detail;
