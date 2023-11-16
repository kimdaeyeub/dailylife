import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import LoadingScreen from "./routes/LoadingScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const init = async () => {
    await auth.authStateReady();
    setIsLoading(false);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <div>
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </div>
  );
};

export default App;
