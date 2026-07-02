import { useState } from 'react'


interface Task {
  id: number
  text: string
  isCompleted: boolean
}

function App() {
 
  const [tasks, setTasks] = useState<Task[]>([])
  const [text, setText] = useState("")

  const AddTask = () => {
    if (!text.trim()) return

    setTasks([...tasks, {id: Date.now(), text: text, isCompleted: false}])
  }

  const DeleteTask = (id: number) => {
    setTasks(tasks.filter((e) => e.id !== id))
  }

  const CompletedTask = (id: number) => {
    setTasks(tasks.map((e) => e.id === id ? { ...e, isCompleted: !e.isCompleted} : e ))
  }


  return (
    <main className='bg-[#0c0c0c] w-full h-screen flex flex-col justify-center items-center text-white'>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}
      className='border border-white p-3 rounded-xl'/>

      <button onClick={AddTask}
      className='border border-white cursor-pointer'>Add task</button>


      {tasks.map((task) => (
        <div key={task.id} className='flex flex-row gap-10'>
          <input type="checkbox" onChange={() => CompletedTask(task.id)}/>

          <h1 className={task.isCompleted ? "line-through text-gray-600" : ''}>
            {task.text}
          </h1>
          
          
          <button onClick={() => DeleteTask(task.id)} className='cursor-pointer'>Delete</button>
        </div>
      ))}

    </main>
  )
}

export default App
