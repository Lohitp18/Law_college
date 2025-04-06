import React from 'react';

function Infrastructure() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Infrastructure</h1>

      {/* Moot Court Section */}
      <div className="w-full bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Moot Court</h2>
        <p className="text-gray-700">
          Moot Court exercises are an integral part of the curriculum, designed to equip students with essential skills 
          such as legal writing, argumentation, courtroom etiquette, and effective communication. These exercises provide 
          hands-on experience in various legal scenarios and are regularly conducted in state-of-the-art facilities specifically 
          designed for this purpose.
        </p>
      </div>

      {/* Library Section */}
      <div className="w-full bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Library</h2>
        <p className="text-gray-700">
          Alva's Law College Library, spanning approximately 7,500 square feet, houses 928 titles, including 176 reference 
          books, 12 journals, 7 magazines, and 6 newspapers. The library's spacious and well-furnished reading areas create 
          a conducive atmosphere for academic endeavors. Equipped with modern amenities and a fully automated system via 
          Easylib software, it ensures efficient access to its extensive resources. Institutional memberships with the 
          National Digital Library of India, DELNET, and INFLIBNET-NLIST further enhance its offerings.
        </p>
        <p className="mt-4 font-semibold">Operating Hours:</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Monday to Friday: 9:00 AM – 5:00 PM</li>
          <li>Closed on Sundays and selected holidays</li>
        </ul>
      </div>
    </div>
  );
}

export default Infrastructure;
