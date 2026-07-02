import { useState } from 'react'


interface Task {
  id: number
  text: string
}

function App() {
 
  const [tasks, setTasks] = useState<Task[]>([])
  const [text, setText] = useState("")

  const AddTask = () => {
    if (!text.trim()) return

    setTasks([...tasks, {id: Date.now(), text: text}])
  }


  return (
    <main className='bg-[#0c0c0c] w-full h-screen flex flex-col justify-center items-center text-white'>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}
      className='border border-white'/>

      <button onClick={AddTask}
      className='border border-white cursor-pointer'>Add task</button>

      {tasks.map((task) => (
        <div>{task.text}</div>
      ))}

    </main>
  )
}

export default App
