import React from 'react';
import './Instruction.css';

const Instructions = ({ detailedInstructions }) => {
  return (
    <div className='instruction-container'>
      <h3>Instructions:</h3>
      {detailedInstructions &&
        detailedInstructions.map((instructionGroup, index) => (
          <div key={index}>
            {instructionGroup.name && <h4>{instructionGroup.name}</h4>}
            <ol>
              {instructionGroup.steps.map((step) => (
                <li key={step.number} className="instruction-step">
                  {step.step}
                </li>
              ))}
            </ol>
          </div>
      ))}
    </div>
  );
};

export default Instructions;
