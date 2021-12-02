import React from "react";

const EventComponent: React.FC = () => {
  // & We can't use normal react way of solving this because in jsx TS works normally but here in a function onChange we have to manually define a type of a event object
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log("I am being dragged");
    console.log(event);
  };
  return (
    <div>
      {/* //^ Here we won't get any error message */}
      <input type="text" onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
