import React from 'react';
import './FaceRecognition.css';

function FaceRecognition({ imgURL, box }) {
  // Check if box is empty or undefined
  const hasBoxes = box && Object.keys(box).length > 0;

  return (
    <div className="centerDiv ma">
      <div className='absolute mt2'>
        {imgURL && <img id='inputImage' src={imgURL} alt="Face detection" width={500} height={'auto'} />}
        
        {hasBoxes && Object.keys(box).map((person, index) => (
          <div 
            key={index}
            className='bounding-box'
            style={{
              top: box[person].topRow, 
              bottom: box[person].bottomRow, 
              left: box[person].leftColumn, 
              right: box[person].rightColumn
            }}
          >
            <span className="person-label">{person}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaceRecognition;