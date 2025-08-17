import React, { useState, useRef, useEffect } from 'react';

const Filters = ({ filters, onFilterChange, sectors }) => {
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [openDateFrom, setOpenDateFrom] = useState(filters.openDateFrom || '');
  const [openDateTo, setOpenDateTo] = useState(filters.openDateTo || '');
  const [sector, setSector] = useState(filters.sector || '');

  const dateRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dateRef.current && !dateRef.current.contains(event.target)) {
        setIsDateOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleApplyFilters = () => {
    onFilterChange({
      openDateFrom,
      openDateTo,
      sector,
    });
    setIsDateOpen(false);
  };

  return (
    <div className="flex space-x-4 mb-6 items-center">
      <div className="relative" ref={dateRef}>
        <button
          onClick={() => setIsDateOpen(!isDateOpen)}
          className="bg-gray-100 rounded-full px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center space-x-2"
          aria-haspopup="true"
          aria-expanded={isDateOpen}
        >
          <span>Date</span>
          <svg
            className={`w-4 h-4 transform transition-transform ${isDateOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {isDateOpen && (
          <div className="absolute mt-2 bg-white rounded shadow-lg p-4 z-10 w-64">
            <label className="block mb-2 font-medium text-gray-700">From</label>
            <input
              type="date"
              value={openDateFrom}
              onChange={(e) => setOpenDateFrom(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full mb-4"
            />
            <label className="block mb-2 font-medium text-gray-700">To</label>
            <input
              type="date"
              value={openDateTo}
              onChange={(e) => setOpenDateTo(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full mb-4"
            />
            <button
              onClick={handleApplyFilters}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Apply
            </button>
          </div>
        )}
      </div>
      <div>
        <select
          value={sector}
          onChange={(e) => {
            setSector(e.target.value);
            onFilterChange({
              openDateFrom,
              openDateTo,
              sector: e.target.value,
            });
          }}
          className="bg-gray-100 rounded-full px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Filter by sector"
        >
          <option value="">Sector</option>
          {sectors.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
