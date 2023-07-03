import { Routes, Route } from 'react-router-dom';
import SpotifyLoginButton from './components/SpotifyLoginButton';
import SpotifyCallback from './components/SpotifyCallback';
import SpotifyAPI from './components/SpotifyAPI';

const App = () => {
  return (
    <div>
      <h1>Spotify App</h1>
      <Routes>
        <Route path="/" element={<SpotifyLoginButton />} />
        <Route path="/callback" element={<SpotifyCallback />} />
        <Route path="/home" element={<SpotifyAPI />} />
      </Routes>
    </div>
  );
};

export default App;
