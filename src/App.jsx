import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Overview from "./pages/Overview";
import Budgets from "./pages/Budgets";
import Bills from "./pages/Bills";
import Transactions from "./pages/Transactions";
import Pots from "./pages/Pots";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className=" flex flex-col h-screen lg:grid lg:grid-cols-[auto,1fr] ">
      <Router>
        <Routes>
          <Route path="/" element={<Overview />}></Route>
          <Route path="/bills" element={<Bills></Bills>}></Route>
          <Route path="/budgets" element={<Budgets />}></Route>
          <Route path="/transactions" element={<Transactions />}></Route>
          <Route path="/pots" element={<Pots />}></Route>
        </Routes>
        <Sidebar></Sidebar>
      </Router>
    </div>
  );
}

export default App;
