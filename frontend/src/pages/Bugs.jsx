// src/pages/Bugs.jsx
import React, { useEffect, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

const Bugs = () => {
  const [bugs, setBugs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBugs = async () => {
      try {
        const res = await fetch(`${API_URL}/bugs`);
        const data = await res.json();
        setBugs(data);
      } catch (err) {
        console.error('Error fetching bugs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBugs();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Bugs</h2>
      <ul>
        {bugs.map((bug) => (
          <li key={bug._id} className="mb-2 border-b pb-2">
            <strong>{bug.title}</strong>: {bug.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bugs;
