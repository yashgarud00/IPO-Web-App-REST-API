import React, { useState, useEffect } from 'react';
import ipoData from '../utils/ipoData';

const AdminDashboard = () => {
  const [ipos, setIpos] = useState([]);
  const [form, setForm] = useState({
    id: null,
    companyName: '',
    openDate: '',
    closeDate: '',
    priceBand: '',
    lotSize: '',
    sector: '',
    rhpLink: '',
    drhpLink: '',
    description: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Load IPO data from local storage or fallback to static data
    const storedIpos = localStorage.getItem('ipos');
    if (storedIpos) {
      setIpos(JSON.parse(storedIpos));
    } else {
      setIpos(ipoData);
    }
  }, []);

  const saveToLocalStorage = (data) => {
    localStorage.setItem('ipos', JSON.stringify(data));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    const newIpo = { ...form, id: Date.now() };
    const updatedIpos = [...ipos, newIpo];
    setIpos(updatedIpos);
    saveToLocalStorage(updatedIpos);
    setForm({
      id: null,
      companyName: '',
      openDate: '',
      closeDate: '',
      priceBand: '',
      lotSize: '',
      sector: '',
      rhpLink: '',
      drhpLink: '',
      description: '',
    });
  };

  const handleEdit = (ipo) => {
    setForm(ipo);
    setIsEditing(true);
  };

  const handleUpdate = () => {
    const updatedIpos = ipos.map((ipo) => (ipo.id === form.id ? form : ipo));
    setIpos(updatedIpos);
    saveToLocalStorage(updatedIpos);
    setForm({
      id: null,
      companyName: '',
      openDate: '',
      closeDate: '',
      priceBand: '',
      lotSize: '',
      sector: '',
      rhpLink: '',
      drhpLink: '',
      description: '',
    });
    setIsEditing(false);
  };

  const handleDelete = (id) => {
    const updatedIpos = ipos.filter((ipo) => ipo.id !== id);
    setIpos(updatedIpos);
    saveToLocalStorage(updatedIpos);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">IPO Admin Dashboard</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">{isEditing ? 'Edit IPO' : 'Add New IPO'}</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            isEditing ? handleUpdate() : handleAdd();
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={form.companyName}
            onChange={handleInputChange}
            required
            className="border p-2 rounded"
          />
          <input
            type="date"
            name="openDate"
            placeholder="Open Date"
            value={form.openDate}
            onChange={handleInputChange}
            required
            className="border p-2 rounded"
          />
          <input
            type="date"
            name="closeDate"
            placeholder="Close Date"
            value={form.closeDate}
            onChange={handleInputChange}
            required
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="priceBand"
            placeholder="Price Band"
            value={form.priceBand}
            onChange={handleInputChange}
            required
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="lotSize"
            placeholder="Lot Size"
            value={form.lotSize}
            onChange={handleInputChange}
            required
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="sector"
            placeholder="Sector"
            value={form.sector}
            onChange={handleInputChange}
            required
            className="border p-2 rounded"
          />
          <input
            type="url"
            name="rhpLink"
            placeholder="RHP PDF Link"
            value={form.rhpLink}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="url"
            name="drhpLink"
            placeholder="DRHP PDF Link"
            value={form.drhpLink}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleInputChange}
            className="border p-2 rounded col-span-1 md:col-span-2"
          />
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {isEditing ? 'Update IPO' : 'Add IPO'}
            </button>
            {isEditing && (
              <button
                type="button"
                onClick={() => {
                  setForm({
                    id: null,
                    companyName: '',
                    openDate: '',
                    closeDate: '',
                    priceBand: '',
                    lotSize: '',
                    sector: '',
                    rhpLink: '',
                    drhpLink: '',
                    description: '',
                  });
                  setIsEditing(false);
                }}
                className="ml-4 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Existing IPOs</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Company Name</th>
              <th className="border border-gray-300 p-2">Open Date</th>
              <th className="border border-gray-300 p-2">Close Date</th>
              <th className="border border-gray-300 p-2">Sector</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ipos.map((ipo) => (
              <tr key={ipo.id}>
                <td className="border border-gray-300 p-2">{ipo.companyName}</td>
                <td className="border border-gray-300 p-2">{ipo.openDate}</td>
                <td className="border border-gray-300 p-2">{ipo.closeDate}</td>
                <td className="border border-gray-300 p-2">{ipo.sector}</td>
                <td className="border border-gray-300 p-2">
                  <button
                    onClick={() => handleEdit(ipo)}
                    className="mr-2 px-2 py-1 bg-yellow-400 rounded hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(ipo.id)}
                    className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {ipos.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  No IPOs available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
