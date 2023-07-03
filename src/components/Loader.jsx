import { FaSpinner } from 'react-icons/fa';

const Loader = () => {
  return (
    <div className='h-screen flex justify-center items-center bg-gray-900 text-white'>
      <FaSpinner className="animate-spin" />
    </div>
  )
}

export default Loader
