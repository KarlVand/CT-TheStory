// src/components/Users/index.jsx
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import UserList from "./UserList";
import UserForm from "./UserForm";
import styles from "./Users.module.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadUsers = async () => {
    try {
      const data = await api.getUsers();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = async userData => {
    try {
      await api.createUser(userData);
      loadUsers(); // Reload the list after adding
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.usersContainer}>
      <h1>User Management</h1>
      <UserForm onSubmit={handleAddUser} />
      <UserList
        users={users}
        error={error}
      />
    </div>
  );
};

export default Users;
