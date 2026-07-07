
interface taskSearchProps {
    searchQuery: string,
    setSearchQuery: (query: string) => void
}

export default function TaskSearchBar({ searchQuery, setSearchQuery }: taskSearchProps) {

    return (
        <main>
            <input type="text"
            className="border border-white w-40 h-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search a task..."/>
        </main>
    )
}