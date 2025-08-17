import React from 'react';

const IPOCard = ({ ipo, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow p-6 mb-6 cursor-pointer flex justify-between items-center hover:shadow-lg transition-shadow"
      onClick={() => onClick(ipo)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter') onClick(ipo);
      }}
      aria-label={`View details for ${ipo.companyName}`}
    >
      <div>
        <h2 className="text-xl font-bold mb-2">{ipo.companyName}</h2>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Open:</span> {ipo.openDate} | <span className="font-semibold">Close:</span> {ipo.closeDate}
        </p>
        <div className="flex space-x-8 text-sm text-gray-600">
          <div>
            <span className="font-semibold text-gray-800">Price Band</span>
            <div>{ipo.priceBand}</div>
          </div>
          <div>
            <span className="font-semibold text-gray-800">Lot Size</span>
            <div>{ipo.lotSize}</div>
          </div>
        </div>
      </div>
      <button
        className="ml-6 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={(e) => {
          e.stopPropagation();
          alert(`Applying for IPO: ${ipo.companyName}`);
        }}
        aria-label={`Apply now for ${ipo.companyName}`}
      >
        Apply Now
      </button>
    </div>
  );
};

export default IPOCard;
