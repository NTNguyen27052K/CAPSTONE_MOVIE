import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserTemplate from "./Template/UserTemplate";
import HomePage from "./Pages/HomePage/HomePage";
import Page404 from "./Pages/Page404/Page404";
import Login from "./Pages/Login/Login";
import AdminTemplate from "./Template/AdminTemplate";
import LoginAdmin from "./Pages/FormLogin/LoginAdmin";
import UserManagement from "./Pages/UserManagement/UserManagement";
import Loading from "./Pages/Loading/Loading";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/admin" element={<AdminTemplate />}>
          <Route index element={<UserManagement />} />
        </Route>
        <Route path="/admin-login" element={<LoginAdmin />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
