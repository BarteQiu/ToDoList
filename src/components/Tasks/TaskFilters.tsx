    interface TaskFiltersProps {
        activeTags: "All" | "Work" | "Home",
        setActiveTags: (tag: "All" | "Work" | "Home") => void
    }

export default function TaskFilters({ activeTags, setActiveTags }: TaskFiltersProps) {
    
    <div className='flex flex-row gap-x-2'>
        <button onClick={() => setActiveTags("All")} className='cursor-pointer'>All</button>
        <button onClick={() => setActiveTags("Work")} className='cursor-pointer'>Work</button>
        <button onClick={() => setActiveTags("Home")} className='cursor-pointer'>Home</button>
    </div>

    return (
        <main>
            
        </main>
    )
}