import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-blue-700 mb-4">
        Healthcare Platform
      </h1>

      <p className="text-xl text-gray-700">
        Book appointments with expert doctors.
      </p>

      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
        Get Started
      </button>
    </div>
  );
};

export default Home;