import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Main from "../pages/Main";
import Contacts from "../pages/Contacts";
import PersonalAccount from "../pages/PersonalAccount";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/account" element={<PersonalAccount />} />
      </Route>
    </Routes>
  );
}
