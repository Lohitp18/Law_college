import React from 'react';

function Committees() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Committees</h1>

      <div className="space-y-8">

        {/* Legal Aid Cell */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Legal Aid Cell</h2>
          <p className="text-gray-700 mb-4">
            A legal aid cell is established in educational institutions to provide free legal assistance and support 
            to individuals who lack the financial resources to access justice.
          </p>
          <h3 className="font-semibold">Objectives:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Access to justice</li>
            <li>Legal awareness</li>
            <li>Educate individuals about their legal rights and available remedies</li>
            <li>Support for dispute resolution through mediation or litigation</li>
          </ul>
          <h3 className="font-semibold">Members:</h3>
          <ul className="pl-6">
            <li>Prof. Mahanthesh G S - Chairperson</li>
            <li>Advocate Sarol Arun Bangera - Advocate</li>
            <li>Advocate Harish - Moodbidri Bar Association</li>
            <li>Prof. Mamtha R - Professor</li>
            <li>Swathi - Office Assistant</li>
          </ul>
        </div>

        {/* Human Rights Committee */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Human Rights Committee</h2>
          <h3 className="font-semibold">Objectives:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Promote human rights awareness</li>
            <li>Provide redressal mechanisms</li>
            <li>Educate individuals about their fundamental rights</li>
            <li>Promote equality and eliminate discrimination</li>
          </ul>
          <h3 className="font-semibold">Members:</h3>
          <ul className="pl-6">
            <li>Prof. Mahanthesh G S - Chairperson</li>
            <li>Advocate Sarol Arun Bangera - Member</li>
            <li>Prof. Amrutha - Member</li>
            <li>Prof. Prashanth - Member</li>
            <li>Prof. Pushpalatha - Coordinator</li>
          </ul>
        </div>

        {/* Grievance Redressal Cell */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Grievance Redressal Cell</h2>
          <h3 className="font-semibold">Objectives:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide a platform for female students to voice grievances</li>
            <li>Prevent harassment and misconduct</li>
            <li>Educate students about gender sensitivity and women’s rights</li>
            <li>Handle grievances discreetly and confidentially</li>
          </ul>
          <h3 className="font-semibold">Members:</h3>
          <ul className="pl-6">
            <li>Prof. Mamatha R - Senior Faculty</li>
            <li>Prof. Shruthi - Faculty</li>
            <li>Prof. Mookambika - NAAC Coordinator</li>
            <li>Prof. Swapna - Faculty, MSW Department</li>
            <li>Arpita N Hiremath - Student, 1st year LLB</li>
            <li>Adithi Priya - Student, 1st year B.COM LLB</li>
          </ul>
        </div>

        {/* Equal Opportunity Cell */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Equal Opportunity Cell</h2>
          <h3 className="font-semibold">Objectives:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Implement constitutional safeguards for marginalized students</li>
            <li>Ensure adherence to articles 15, 16, 17, and 46 of the Indian Constitution</li>
            <li>Address grievances of SC/ST students</li>
          </ul>
          <h3 className="font-semibold">Members:</h3>
          <ul className="pl-6">
            <li>Prof. Mahanthesh G S - Principal</li>
            <li>Deepak Naik - Librarian</li>
            <li>Roopa - Student, 1st year LLB</li>
            <li>Swathi - Office Assistant</li>
          </ul>
        </div>

        {/* Prevention of Sexual Harassment Cell */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Prevention of Sexual Harassment Cell</h2>
          <h3 className="font-semibold">Objectives:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Promote a safe environment for faculty and students</li>
            <li>Raise awareness about the POSH Act 2013</li>
            <li>Address complaints effectively</li>
          </ul>
          <h3 className="font-semibold">Members:</h3>
          <ul className="pl-6">
            <li>Prof. Mamtha R - Senior Professor</li>
            <li>Advocate Saril Arun Bangera - Advocate & Counselor</li>
            <li>Dr. Kurian - Principal</li>
            <li>Dr. Swapna - POSH Member</li>
            <li>Swathi - Office Staff</li>
          </ul>
        </div>

        {/* Anti-Ragging Committee */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Anti-Ragging Committee</h2>
          <h3 className="font-semibold">Objectives:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Ensure a safe and respectful environment for all students</li>
            <li>Make the campus ragging-free</li>
            <li>Address complaints fairly and recommend disciplinary actions</li>
          </ul>
          <h3 className="font-semibold">Members:</h3>
          <ul className="pl-6">
            <li>Prof. Mahanthesh G S - Chairperson</li>
            <li>Prof. Mamtha R - Senior Professor</li>
            <li>Dr. Kurian - Principal</li>
            <li>Prof. Prashant - Faculty</li>
            <li>Anila Bhandary - Student Representative</li>
            <li>Mayur - Student Representative</li>
            <li>Baby Suvarna - Parent Representative</li>
            <li>Swathi - Office Staff</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Committees;
