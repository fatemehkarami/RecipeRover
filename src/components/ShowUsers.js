import styles from "./ShowUsers.module.css";

const ShowUsers = (props) => {
  return props.users.map((user, index) => {
    return (
      <div key={index} className={styles.userlist}>
        <h1>
          {user.name}, {user.age}
        </h1>
        <button
          onClick={() => {
            props.handleClick(user.id);
          }}
        >
          delete
        </button>
      </div>
    );
  });
};

export default ShowUsers;
