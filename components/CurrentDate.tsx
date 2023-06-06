import React from 'react';

const CurrentDate: React.FC = () => {
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(currentDate);

  return (
    <div className="border border-gray-300 rounded-lg p-4 w-64 bg-white shadow-md">
    <p className=" p-4 text-center text-lg font-semibold text-gray-800 mb-2">{formattedDate}</p>
    <div className=" p-4 grid grid-cols-7 gap-2">
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
        <p key={day} className=" w-4 text-center text-sm font-semibold text-gray-600">{day}</p>
      ))}
      {Array.from({ length: 35 }, (_, i) => (
        <div key={i} className="border w-16 border-gray-300 p-2 text-center text-sm font-semibold text-gray-800 hover:border-purple-900 hover:text-purple-900 hover:cursor-pointer">
          {i + 1}
        </div>
      ))}
    </div>
  </div>

  );
};

export default CurrentDate;
