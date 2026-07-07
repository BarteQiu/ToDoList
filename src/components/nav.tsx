import { LuNotepadText } from "react-icons/lu";

interface NavbarProps {
    settings: boolean
    setSettings: (value: boolean) => void
}

export default function navbar({settings, setSettings}: NavbarProps) {
    return (
        <nav className='fixed top-5 left-0 w-full h-[5%] flex justify-between items-center  p-10'>

        <span className='text-3xl border border-white p-3 rounded-[50%] hover:bg-white hover:text-black cursor-pointer'>
            <LuNotepadText/>
        </span>

        <div className='flex gap-x-10'>
          <button className='border border-white rounded-2xl p-2 w-30 font-semibold cursor-pointer 
          hover:bg-white hover:text-black transition-all duration-300'>Add task</button>

          <button className='border border-white rounded-2xl p-2 w-30 font-semibold cursor-pointer 
          hover:bg-white hover:text-black transition-all duration-300'>All tasks</button>

          <button className='border border-white rounded-2xl p-2 w-30 font-semibold cursor-pointer 
          hover:bg-white hover:text-black transition-all duration-300'
          onClick={() => setSettings(!settings)}>Settings</button>
        </div>
      </nav>
      
    )
}