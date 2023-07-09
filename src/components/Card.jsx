import PropTypes from 'prop-types';

const Card = ({image }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4 mb-4">
      <img src={image} />
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,

};

export default Card;
