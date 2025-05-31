import React from 'react';

interface ServerProps {
  name: string;
}

function Server({ name }: ServerProps) {
  return (
    <div className="server">
      <h3>{name}</h3>
      {/* Add server specific content here */}
    </div>
  );
}

export default Server;
