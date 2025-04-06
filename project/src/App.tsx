import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Admission from './pages/Admission';
import Infrastructure from './pages/Infrastructure';
import Examination from './pages/Examination';
import Faculty from './pages/Faculty';
import Student from './pages/Student';
import Library from './pages/Library';
import Research from './pages/Research';
import Committees from './pages/Committees';
import Events from './pages/Events';
import Publications from './pages/Publications';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/courses', label: 'Courses' },
    { path: '/admission', label: 'Admission' },
    { path: '/infrastructure', label: 'Infrastructure' },
    { path: '/examination', label: 'Examination' },
    { path: '/faculty', label: 'Faculty' },
    { path: '/student', label: 'Student' },
    { path: '/library', label: 'Library' },
    { path: '/research', label: 'Research' },
    { path: '/committees', label: 'Committees' },
    { path: '/events', label: 'Events' },
    { path: '/publications', label: 'Publications' },
    { path: '/contact', label: 'Contact' },
    { path: '/faq', label: 'FAQ' },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Header - Full Width */}
        <header className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2">
  <div className="max-w-[2000px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
    
    {/* Left - Logo */}
    <div className="flex-shrink-0">
      <img 
        src="https://th.bing.com/th?q=Alva%27s+Education+Foundation+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247C:\Users\vinay\OneDrive\Desktop\m\project\src\logo.jpg" // Replace with actual logo path
        alt="Alvas Law College Logo" 
        className="h-14 w-auto" // Adjust height as needed
      />
    </div>

    {/* Center - College Name & Affiliations */}
    <div className="text-center md:flex-1">
      <h1 className="text-3xl font-bold mb-1">ALVAS LAW COLLEGE</h1>
      <p className="text-md">(A Unit of Alva's Education Foundation®) Affiliated To Karnataka State Law University</p>
      <p className="text-md">Approved by Bar Council of India, New Delhi</p>
    </div>

    {/* Right - Contact Details */}
    {/* Right - Contact Details (Aligned to Middle Right) */}
<div className="md:flex md:items-center md:justify-end text-right hidden md:block">
<div>
            <p>Smt. Sundari Ananda Alva <br/>Vidyagiri, Moodbidre, 574227</p>
            <p className="mt-2">College Office:7026041555</p>
            <p>Email:lawcollege@alvascollege.com</p>
          </div>
</div>


  </div>
</header>



        {/* Navigation - Full Width */}
        {/* Navigation - Full Width */}
{/* Navigation - Full Width */}
<nav className="w-full bg-white shadow-lg sticky top-0 z-50">
  <div className="max-w-[2000px] mx-auto px-4">
    <div className="flex justify-between items-center h-14">
      
      {/* Mobile Menu Button */}
      <div className="flex-shrink-0 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 hover:text-blue-900 p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Updated: Larger Navigation Links */}
      <div className="hidden md:flex md:items-center md:justify-start w-full space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="text-gray-700 hover:text-blue-900 hover:bg-gray-100 px-4 py-3 rounded-md text-lg font-semibold transition-colors duration-200"
          >
            {item.label}
          </Link>
        ))}
      </div>

    </div>

    {/* Mobile menu - Full Width */}
    {isOpen && (
      <div className="md:hidden w-full">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-gray-700 hover:text-blue-900 hover:bg-gray-100 block px-3 py-3 rounded-md text-lg font-semibold"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    )}
  </div>
</nav>


        {/* Main Content - Full Width */}
        <main className="w-full">
          <div className="max-w-[2000px] mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/infrastructure" element={<Infrastructure />} />
              <Route path="/examination" element={<Examination />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/student" element={<Student />} />
              <Route path="/library" element={<Library />} />
              <Route path="/research" element={<Research />} />
              <Route path="/committees" element={<Committees />} />
              <Route path="/events" element={<Events />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;