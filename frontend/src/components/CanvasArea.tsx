import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

interface DroppedComponentProps {
  name: string;
}

function CanvasArea() {
  const [components, setComponents] = useState<DroppedComponentProps[]>([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'component',
    drop: (item: any) => {
      setComponents(prevComponents => [...prevComponents, item]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className="canvas-area"
      style={{
        backgroundColor: isOver ? 'lightgreen' : 'white',
      }}
    >
      <h2>Canvas Area</h2>
      {components.map((component, index) => (
        <div key={index}>{component.name}</div>
      ))}
    </div>
  );
}

export default CanvasArea;
