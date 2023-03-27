import { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [data, setData] = useState([]);

  console.log("data ==>", data);

  const getData = (uName, uAge) => {
    setData((prevData) => {
      return [
        ...prevData,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <AddUser getData={getData} />
      {data && <UserList users={data} />}
    </div>
  );
}

export default App;
