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
import Userview from "./Userview";
import Useredit from "./Useredit";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="userlist" element={<Userlist />} />
          <Route path="usercreate" element={<Usercreate />} />
          <Route path="userview/:id" element={<Userview />} />
          <Route path="useredit/:id" element={<Useredit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
