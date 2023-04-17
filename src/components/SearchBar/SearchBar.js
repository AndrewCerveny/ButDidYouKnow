import './SearchBar.css'
import { useState } from 'react'

export default function SearchBar() {
	const [searchInput, setSearchInput] = useState("")

	const handleChange = (e) => {
		e.preventDefault();
		setSearchInput(e.target.value);
	}

	return (
		<form>
			<h2>Ask me anything!</h2>
			<input
				type="search"
				placeholder="Search here"
				onChange={handleChange}
				value={searchInput} />
				<button type="submit">Search</button>
		</form>
	)
}