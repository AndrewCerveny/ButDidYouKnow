import './Fact.css'
import data from '../../assests/data'

export default function Fact() {

	const randomObjectIndex = Math.floor(Math.random() * 27)
	const randomFactIndex = Math.floor(Math.random() * 2)
	const randomImage = data[randomObjectIndex]
	const randomFact = randomImage[randomFactIndex]

	return (
		<section>
			<h2>But did you know...</h2>
			{console.log(data[0].image)}
			<div className='fact-container'>
				<img className='fact-image' src={randomImage.image} alt={randomImage} />
				<div className='date-time-fact'>
					<h2 className='fact-date'>On {randomImage.date}</h2>
					<h2 className='fact-time'>at {randomImage.time}</h2>
					<h2 className='fact-fact'>{randomFact}</h2>
				</div>
			</div>
		</section>
	)
}