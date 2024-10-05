import React from 'react';
import './Collification.css';

const qualifications = [
  {
    id: 1,
    title: '10th Grade',
    description: 'Completed 10th grade with distinction from FG Public School Piffers in 2024.',
    details: 'waiting for a Result.',
  },
  {
    id: 2,
    title: '9th Grade',
    description: 'Completed 9th grade from FG Public School Piffers  Abbottabad (Pak) in 2023.',
    details: 'Achieved a score of 85%, with 434 marks out of 510.',
  },
];

const Collification = () => {
  return (
    <div className="collification-container">
      <div className="row text-center">
        <h1 className="heading">MY Qualification</h1>
        <div className="qualifications">
          {qualifications.map((qualification) => (
            <div key={qualification.id} className="qualification-card">
              <h2>{qualification.title}</h2>
              <p>{qualification.description}</p>
              <p className="details mb-5">{qualification.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collification;
