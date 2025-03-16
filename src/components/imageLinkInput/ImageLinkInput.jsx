import React from 'react';

function ImageLinkInput({ onSearchChange, onButtonSubmit }) {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl text-white">
          {'Face Recognition'}
        </h1>
        <p className="text-lg text-gray-400">
          {'Upload an image and detect faces instantly.'}
        </p>
      </div>
      <div className="flex justify-center">
        <div className="flex items-center w-1/2 p-4 rounded-md shadow-md">
          <input 
            className="text-lg p-2 w-2/3 text-sm" 
            type="text" 
            placeholder="Enter an image URL" 
            onChange={onSearchChange}
          />
          <button 
            className="text-lg px-3 py-2 text-white bg-transparent"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkInput;