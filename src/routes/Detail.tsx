import { useParams } from "react-router-dom";
import BoxOne from "../components/views/BoxOne";
import BoxTwo from "../components/views/BoxTwo";

const Detail = () => {
  const param = useParams();
  return (
    <div className="w-full max-h-screen grid grid-cols-3 grid-rows-2 px-32 py-12 box-border gap-4">
      <div className="col-span-1 row-span-1 bg-[#373c5f] rounded-xl shadow-md p-8">
        <BoxOne />
      </div>
      <div className="col-span-2 row-span-2 bg-[#373c5f] rounded-xl shadow-md"></div>
      <div className="col-span-1 row-span-1 bg-[#373c5f] rounded-xl shadow-md p-8">
        <BoxTwo />
      </div>
    </div>
  );
};

export default Detail;
