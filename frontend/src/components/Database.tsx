import React from 'react';

interface DatabaseProps {
  name: string;
}

function Database({ name }: DatabaseProps) {
  return (
    <div className="database">
      <h3>{name}</h3>
      {/* Add database specific content here */}
    </div>
  );
}

export default Database;
