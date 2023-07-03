import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SpotifyLoginButton from './components/SpotifyLoginButton';
import SpotifyCallback from './components/SpotifyCallback';
import SpotifyAPI from './components/SpotifyAPI';

const App = () => {

  const accessToken = localStorage.getItem('spotifyAccessToken');

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={
          accessToken ?   <SpotifyAPI /> : <SpotifyLoginButton />
        } />
        <Route path="/callback" element={<SpotifyCallback />} />
      </Routes>
    </div>
  );
};

export default App;
