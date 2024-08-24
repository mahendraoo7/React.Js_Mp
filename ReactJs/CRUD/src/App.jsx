import { useState } from "react";
import CustomTable from "./Components/CustomTable";
import UserTable2 from "./Components/CustomTable2";
import "./App.css";
import Pagination from "./Components/pagination";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CustomTable/>
      {/* <UserTable2 /> */}
       <Pagination/>
      
    </>
  );
}

export default App;
