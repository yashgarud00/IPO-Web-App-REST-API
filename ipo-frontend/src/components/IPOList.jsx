import React from 'react';
import IPOCard from './IPOCard';

const IPOList = ({ ipos, onIpoClick }) => {
  if (ipos.length === 0) {
    return <p className="text-center text-gray-500">No IPOs found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {ipos.map((ipo) => (
        <IPOCard key={ipo.id} ipo={ipo} onClick={onIpoClick} />
      ))}
    </div>
  );
};

export default IPOList;
