import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Modal from "./components/Modal";
import ShowUsers from "./components/ShowUsers";
import NewUser from "./components/NewUser";

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

  const [showModal, setShowModal] = useState(false);

  const handelShowOrHideModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <Title title="header title" subtitle="header subtitle" />
      <div>
        {showListVar || <button onClick={showList}>show users</button>}
        {showListVar && <button onClick={hideList}>hide users</button>}
      </div>
      {showListVar && <ShowUsers handleClick={handleClick} users={users} />}
      <Modal
        handelShowOrHideModal={handelShowOrHideModal}
        showModal={showModal}
        mode="discosdfeunt"
      >
        <h2>30% discount</h2>
      </Modal>
      <button className="show-modal" onClick={handelShowOrHideModal}>
        show modal
      </button>

      <NewUser />
    </div>
  );
}

export default App;
