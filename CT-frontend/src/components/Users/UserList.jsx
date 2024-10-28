// src/components/Users/UserList.jsx
import styles from "./Users.module.css";
import PropTypes from "prop-types";

const UserList = ({ users, error }) => {
  if (error) return <p className={styles.error}>Error: {error}</p>;

  return (
    <div className={styles.userList}>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li
            key={user.id}
            className={styles.userItem}>
            <span>{user.name}</span>
            <span>{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  error: PropTypes.string,
};

export default UserList;
