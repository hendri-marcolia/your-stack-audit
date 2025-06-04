import React from 'react';

interface DatabaseProps {
  name: string;
}

function Database({ name }: DatabaseProps) {
  return (
    <div className="database" style={{ border: '1px solid black', borderRadius: '5px', padding: '10px', margin: '5px', width: '100px', height: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h3>{name}</h3>
      {/* Add database specific content here */}
    </div>
  );
}

export default Database;
