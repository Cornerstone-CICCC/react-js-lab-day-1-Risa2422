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

type UserProfileProps = {
  selectedUser: User | null;
};

const UserProfile: React.FC<UserProfileProps> = ({ selectedUser }) => {
  if (!selectedUser) {
    return <div>Please select a user to view their profile.</div>;
  }

  return (
    <div>
      <h3>{selectedUser.username}'s Profile</h3>
      <p>Age: {selectedUser.age}</p>
      <p>Education: {selectedUser.education}</p>
      <p>Gender: {selectedUser.gender}</p>
      <p>Skills: {selectedUser.skills.join(", ")}</p>
      <p>Bio: {selectedUser.bio}</p>
    </div>
  );
};

export default UserProfile;
