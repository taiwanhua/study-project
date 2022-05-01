import React from "react";
import "./App.css";
import Layout from "components/DefaultLayout/Layout";

function App() {
  const menuConfigs = ["firsttable", "twotable", "threetable"];
  return <Layout menuConfigs={menuConfigs}>dd</Layout>;
}

export default App;
