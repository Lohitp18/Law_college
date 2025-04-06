import React from 'react';

function Library() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Library</h1>

      <div className="w-full bg-gray-100 p-6 rounded-lg shadow-md">
        <p className="text-gray-700 mb-4">
          Alva’s Law College Library is a <strong>7,500 sq. ft.</strong> facility dedicated to supporting law faculty and students. 
          It houses <strong>928 books</strong>, including <strong>176 reference books</strong>, along with <strong>12 journals, 7 magazines,</strong> and <strong>6 newspapers</strong>.
          The library is fully automated using Easylib software and is affiliated with the 
          <strong> National Digital Library of India, DELNET,</strong> and <strong>INFLIBNET-NLIST.</strong>
        </p>

        <h2 className="text-xl font-semibold mb-2">Key Services</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Book lending (12-day loan period for textbooks)</li>
          <li>Reference services</li>
          <li>Newspaper clippings</li>
          <li>Internet and digital resource access</li>
          <li>Manupatra, INFLIBNET & DELNET access</li>
          <li>Orientation programs and book reservations</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Operating Hours</h2>
        <ul className="list-disc pl-6">
          <li><strong>Monday to Friday:</strong> 9:00 AM – 5:00 PM</li>
          <li><strong>Closed:</strong> Sundays and selected holidays</li>
        </ul>
      </div>
    </div>
  );
}

export default Library;
