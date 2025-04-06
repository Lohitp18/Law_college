import React from 'react';

function Courses() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Courses</h1>

      <div className="space-y-8">
        
        {/* 3-Year LLB */}
        <div className="w-full bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">3-Year LLB</h2>
          <p className="text-gray-700 mb-4">
            This course is designed for individuals seeking to enter the legal profession or enhance their existing skills with legal knowledge. 
            It is open to graduates of any discipline and aims to create highly skilled legal professionals.
          </p>
          <h3 className="font-semibold">Course Details:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Duration: 3 years (6 semesters)</li>
            <li>Admission is strictly based on merit under Karnataka State Law University</li>
            <li>Eligible candidates must hold a degree from a recognized university</li>
          </ul>
          <h3 className="font-semibold">Eligibility Criteria:</h3>
          <ul className="list-disc pl-6">
            <li><strong>General Category:</strong> 45% marks</li>
            <li><strong>OBC (Other Backward Classes):</strong> 42% marks</li>
            <li><strong>SC/ST Category:</strong> 40% marks</li>
          </ul>
        </div>

        {/* 5-Year B.Com LLB */}
        <div className="w-full bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">5-Year B.Com LLB</h2>
          <p className="text-gray-700 mb-4">
            B.Com. LL.B. integrates Commerce (B.Com.) with Law (LL.B.), allowing students to gain expertise in both fields 
            without having to pursue them separately.
          </p>
          <h3 className="font-semibold">Eligibility Criteria:</h3>
          <ul className="list-disc pl-6">
            <li>Must have passed 10+2 (PUC or equivalent) from a recognized board</li>
            <li><strong>General Category:</strong> 45% marks</li>
            <li><strong>OBC (Other Backward Classes):</strong> 42% marks</li>
            <li><strong>SC/ST Category:</strong> 40% marks</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Courses;
