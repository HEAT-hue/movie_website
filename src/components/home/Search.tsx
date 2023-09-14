// jshint esversion:6
import SearchIcon from "../../assets/home/Search.svg";

type SearchBarProp = {
    searchQuery?: string,
    setSearchQuery: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const SearchBar: React.FC<SearchBarProp> = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="relative w-max h-max">
            {/* Input */}
            <input
                className="w-[350px] py-2 border-[1px] rounded px-5  pr-5 text-white font-bold bg-transparent text-sm placeholder-white placeholder-opacity-100 outline-none"
                type="text"
                value={searchQuery}
                placeholder="What do you want to watch?"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setSearchQuery(e.target.value);
                }} />
    

            {/* Search icon */}
            <img className="absolute top-3 right-5" src={SearchIcon} alt="search icon" />
        </div>
    )
}