import React, { useState } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 21 },
  { name: "Michael", age: 22 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  // ^  Here we are using Type Unions, basically what we say is our user is going to get a value or an object or an undefined
  const [user, setUser] = useState<{ name: String; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
    console.log(foundUser);
  };
  return (
    <div>
      User Search
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>{user?.name}</div>
      <div>{user?.age}</div>
    </div>
  );
};

export default UserSearch;
