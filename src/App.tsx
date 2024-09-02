import "./App.css";
import { useNavigate, Routes, Route } from "react-router-dom";
import DefaultLayout from "./core/layout/pagesLayout/DefaultLayout";
import HomePage from "./core/pages/home/HomePage";
import UserPage from "./core/pages/user/UserPage";

export const pagesName = {
  HOME_PAGE: "/",
  USER_PAGE: "/user",
} as const;

function App() {
  return (
    <Routes>
      <Route path={pagesName.HOME_PAGE} element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path={pagesName.USER_PAGE} element={<UserPage />} />
      </Route>
    </Routes>
  );
}

export default App;
