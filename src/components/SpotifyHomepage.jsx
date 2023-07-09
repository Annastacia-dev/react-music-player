import PropTypes from 'prop-types';
import GenreTabs from './GenreTabs';

const SpotifyHomepage = ({user}) => {

  const { display_name, images } = user;

  return (
    <div className='h-full bg-gray-900 text-white pt-24 px-4'>
      <div className="flex justify-start items-center gap-4">
        {images.length > 0 && (
            <img src={images[0].url} alt={display_name} className='rounded-full' />
          )}
        <h2>Welcome, {display_name}!</h2>
      </div>
      <div>
        <GenreTabs />
      </div>
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
