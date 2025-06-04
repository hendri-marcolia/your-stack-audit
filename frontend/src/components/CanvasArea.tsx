import React, { useState, useCallback } from 'react';
import { useDrop, useDrag } from 'react-dnd';

interface DroppedComponentProps {
  id: string;
  name: string;
  x: number;
  y: number;
}

interface DraggableComponentProps {
  component: DroppedComponentProps;
}

function DraggableComponent({ component }: DraggableComponentProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'component',
    item: component,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        border: '1px solid blue',
        padding: '10px',
        margin: '5px',
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        position: 'absolute',
        left: component.x,
        top: component.y,
      }}
    >
      {component.name}
    </div>
  );
}

function CanvasArea() {
  const [components, setComponents] = useState<DroppedComponentProps[]>([]);

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: 'component',
      drop: (item: any, monitor) => {
        const delta = monitor.getClientOffset();
        if (delta) {
          const canvas = document.querySelector('.canvas-area');
          if (canvas) {
            const rect = canvas.getBoundingClientRect();
            const left = Math.round(delta.x - rect.left);
            const top = Math.round(delta.y - rect.top);
            setComponents(prevComponents => {
              const existingComponentIndex = prevComponents.findIndex(c => c.id === item.id);
              if (existingComponentIndex > -1) {
                const updatedComponents = [...prevComponents];
                updatedComponents[existingComponentIndex] = { ...updatedComponents[existingComponentIndex], x: left, y: top };
                return updatedComponents;
              } else {
                return [...prevComponents, { ...item, id: Math.random().toString(), x: left, y: top }];
              }
            });
          }
        }
        return undefined;
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [components]
  );

  return (
    <div
      ref={drop}
      className="canvas-area"
      style={{
        backgroundColor: isOver ? 'lightgreen' : 'white',
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <h2>Canvas Area</h2>
      {components.map((component) => (
        <DraggableComponent key={component.id} component={component} />
      ))}
    </div>
  );
}

export default CanvasArea;
