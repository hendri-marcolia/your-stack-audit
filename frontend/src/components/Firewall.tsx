import React from 'react';

interface FirewallProps {
  name: string;
}

function Firewall({ name }: FirewallProps) {
  return (
    <div className="firewall" style={{ border: '1px solid black', borderRadius: '5px', padding: '10px', margin: '5px', width: '100px', height: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h3>{name}</h3>
      {/* Add firewall specific content here */}
    </div>
  );
}

export default Firewall;
