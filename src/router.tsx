import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./routes/Login";
import ProtectedRouter from "./components/ProtectedRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRouter>
        <App />
      </ProtectedRouter>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
