import { BsMusicNoteBeamed } from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav className='fixed flex justify-between items-center z-10 p-4 bg-green-600 w-full text-white'>
      <a href='/' className="flex items-center gap-3">
        <BsMusicNoteBeamed />
        <h1 className='text-sm font-bold uppercase'>React Music Player</h1>
      </a>
    </nav>
  )
}

export default Navbar
