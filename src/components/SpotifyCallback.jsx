import { useEffect } from 'react';

const SpotifyCallback = () => {
  useEffect(() => {
    const handleAuthentication = () => {
      const accessToken = new URLSearchParams(window.location.hash).get('#access_token');
      localStorage.setItem('spotifyAccessToken', accessToken);
      window.location.href = '/home'; // Redirect to your desired route
    };

    handleAuthentication();
  }, []);

  return <div>Logging in...</div>;
};

export default SpotifyCallback;
