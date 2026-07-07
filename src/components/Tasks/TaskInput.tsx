import { useState } from "react"

    interface TaskInputProps {
        addTasks: (
            text: string,
            piority: "Low" | "Mid" | "High",
            tags: "All" | "Work" | "Home"
        ) => void
    }


export default function TaskInput({ addTasks }: TaskInputProps) {
    const [text, setText] = useState("")
    const [piority, setPiority] = useState<"Low" | "Mid" | "High">("Low")
    const [tags, setTags] = useState<"All" | "Work" | "Home">("All")

    const AddTask = () => {
        if (!text.trim()) return
        
        addTasks(text, piority, tags)
        setText("")
    }

    return (
        <main>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}
            className='border border-white p-3 rounded-xl'/>

            <button onClick={AddTask}
            className='border border-white cursor-pointer'>Add task</button>


            <div className='flex flex-row gap-x-10 p-2'>
                <button className='border border-white p-2 cursor-pointer rounded-2xl' onClick={() => setPiority("Low")}>low</button>
                <button className='border border-white p-2 cursor-pointer rounded-2xl' onClick={() => setPiority("Mid")}>mid</button>
                <button className='border border-white p-2 cursor-pointer rounded-2xl' onClick={() => setPiority("High")}>high</button>
            </div>

            <span>Choosen piority: {piority}</span>

            <div className='flex flex-row gap-x-10 p-2'>
                <button className='border border-white p-2 cursor-pointer rounded-2xl' onClick={() => setTags("All")}>All</button>
                <button className='border border-white p-2 cursor-pointer rounded-2xl' onClick={() => setTags("Work")}>Work</button>
                <button className='border border-white p-2 cursor-pointer rounded-2xl' onClick={() => setTags("Home")}>Home</button>
            </div>

            <span>Choosen piority: {tags}</span>

            <hr className='h-px bg-zinc-600 w-full m-4'/>


        </main>

    )
}