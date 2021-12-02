// ^  Here we are describing all props that we are going to receive
interface ChildProps {
  color: string;
  onClick: () => void; //& void means that we are not expecting to get any useful value back
  // children: string; //& this is for children props
}

// &  Method number 1
// ^  This is the first way of defining typescript, but here typescript understands only JS, it doesn't know whether it is React or JS, so we should help TS look at the 2nd approach
// *  When we use this method we will not be able to use props.children unless we define it in the interface
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color} <button onClick={onClick}>Click me </button>
    </div>
  );
};

// & Method number 2
// ^ This is the way of helping TS understand that this is a React Component not JS
// *  So here we are telling TS that this is going to be a specifically React Component, also we are telling that This react component will receive props of type ChildProps which is written in an <> tag
// *  when we are using this approach we are telling TS that this is a react component so it understands that we can get a children props
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me </button>
    </div>
  );
};
