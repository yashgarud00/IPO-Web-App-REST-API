import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';

const UpcomingIPO = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    openDateFrom: '',
    openDateTo: '',
    sector: '',
  });

  const ipoList = [
    {
      id: 1,
      companyName: 'TechCorp Solutions',
      openDate: '2024-07-15',
      closeDate: '2024-07-17',
      priceBand: '₹250-270',
      lotSize: 50,
      sector: 'Technology',
    },
    {
      id: 2,
      companyName: 'GreenEnergy Ltd.',
      openDate: '2024-07-20',
      closeDate: '2024-07-22',
      priceBand: '₹180-200',
      lotSize: 75,
      sector: 'Energy',
    },
    {
      id: 3,
      companyName: 'HealthPlus Inc.',
      openDate: '2024-07-25',
      closeDate: '2024-07-27',
      priceBand: '₹300-320',
      lotSize: 40,
      sector: 'Healthcare',
    },
    {
      id: 4,
      companyName: 'EduFuture Group',
      openDate: '2024-08-01',
      closeDate: '2024-08-03',
      priceBand: '₹150-170',
      lotSize: 60,
      sector: 'Education',
    },
    {
      id: 5,
      companyName: 'RetailMart Co.',
      openDate: '2024-08-05',
      closeDate: '2024-08-07',
      priceBand: '₹200-220',
      lotSize: 55,
      sector: 'Retail',
    },
  ];

  const sectors = ['Technology', 'Energy', 'Healthcare', 'Education', 'Retail'];

  const filteredIPOs = ipoList.filter((ipo) => {
    const matchesSearch = ipo.companyName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = filters.sector ? ipo.sector === filters.sector : true;
    const matchesDateFrom = filters.openDateFrom ? ipo.openDate >= filters.openDateFrom : true;
    const matchesDateTo = filters.openDateTo ? ipo.closeDate <= filters.openDateTo : true;
    return matchesSearch && matchesSector && matchesDateFrom && matchesDateTo;
  });

  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Upcoming IPOs</h1>
      <p className="text-gray-600 mb-6">Explore and apply for upcoming Initial Public Offerings</p>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <Filters filters={filters} onFilterChange={handleFilterChange} sectors={sectors} />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6">Company</th>
              <th className="py-3 px-6">IPO Open</th>
              <th className="py-3 px-6">IPO Close</th>
              <th className="py-3 px-6">Price Band</th>
              <th className="py-3 px-6">Lot Size</th>
              <th className="py-3 px-6">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {filteredIPOs.map((ipo) => (
              <tr key={ipo.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 whitespace-nowrap">{ipo.companyName}</td>
                <td className="py-3 px-6 whitespace-nowrap text-blue-600">{ipo.openDate}</td>
                <td className="py-3 px-6 whitespace-nowrap text-blue-600">{ipo.closeDate}</td>
                <td className="py-3 px-6 whitespace-nowrap">{ipo.priceBand}</td>
                <td className="py-3 px-6 whitespace-nowrap">{ipo.lotSize}</td>
                <td className="py-3 px-6 whitespace-nowrap">
                  <button className="text-blue-600 font-semibold hover:underline focus:outline-none">
                    Apply Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpcomingIPO;
