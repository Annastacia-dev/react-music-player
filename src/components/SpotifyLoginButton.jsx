import { BsSpotify} from 'react-icons/bs'
import { useState } from 'react';
import Loader from './Loader';

const SpotifyLoginButton = () => {
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    setLoading(true)
    const clientID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const redirectURI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;

    const authEndpoint = 'https://accounts.spotify.com/authorize';
    const scopes = ['user-read-private', 'user-read-email'];

    const params = new URLSearchParams({
      client_id: clientID,
      redirect_uri: redirectURI,
      response_type: 'token',
      scope: scopes.join(' '),
    });
    window.location.href = `${authEndpoint}?${params}`;
    setLoading(false)
  };

  loading && <Loader />

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900 text-white">
      <button className='flex items-center gap-3 bg-green-600 py-4 px-6 rounded hover:bg-green-800' onClick={handleLogin}>
        <BsSpotify />
        Log in with Spotify
      </button>
    </div>
  );
};

export default SpotifyLoginButton;
