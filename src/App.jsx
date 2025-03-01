import './App.css';
import React, { useState, useEffect } from 'react';
import Navigation from './components/navigation/Nav';
import Logo from './components/logo/Logo.jsx';
import Rank from './components/rank/Rank.jsx';
import SignIn from './components/signin/SignIn.jsx';
import Register from './components/register/Register.jsx';
import ImageLinkInput from './components/imageLinkInput/ImageLinkInput.jsx';
import FaceRegonition from './components/faceRegonition/FaceRecognition.jsx';
import ParticlesBg from 'particles-bg';

const returnResponse = (imgURL) => {
  const PAT = '0783a563f0ba40e5aa5b0affe9191cd9';
  const USER_ID = '7n3wochcy90p';
  const APP_ID = 'test';

  const raw = JSON.stringify({
    "user_app_id": {
      "user_id": USER_ID,
      "app_id": APP_ID
    },
    "inputs": [
      {
        "data": {
          "image": {
            "url": imgURL
          }
        }
      }
    ]
  });

  return {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Key ' + PAT
    },
    body: raw
  };
}


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
    fetch("https://cors-anywhere.herokuapp.com/https://api.clarifai.com/v2/models/face-detection/outputs", returnResponse(input))
      .then(response => response.json())
      .then(result => displayFaceBox(calculateFaceLocation(result)))
      .catch(error => console.log('error', error));
  }

  const calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftColumn: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightColumn: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  const displayFaceBox = (box) => {
    setBox(box);
  }

  const onRouteChange = (route) => {
    if (route === 'signout') {
      setIsSignnedIn(false);
    } else if (route === 'home') {
      setIsSignnedIn(true);
    }
    setRoute(route);
  }

  return (
    <div className="App">
      <Navigation isSignnedIn={isSignnedIn} onRouteChange={onRouteChange} />
      <ParticlesBg type="cobweb" bg={true} color="#ffffff" opacity={0.4} />
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