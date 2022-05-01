import React from "react";
import "./App.css";
import Layout from "components/DefaultLayout/Layout";
import { Route, Routes } from "react-router-dom";
import OneTable from "Pages/OneTable";
import TwoTable from "Pages/TwoTable";
import ThreeTable from "Pages/ThreeTable";

function App() {
  const menuConfigs = ["onetable", "twotable", "threetable"];
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout menuConfigs={menuConfigs} />}>
          <Route path="onetable" element={<OneTable />} />
          <Route path="twotable" element={<TwoTable />} />
          <Route path="threetable" element={<ThreeTable />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
