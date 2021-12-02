import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState(""); //& the type of name is going to be a string
  // const [guests, setGuests] = useState([]); //& the type of guests is never[]
  // ^  Here we are telling TS that our guests is going to be an array of strings
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setGuests([...guests, name]);
    setName("");
  };

  return (
    <div>
      <h3> Guest List</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}> Add Guest </button>
    </div>
  );
};
export default GuestList;
