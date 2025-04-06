import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-blue-50">

      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
      
      <div className="space-y-8">
        {/* AEF Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 pr-6">
            <h2 className="text-xl font-semibold mb-4">AEF - About Alva’s Education Foundation</h2>
            <p className="text-gray-700">
              Dr. M Mohan Alva set up an Ayurvedic clinic in Moodubidire in 1980...
            </p>
          </div>
          <img src="data:image/jpeg;base64,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" alt="AEF" className="md:w-1/3 rounded-lg" />
        </div>

        {/* Alva’s Law College Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-center">Alva’s Law College</h2>
          <p className="text-gray-700">
            Keeping in mind the wholesome development of the students, the college gives preference to the following activities.
          </p>
          <h3 className="text-lg font-semibold mt-4">Dheemkita Yakshagana Study Center</h3>
          <p>The center teaches Thenku Thittu and Badagu Thittu Yakshagana forms...</p>
          <h3 className="text-lg font-semibold mt-4">Alva’s Theater Study Center</h3>
          <p>This center is dedicated to theater studies and aims to train students in acting...</p>
          <h3 className="text-lg font-semibold mt-4">Alva’s Samskrithika Vaibhava</h3>
          <p>A three-hour cultural performance by well-trained student artists of Alva’s...</p>
          <h3 className="text-lg font-semibold mt-4">Alva’s Nudisiri & Alva’s Virasat</h3>
          <p>Two national-level festivals celebrating literature, art, and culture...</p>
          <h3 className="text-lg font-semibold mt-4">Performing Arts Study Center</h3>
          <p>Focuses on the performing arts of Manipur, Orissa, and Sri Lanka...</p>
        </div>

        {/* Law College Section with Image */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 pr-6">
            <h2 className="text-xl font-semibold mb-4">Alva’s Law College</h2>
            <p className="text-gray-700">
              Alva’s Law College, Moodbidri, established in 2024, is a premier institution...
            </p>
          </div>
          <img src="https://source.unsplash.com/300x200/?law,justice" alt="Law College" className="md:w-1/3 rounded-lg" />
        </div>

        {/* Vision & Mission */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Vision & Mission</h2>
          <h3 className="text-lg font-semibold">Vision:</h3>
          <ul className="list-disc pl-6 mt-2">
            <li>"To inspire and empower future legal professionals..."</li>
            <li>Alva’s Law College envisions becoming a center of excellence...</li>
            <li>Committed to holistic education...</li>
          </ul>
          <h3 className="text-lg font-semibold mt-4">Mission:</h3>
          <ul className="list-disc pl-6 mt-2">
            <li>To provide quality legal education...</li>
            <li>To cultivate ethical, socially responsible graduates...</li>
            <li>To foster a research-oriented academic environment...</li>
          </ul>
        </div>

        {/* Principal's Message Section with Image */}
       
      </div>
    </div>
  );
}

export default About;
