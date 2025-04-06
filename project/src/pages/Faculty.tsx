import React from "react";

const facultyMembers = [
  // Teaching Faculty
  {
    name: "Mahantesh G S (Principal)",
    qualification: "B.Com, LLM, (Ph.D), SLET",
    image: "/images/mahantesh.jpg",
    role: "Teaching Faculty",
  },
  {
    name: "Mamatha R (Faculty in Law)",
    qualification: "B.A, LLM, MBA, (Ph.D), NET, SLET",
    image: "/images/mamatha.jpg",
    role: "Teaching Faculty",
  },
  {
    name: "Amritha J (Faculty in Law)",
    qualification: "BBA, LLM",
    image: "/images/amritha.jpg",
    role: "Teaching Faculty",
  },
  {
    name: "Shruthi Hegde (Faculty in Law)",
    qualification: "B.A LLM",
    image: "/images/shruthi.jpg",
    role: "Teaching Faculty",
  },
  {
    name: "Pushpalatha (Faculty in Commerce)",
    qualification: "M.COM, MBA, NET, SLET, M.Ed",
    image: "/images/pushpalatha.jpg",
    role: "Teaching Faculty",
  },
  {
    name: "Akshatha Jain (Faculty in Commerce)",
    qualification: "M.COM, B.Ed",
    image: "/images/akshatha.jpg",
    role: "Teaching Faculty",
  },
  {
    name: "Deeshma (Faculty in English)",
    qualification: "M.A in English",
    image: "/images/deeshma.jpg",
    role: "Teaching Faculty",
  },
  {
    name: "Prashanth Kumar M D (Faculty in Economics)",
    qualification: "MA in Economics, M.Phil",
    image: "/images/prashanth.jpg",
    role: "Teaching Faculty",
  },
  {
    name: "Venugopal (Faculty in Kannada)",
    qualification: "M.A in Kannada",
    image: "/images/venugopal.jpg",
    role: "Teaching Faculty",
  },
  {
    name: "Thilak Shetty (Physical Director)",
    qualification: "B.A, M.P.Ed",
    image: "/images/thilak.jpg",
    role: "Teaching Faculty",
  },

  // Non-Teaching Faculty
  {
    name: "Shyamalatha",
    qualification: "Chief Librarian",
    image: "/images/shyamalatha.jpg",
    role: "Non-Teaching Faculty",
  },
  {
    name: "Deepak Naik",
    qualification: "Assistant Librarian (M.Lib.I.Sc)",
    image: "/images/deepak.jpg",
    role: "Non-Teaching Faculty",
  },
  {
    name: "Swathi",
    qualification: "Office Superintendent",
    image: "/images/swathi.jpg",
    role: "Non-Teaching Faculty",
  },
];

function Faculty() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Faculty</h1>

      {/* Teaching Faculty Section */}
      <div className="w-full bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Teaching Faculty</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyMembers
            .filter((member) => member.role === "Teaching Faculty")
            .map((faculty, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-bold">{faculty.name}</h3>
                <p className="text-gray-600">{faculty.qualification}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Non-Teaching Faculty Section */}
      <div className="w-full bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Non-Teaching Faculty</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyMembers
            .filter((member) => member.role === "Non-Teaching Faculty")
            .map((faculty, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-bold">{faculty.name}</h3>
                <p className="text-gray-600">{faculty.qualification}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Faculty;
