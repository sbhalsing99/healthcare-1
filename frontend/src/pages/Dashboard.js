import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        Patient Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold">Appointments</h2>
          <p className="text-4xl mt-4">12</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold">Doctors</h2>
          <p className="text-4xl mt-4">8</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold">Reports</h2>
          <p className="text-4xl mt-4">4</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;