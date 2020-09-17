import React from "react";
import "./App.css";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import SidebarOption from "./SidebarOption";
import Widgets from "./Widgets";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
      {/* Widgets */}
    </div>
  );
}

export default App;
