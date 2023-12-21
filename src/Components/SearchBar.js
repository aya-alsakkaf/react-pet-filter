export default function SearchBar({setQuery}) {
    return (
        <div className="input-group rounded">
            <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
}