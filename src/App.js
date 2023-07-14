import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Modal from "./components/Modalcompon";

function App() {
  const [users, setUsers] = useState([
    { name: "Aram", age: 36, id: 11 },
    { name: "Emad", age: 40, id: 22 },
    { name: "Elina", age: 3, id: 33 },
  ]);

  const handleClick = (userId) => {
    setUsers(
      users.filter((user) => {
        return user.id !== userId;
      })
    );
  };

  const [showListVar, setShowList] = useState(true);

  const showList = () => {
    setShowList(true);
  };

  const hideList = () => {
    setShowList(false);
  };

  cons

  return (
    <div className="App">
      <Title title="header title" subtitle="header subtitle" />
      <div>
        {showListVar || <button onClick={showList}>show</button>}
        {showListVar && <button onClick={hideList}>hide</button>}
      </div>
      {showListVar &&
        users.map((user, index) => {
          return (
            <div key={index}>
              <h1>
                {user.name}, {user.age}
              </h1>
              <button
                onClick={() => {
                  handleClick(user.id);
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      <Title title="footer title" subtitle="footer subtitle" />
      <Modal>
        <h2>30% discount</h2>
      </Modal>
    </div>
  );
}

export default App;
