import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <div>
      <ChildAsFC color="red" onClick={() => console.log("Clicked")}>
        aaaaaaaaaaaaaaa
      </ChildAsFC>
    </div>
  );
};

export default Parent;
