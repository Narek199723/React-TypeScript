import React, { useState, useRef, useEffect } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 21 },
  { name: "Michael", age: 22 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  // ^  Here we are using Type Unions, basically what we say is our user is going to get a value or an object or an undefined
  const [user, setUser] = useState<{ name: String; age: number } | undefined>();

  // &  this what we need to do to be able to use typescript with useRef, TS doesn't know that we are going to use this with a jsx so that's why when it renders afterwards it comes and checks this, so we need to define a html... and then initially give it a value of null so it will understand that we are planning to do something
  // ^  So here TS things that we won't assign a value with it and it will be a null , so that's why we need to work a little bit more with it 
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // ^  Here it things that inputRef.current can be a null so we should use guard clause 
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
    console.log(foundUser);
  };

  return (
    <div>
      User Search
      <input
        ref={inputRef}
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
