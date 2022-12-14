import "./App.css";
import Sidebar from "./Sidebar";
import "./sb-admin-2.min.css";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Userlist from "./Userlist";
import Portal from "./Portal";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Portal" element={<Portal />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Userlist" element={<Userlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
