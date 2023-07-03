import { useEffect, useState } from 'react';
import axios from 'axios';
import SpotifyLoginButton from './SpotifyLoginButton';
import SpotifyHomepage from './SpotifyHomepage';

const SpotifyAPI = () => {
  const [user, setUser] = useState(null);
  const accessToken = localStorage.getItem('spotifyAccessToken');

  console.log(accessToken)

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    if (accessToken) {
      fetchuser();
    }
  }, [accessToken]);

  if (!accessToken) {
    return < SpotifyLoginButton />
  }

  if (!user) {
    return <div>Loading profile...</div>;
  }

  return (
    <SpotifyHomepage user={user} />
  );
};

export default SpotifyAPI;
