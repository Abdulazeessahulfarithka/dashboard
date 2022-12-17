import "./App.css";
import Sidebar from "./Sidebar";
import "./sb-admin-2.min.css";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Userlist from "./Userlist";
import Portal from "./Portal";
import Usercreate from "./Usercreate";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="userlist" element={<Userlist />} />
          <Route path="Usercreate" element={<Usercreate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
