import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";

type User = {
  id: number;
  username: string;
  age: number;
  education: string;
  gender: string;
  skills: string[];
  bio: string;
};

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<User>({
    id: 0,
    username: "",
    age: 0,
    education: "",
    gender: "",
    skills: [],
    bio: "",
  });

  const handleAddUser = (user: User) => {
    setUsers((prevUsers) => [...prevUsers, user]);
    setUserData({
      id: 0,
      username: "",
      age: 0,
      education: "",
      gender: "",
      skills: [],
      bio: "",
    });
  };

  const handleDeleteUser = (userId: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    setSelectedUser(null);
  };

  const handleEditUser = (editedUser: User) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === editedUser.id ? { ...user, ...editedUser } : user
      )
    );
    
    setSelectedUser(editedUser);
    setUserData(editedUser);
  };

  return (
    <>
      <UserForm
        userData={userData}
        editMode={selectedUser !== null}
        setUsers={handleAddUser}
        setUserData={setUserData}
        handleEditUser={handleEditUser}
      />
      <UserList
        users={users}
        setSelectedUser={setSelectedUser}
        deleteUser={handleDeleteUser}
        editUser={handleEditUser}
      />
      <UserProfile selectedUser={selectedUser} />
    </>
  );
};

export default App;
