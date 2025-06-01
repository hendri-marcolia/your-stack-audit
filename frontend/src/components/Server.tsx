import React from 'react';

interface ServerProps {
  name: string;
}

function Server({ name }: ServerProps) {
  return (
    <div className="server" style={{ border: '1px solid black', borderRadius: '5px', padding: '10px', margin: '5px', width: '100px', height: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h3>{name}</h3>
      {/* Add server specific content here */}
    </div>
  );
}

export default Server;
