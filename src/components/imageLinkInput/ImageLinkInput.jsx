import React from 'react';
import './ImageLinkInput.css';

function ImageLinkInput() {
  return (
    <div>
      <div className='header'>
        <h1 className='f2 white'>
          {'Face Recognition'}
        </h1>
        <p className='f4 moon-gray'>
          {'Upload an image and detect faces instantly.'}
        </p>
      </div>
      <div className='centerDiv'>
        <div className='form centerDiv w-50 pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 f6' type='text' placeholder='Enter an image URL' />
          <button className='f4 link ph3 pv2 white bg-transparent'>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkInput;