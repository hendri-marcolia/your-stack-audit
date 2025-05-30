import React from 'react';

interface FirewallProps {
  name: string;
}

function Firewall({ name }: FirewallProps) {
  return (
    <div className="firewall">
      <h3>{name}</h3>
      {/* Add firewall specific content here */}
    </div>
  );
}

export default Firewall;
