import './App.css'
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'
import Fact from '../Fact/Fact'
import { useEffect, useState } from 'react'
import QuestionPage from '../QuestionPage/QuestionPage'



 export default function App() {
	const [question , setQuestion] = useState('')
	
	const handleQuestion = (e, askedStuff) => {
		e.preventDefault()
		setQuestion(askedStuff)
	}
 
	return (
		<main>
			<QuestionPage handleQuestion={handleQuestion}/>
			
		</main>
	)
}
