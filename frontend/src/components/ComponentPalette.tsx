import React from 'react';
import { useDrag } from 'react-dnd';

interface ComponentProps {
  name: string;
}

interface PaletteItemProps extends ComponentProps {
  onAddComponent: (component: ComponentProps) => void;
}


function PaletteItem({ name, onAddComponent }: PaletteItemProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'component',
    item: { name },
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        onAddComponent(item as ComponentProps);
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <button
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    >
      {name}
    </button>
  );
}

interface ComponentPaletteProps {
  onAddComponent: (component: ComponentProps) => void;
}

function ComponentPalette({ onAddComponent }: ComponentPaletteProps) {
  const components: ComponentProps[] = [
    { name: 'Server' },
    { name: 'Database' },
    { name: 'Firewall' },
  ];

  return (
    <div className="component-palette">
      <h2>Component Palette</h2>
      {components.map(component => (
        <PaletteItem
          key={component.name}
          name={component.name}
          onAddComponent={onAddComponent}
        />
      ))}
    </div>
  );
}

export default ComponentPalette;
