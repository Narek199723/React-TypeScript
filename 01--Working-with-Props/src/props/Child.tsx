// ^  Here we are describing all props that we are going to receive
interface ChildProps {
  color: string;
}

export const Child = ({ color }: ChildProps) => {
  return <div> {color} </div>;
};
