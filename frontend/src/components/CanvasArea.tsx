import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Server from './Server.tsx';
import Database from './Database.tsx';
import Firewall from './Firewall.tsx';

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
      {components.map((component, index) => {
        switch (component.name) {
          case 'Server':
            return <Server key={index} name={component.name} />;
          case 'Database':
            return <Database key={index} name={component.name} />;
          case 'Firewall':
            return <Firewall key={index} name={component.name} />;
          default:
            return <div key={index}>{component.name}</div>;
        }
      })}
    </div>
  );
}

export default CanvasArea;
