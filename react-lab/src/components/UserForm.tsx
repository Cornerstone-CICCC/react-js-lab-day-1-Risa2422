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

type UserFormProps = {
  userData: User;
  editMode: boolean;
  setUsers: (user: User) => void;
  setUserData: React.Dispatch<React.SetStateAction<User>>;
  handleEditUser: (editedUser: User) => void;
};

const UserForm: React.FC<UserFormProps> = ({
  userData,
  editMode,
  setUsers,
  setUserData,
  handleEditUser,
}) => {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setUserData((prevState: User) => {
        const updatedSkills = checked
          ? [...prevState.skills, value]
          : prevState.skills.filter((skill) => skill !== value);
        return {
          ...prevState,
          skills: updatedSkills,
        };
      });
    } else {
      setUserData((prevState: User) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editMode) {
      handleEditUser(userData);
    } else {
      const id = Date.now();
      setUsers({ ...userData, id: id });
    }

    if (!editMode) {
      setUserData({
        id: 0,
        username: "",
        age: 0,
        education: "",
        gender: "",
        skills: [],
        bio: "",
      });
    }
  };

  const handleDeleteClick = () => {
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

  return (
    <div>
      <h2>{editMode ? "Update User" : "Add User"}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Full Name:
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="age">
          Age:
          <input
            type="number"
            name="age"
            value={userData.age}
            onChange={handleChange}
          />
        </label>
        <div>
          <label htmlFor="education">Education:</label>
          <select
            name="education"
            id="education"
            value={userData.education}
            onChange={handleChange}
          >
            <option value="">Select your education</option>
            <option value="Grade school">Grade school</option>
            <option value="High school">High school</option>
            <option value="College">College</option>
          </select>
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            name="gender"
            id="gender"
            value={userData.gender}
            onChange={handleChange}
          >
            <option value="">Select your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>Skills:</label>
          <label htmlFor="skills-typescript">
            TypeScript
            <input
              type="checkbox"
              name="skills"
              id="skills-typescript"
              value="typescript"
              checked={userData.skills.includes("typescript")}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="skills-react">
            React
            <input
              type="checkbox"
              name="skills"
              id="skills-react"
              value="react"
              checked={userData.skills.includes("react")}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="skills-node">
            Node
            <input
              type="checkbox"
              name="skills"
              id="skills-node"
              value="node"
              checked={userData.skills.includes("node")}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="skills-nosql">
            NoSQL
            <input
              type="checkbox"
              name="skills"
              id="skills-nosql"
              value="nosql"
              checked={userData.skills.includes("nosql")}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="bio">Bio:</label>
          <textarea name="bio" value={userData.bio} onChange={handleChange} />
        </div>
        <button type="submit">{editMode ? "Save Changes" : "Add"}</button>
        <button type="button" onClick={handleDeleteClick}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default UserForm;
