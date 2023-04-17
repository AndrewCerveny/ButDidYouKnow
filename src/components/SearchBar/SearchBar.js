import {useState} from 'react'
import './SearchBar.css'

export default function SearchBar({handleQuestion}) {
	const [value , setValue] = useState('')
	
	const updateMySearch = (e) => {
		e.preventDefault()
		setValue(e.target.value)
	}

	return(
		<form>
			<input 
			type='text' 
			placeholder='Your question here'
			onChange={(e) => updateMySearch(e)}
			/>
			<button onClick={(e)=> handleQuestion(e,value)}> Submit Question</button>
		</form>
	)
}