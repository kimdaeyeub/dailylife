import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import LoadingScreen from "./routes/LoadingScreen";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getGoals } from "./api";
import { goalsState, refetch } from "./atom";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const setGoals = useSetRecoilState(goalsState);
  const [fetch, setFetch] = useRecoilState(refetch);
  const init = async () => {
    setFetch(true);
    await auth.authStateReady();

    getGoals().then((res) => {
      if (res !== "refetch is false") {
        setGoals(res);
      }
    });
    setIsLoading(false);
  };
  useEffect(() => {
    init();
    // setFetch(false);
  }, []);
  return (
    <div>
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </div>
  );
};

export default App;
