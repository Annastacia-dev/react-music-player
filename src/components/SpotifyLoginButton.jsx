const SpotifyLoginButton = () => {
  const handleLogin = () => {
    const clientID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const redirectURI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;

    const authEndpoint = 'https://accounts.spotify.com/authorize';
    const scopes = ['user-read-private', 'user-read-email']; // Add required scopes

    const params = new URLSearchParams({
      client_id: clientID,
      redirect_uri: redirectURI,
      response_type: 'token',
      scope: scopes.join(' '),
    });

    window.location.href = `${authEndpoint}?${params}`;
  };

  return (
    <button onClick={handleLogin}>
      Log in with Spotify
    </button>
  );
};

export default SpotifyLoginButton;
