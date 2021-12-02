// ^  Here we are describing all props that we are going to receive
interface ChildProps {
  color: string;
}

// ^  This is the first way of defining typescript, but here typescript understands only JS, it doesn't know whether it is React or JS, so we should help TS look at the 2nd approach
export const Child = ({ color }: ChildProps) => {
  return <div> {color} </div>;
};

// ^ This is the way of helping TS understand that this is a React Component not JS
// *  So here we are telling TS that this is going to be a specifically React Component, also we are telling that This react component will receive props of type ChildProps which is written in an <> tag
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};
