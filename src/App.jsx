import './App.css';
import React, { useState } from 'react';
import Navigation from './components/navigation/Nav';
import Logo from './components/logo/Logo.jsx';
import Rank from './components/rank/Rank.jsx';
import SignIn from './components/signin/SignIn.jsx';
import Register from './components/register/Register.jsx';
import ImageLinkInput from './components/imageLinkInput/ImageLinkInput.jsx';
import FaceRegonition from './components/faceRegonition/FaceRecognition.jsx';
// import ParticlesBg from 'particles-bg';

function App() {
  const [input, setInput] = useState('');
  const [imgURL, setImgURL] = useState('');
  const [box, setBox] = useState({});
  const [route, setRoute] = useState('signin');
  const [isSignnedIn, setIsSignnedIn] = useState(false);
  const [, setUser] = useState({
    id: '',
    name: '',
    email: '',
    joined: new Date()
  });

  const loadUser = (user) => {
    setUser({
      id: user.id,
      name: user.name,
      email: user.email,
      joined: new Date(user.joined)
    })
  }

  const onSearchChange = (event) => {
    setInput(event.target.value)
  }

  const onButtonSubmit = () => {
    setImgURL(input);
    fetch('https://omnisolveapi.onrender.com/facerec',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          input: input,
        })
      })
      .then(response => response.json())
      .then(data => {
        const parsedCoordinates = parseCoordinatesResponse(data);
        console.log(parsedCoordinates)
        const boxData = calculateFaceLocation(parsedCoordinates);
        console.log(boxData)
        setBox(boxData);
      })
      .catch(error => console.log('error', error));
  }

  // Function to parse the API response and remove unwanted JSON syntax
  const parseCoordinatesResponse = (responseText) => {
    // Remove the ```json and ``` markers if they exist
    let cleanedText = responseText;
    if (responseText.includes('```')) {
      cleanedText = responseText.replace(/```json|```/g, '').trim();
    }

    try {
      // Parse the JSON
      return JSON.parse(cleanedText);
    } catch (error) {
      console.error('Error parsing coordinates:', error);
      return [];
    }
  };

  // Calculate function that works with normalized [top_row, left_col, bottom_row, right_col] format
  const calculateFaceLocation = (data) => {
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    // Process each person's coordinates
    const boxes = {};

    data.forEach((person) => {
      const personKey = Object.keys(person)[0]; // e.g., "person 1"
      const coords = person[personKey]; // [top_row, left_col, bottom_row, right_col]

      if (coords && coords.length === 4) {
        const [top_row, left_col, bottom_row, right_col] = coords;

        boxes[personKey] = {
          topRow: top_row * height,
          leftColumn: left_col * width,
          bottomRow: height - (bottom_row * height),
          rightColumn: width - (right_col * width)
        };
      }
    });

    return boxes;
  };

  const onRouteChange = (route) => {
    if (route === 'signout') {
      setIsSignnedIn(false);
      // Reset all user data
      setUser({
        id: '',
        name: '',
        email: '',
        joined: new Date()
      });
      setInput('');
      setImgURL('');
      setBox({});
    } else if (route === 'home') {
      setIsSignnedIn(true);
    }
    setRoute(route);
  }

  return (
    <div className="App">
      <Navigation isSignnedIn={isSignnedIn} onRouteChange={onRouteChange} />
      {route === 'home' ?
        <div>
          <Logo />
          <Rank />
          <ImageLinkInput onSearchChange={onSearchChange} onButtonSubmit={onButtonSubmit} />
          {imgURL && <FaceRegonition box={box} imgURL={imgURL} />}
        </div>
        : (
          route === 'signin'
            ? <SignIn loadUser={loadUser} onRouteChange={onRouteChange} />
            : <Register loadUser={loadUser} onRouteChange={onRouteChange} />
        )
      }

    </div>
  );
}
export default App;