import { createBrowserRouter } from "react-router-dom";
import Login from "./routes/Login";
import ProtectedRouter from "./components/permission/ProtectedRouter";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import ProtectedUser from "./components/permission/ProtectedUser";
import UserExist from "./routes/UserExist";
import CreateAccount from "./routes/CreateAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":id",
        element: (
          <ProtectedRouter>
            <Detail />
          </ProtectedRouter>
        ),
      },
      {
        path: "login",
        element: (
          <ProtectedUser>
            <Login />
          </ProtectedUser>
        ),
      },
      {
        path: "sign-up",
        element: (
          <ProtectedUser>
            <CreateAccount />
          </ProtectedUser>
        ),
      },
      {
        path: "user/error",
        element: <UserExist />,
      },
    ],
  },
]);

export default router;
