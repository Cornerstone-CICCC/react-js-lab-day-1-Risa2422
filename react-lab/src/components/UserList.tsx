import React from "react";

type User = {
  id: number;
  username: string;
  age: number;
  education: string;
  gender: string;
  skills: string[];
  bio: string;
};

type UserListProps = {
  users: User[];
  setSelectedUser: (user: User | null) => void;
  deleteUser: (id: number) => void;
  editUser: (user: User) => void;
};

const UserList: React.FC<UserListProps> = ({
  users,
  setSelectedUser,
  deleteUser,
  editUser,
}) => {
  const handleEditUser = (user: User) => {
    editUser(user);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>ID</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.id}</td>
            <td>
              <button onClick={() => setSelectedUser(user)}>View</button>
              <button onClick={() => handleEditUser(user)}>Edit</button>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
