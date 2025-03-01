import React from 'react';
import './FaceRecognition.css';

function FaceRecognition({ imgURL, box }) {
  return (
    <div className="centerDiv ma">
      <div className='absolute mt2'>
        {imgURL && <img id='inputImage' src={imgURL} alt="Face detection" width={500} height={'auto'} />}
        <div className='bounding-box' style={{top: box.topRow, bottom: box.bottomRow, left: box.leftColumn, right: box.rightColumn}}></div>
      </div>
    </div>
  );
}

export default FaceRecognition;
