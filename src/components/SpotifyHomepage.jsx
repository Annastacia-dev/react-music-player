import PropTypes from 'prop-types';

const SpotifyHomepage = ({user}) => {

  const { display_name, images } = user;

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900 text-white">
      <h2>Welcome, {display_name}!</h2>
      {images.length > 0 && (
        <img src={images[0].url} alt={display_name} />
      )}
    </div>
  )
}

SpotifyHomepage.propTypes = {
  user: PropTypes.shape({
    display_name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};


export default SpotifyHomepage
