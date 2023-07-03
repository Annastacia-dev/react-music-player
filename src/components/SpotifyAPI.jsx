import React,  { useEffect, useState } from 'react';
import axios from 'axios';
import SpotifyLoginButton from './SpotifyLoginButton';
import SpotifyHomepage from './SpotifyHomepage';
import Loader from './Loader';
import { Transition } from '@headlessui/react';

const SpotifyAPI = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sessionExpired, setSessionExpired] = useState(false);
  const accessToken = localStorage.getItem('spotifyAccessToken');

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setSessionExpired(false);
      try {
        const response = await axios.get('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setLoading(false);
        if (error.response && error.response.status === 401) {
          handleSessionTimeout();
        }
      }
    };

    if (accessToken) {
      fetchUser();
    }
  }, [accessToken]);

  const handleSessionTimeout = () => {
    localStorage.removeItem('spotifyAccessToken');
    setSessionExpired(true);
    setTimeout(() => {
      setSessionExpired(false);
    }, 3000);
  };

  if (!accessToken) {
    return <SpotifyLoginButton />;
  }

  if (loading) {
    return <Loader />;
  }

  if (sessionExpired) {
    return (
      <Transition show={sessionExpired} as={React.Fragment}>
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3>Your session has timed out</h3>
          </div>
        </div>
      </Transition>
    );
  }

  if (!user) {
    return <div>Loading profile...</div>;
  }

  return <SpotifyHomepage user={user} />;
};

export default SpotifyAPI;
