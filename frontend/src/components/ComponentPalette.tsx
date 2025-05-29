import React from 'react';

function ComponentPalette() {
  const components = ['Server', 'Database', 'Firewall'];

  return (
    <div className="component-palette">
      <h2>Component Palette</h2>
      {components.map(component => (
        <button key={component}>{component}</button>
      ))}
    </div>
  );
}

export default ComponentPalette;
