import React from 'react';

function Admission() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Admission</h1>

      <div className="w-full bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">How to Apply</h2>
        <p className="text-gray-700 mb-4">
          Eligible candidates may register themselves along with a 
          <strong> non-refundable registration fee of Rs. 1,000/-</strong>.
        </p>

        <h3 className="font-semibold">Application Process:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Fill the application form with relevant details.</li>
          <li>Pay the required application fee of Rs. 1,000/-.</li>
          <li>Upload the necessary documents.</li>
        </ul>

        <h3 className="font-semibold">Required Documents:</h3>
        <ul className="list-disc pl-6">
          <li>Caste certificate</li>
          <li>2nd PUC / 12th Standard mark sheet</li>
          <li>SSLC / 10th Standard mark sheet</li>
          <li>11th Standard mark sheet</li>
          <li>Formal passport-size photograph (white background)</li>
        </ul>
      </div>
    </div>
  );
}

export default Admission;
