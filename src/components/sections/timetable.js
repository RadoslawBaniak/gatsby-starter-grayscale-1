import React, {useState} from 'react';
import timetableImage from '../../assets/images/timetable.jpeg';

const TimetableSection = () => {
  return (
    <section id="timetable" className="timetable-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-lg-12">
              <img className="img-fluid mb-3 mb-lg-0" src={timetableImage} alt="hardlife-academy-timetable" />
            </div>
        </div>
      </div>
    </section>
  );
}

export default TimetableSection;