import { useEffect, useState } from 'react';
import Loader from './Loader';

const SpotifyCallback = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const handleAuthentication = () => {
      setLoading(true)
      const accessToken = new URLSearchParams(window.location.hash).get('#access_token');
      localStorage.setItem('spotifyAccessToken', accessToken);
      window.location.href = '/';
      setLoading(false)
    };

    handleAuthentication();
  }, []);

  loading && <Loader />

  return <div>Logging in...</div>;
};

export default SpotifyCallback;
