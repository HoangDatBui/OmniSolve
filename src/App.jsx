import './App.css';
import Navigation from './components/navigation/Nav';
import Logo from './components/logo/Logo.jsx';
import Rank from './components/rank/Rank.jsx';
import ImageLinkInput from './components/imageLinkInput/ImageLinkInput.jsx';
import FaceRegonition from './components/faceRegonition/FaceRecognition.jsx';
import ParticlesBg from 'particles-bg'

function App() {
  return (
    <div className="App">
      <Navigation />
      <ParticlesBg type="cobweb" bg={true} color="#ffffff" opacity={0.4}/>
      <Logo />
      <Rank />
      <ImageLinkInput />
      <FaceRegonition />
    </div>
  );
}

export default App;
