import "./NewUser.css";

const NewUser = () => {
  return (
    <form className="userFrom-box">
      <label htmlFor="user-name">name</label>
      <input type="text" id="user-name"></input>
      <label htmlFor="user-dof">date of birt</label>
      <input type="date" id="user-dof"></input>
      <button>submit</button>
    </form>
  );
};

export default NewUser;
