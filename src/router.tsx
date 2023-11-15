import { createBrowserRouter } from "react-router-dom";
import Login from "./routes/Login";
import ProtectedRouter from "./components/permission/ProtectedRouter";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import ProtectedUser from "./components/permission/ProtectedUser";
import UserExist from "./routes/UserExist";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRouter>
        <Layout />
      </ProtectedRouter>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":id",
        element: <Detail />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <ProtectedUser>
        <Login />
      </ProtectedUser>
    ),
  },
  {
    path: "user/error",
    element: <UserExist />,
  },
]);

export default router;
