
import React, { useState, useEffect } from 'react';

const images = [
  "https://th.bing.com/th/id/OIP.v1bmgeTVYBjlI_H-rZJEtAHaDd?w=314&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "https://th.bing.com/th/id/OIP.WBGSGHGSGgonWvgJgtTS2AHaEK?w=300&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  "https://th.bing.com/th/id/OIP.qv4xS0p3evf7GGiI259vrgHaE8?w=303&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7"
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section with Slideshow */}
      <section className="relative h-[800px]">
        <div className="absolute inset-0 w-full h-full flex transition-transform duration-1000 ease-in-out transform translate-x-0 animate-slide">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Law College Building"
              className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide">
              Welcome to Alvas Law College
            </h1>
            <p className="text-xl md:text-2xl">Shaping Tomorrow's Legal Professionals</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="my-16 px-8 animate__animated animate__fadeIn animate__delay-2s">
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8 hover:scale-105 transition duration-500">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">About Alvas Law College</h2>
            <p className="text-gray-700 mb-4">
              Alvas Law College, situated in the serene environment of Moodbidri, is committed to delivering excellence in legal education...
            </p>
            <a href="/about" className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              Read More
            </a>
          </div>
          <img
            src="https://th.bing.com/th/id/OIP.v1bmgeTVYBjlI_H-rZJEtAHaDd?w=314&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="About Alvas"
            className="md:w-1/2 w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="bg-white shadow-lg rounded-lg my-16 animate__animated animate__fadeIn animate__delay-3s">
        <div className="flex flex-col md:flex-row items-center gap-8 p-6 hover:scale-105 transition duration-500">
          <img
            src="https://th.bing.com/th/id/OIP.ongA_L7tkmxrviqYunD8qQHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Chairman"
            className="md:w-1/2 w-full rounded-lg shadow-lg border-4 border-gray-400"
          />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Chairman's Message</h2>
            <p className="text-gray-700 mb-4">
              Legal education plays a fundamental role in shaping a civilized, just and progressive society...
            </p>
            <p className="mt-4 font-semibold">Dr. MOHAN ALVA, Chairman</p>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="bg-white shadow-lg rounded-lg my-16 animate__animated animate__fadeIn animate__delay-4s">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 p-6 hover:scale-105 transition duration-500">
          <img
            src="https://th.bing.com/th/id/OIP.9vgvnrKbmjeA4lsDAKcogQHaJf?w=192&h=267&c=7&r=0&o=5&pid=1.7"
            alt="Principal"
            className="md:w-1/2 w-full rounded-lg shadow-lg border-4 border-gray-400"
          />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Principal's Message</h2>
            <p className="text-gray-700 mb-4">
              Welcome to Alva’s Law College, a distinguished institution dedicated to academic excellence...
            </p>
            <p className="mt-4 font-semibold">Mahantesh G S, Principal</p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="bg-white shadow-lg rounded-lg my-16 animate__animated animate__fadeIn animate__delay-5s">
        <div className="text-center p-6">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Courses & Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border p-4 rounded-lg shadow-lg">
              <h3 className="font-semibold text-gray-700">BA LLB (5 Years)</h3>
              <p>Comprehensive undergraduate program in Law.</p>
            </div>
            <div className="border p-4 rounded-lg shadow-lg">
              <h3 className="font-semibold text-gray-700">LLM (2 Years)</h3>
              <p>Advanced postgraduate program in Law.</p>
            </div>
            <div className="border p-4 rounded-lg shadow-lg">
              <h3 className="font-semibold text-gray-700">Diploma in Cyber Law</h3>
              <p>Specialized diploma program for technology and law enthusiasts.</p>
            </div>
          </div>
        </div>
      </section>

       {/* About Section */}
       <section className="my-16 px-8 animate__animated animate__fadeIn animate__delay-2s">
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8 hover:scale-105 transition duration-500">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Admission</h2>
            <p className="text-gray-700 mb-4">
              Alvas Law College, situated in the serene environment of Moodbidri, is committed to delivering excellence in legal education...
            </p>
            <a href="/admission" className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              Read More
            </a>
          </div>
          <img
            src="https://th.bing.com/th/id/OIP.v1bmgeTVYBjlI_H-rZJEtAHaDd?w=314&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="About Alvas"
            className="md:w-1/2 w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

       {/* About Section */}
       <section className="my-16 px-8 animate__animated animate__fadeIn animate__delay-2s">
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8 hover:scale-105 transition duration-500">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Infrastructure</h2>
            <p className="text-gray-700 mb-4">
              Alvas Law College, situated in the serene environment of Moodbidri, is committed to delivering excellence in legal education...
            </p>
            <a href="/about" className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              Read More
            </a>
          </div>
          <img
            src="https://th.bing.com/th/id/OIP.v1bmgeTVYBjlI_H-rZJEtAHaDd?w=314&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="About Alvas"
            className="md:w-1/2 w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-10 px-4">
        <div className="max-w-[2000px] mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <p>Smt. Sundari Ananda Alva Campus,<br/>Vidyagiri, Moodbidre,<br/>Dakshina Kannada, 574227,<br/>Karnataka, India</p>
            <p className="mt-2">College Office: 7026041555</p>
            <p>Email: lawcollege@alvascollege.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-2">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="/courses" className="hover:text-blue-400">Courses</a></li>
              <li><a href="/faculty" className="hover:text-blue-400">Facilities</a></li>
              <li><a href="/publications" className="hover:text-blue-400">Publications</a></li>
              <li><a href="/committees" className="hover:text-blue-400">Committees</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Admission Links */}
          <div>
            <h2 className="text-xl font-bold mb-2">Admission</h2>
            <ul className="space-y-2">
              <li><a href="/admission" className="hover:text-blue-400">Eligibility</a></li>
              <li><a href="/admission-procedure" className="hover:text-blue-400">Admission Procedure</a></li>
              <li><a href="/scholarship" className="hover:text-blue-400">Scholarship</a></li>
              <li><a href="/results" className="hover:text-blue-400">Results</a></li>
              <li><a href="/rules" className="hover:text-blue-400">Rules of Discipline & Conduct</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400">
          Alvas Law College, Affiliated to Karnataka State Law University, and Approved by Bar Council of India, New Delhi.
        </div>
      </footer>
    </div>
  );
}

export default Home;
