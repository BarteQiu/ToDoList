    interface Task {
        id: number
        text: string
        isCompleted: boolean
        piority: "Low" | "Mid" | "High"
        tags: "All" | "Work" | "Home"
    }

    const piorityColors = {
        Low: 'text-green-600',
        Mid: 'text-yellow-600',
        High: 'text-red-600',
    }

    interface TaskItemProps {
        task: Task
        deleteTask: (id: number) => void
        completeTask: (id: number) => void
    }

export default function TaskItem({ task, deleteTask, completeTask }: TaskItemProps) {
    return (
        <div key={task.id} className='flex flex-row items-center gap-10 border border-white p-3 m-2 rounded-xl w-[90%] overflow-auto'>
            <input type="checkbox" onChange={() => completeTask(task.id)}/>

            <div className='flex flex-col w-full'>
                <h1 className={task.isCompleted ? "line-through text-zinc-600" : ''}>
                    {task.text} 
                </h1>
                    <div className='flex flex-row gap-x-2'>
                        <span className={piorityColors[task.piority]}>{task.piority}</span>
                        <span className='text-zinc-400'>{task.tags}</span>
                    </div>
            </div>

            <div className='flex justify-end w-full'>
                <button onClick={() => deleteTask(task.id)} className='cursor-pointer'>Delete</button>
            </div>
        </div>
    )

}