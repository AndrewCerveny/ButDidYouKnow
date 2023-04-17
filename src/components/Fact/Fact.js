import './Fact.css'
import data from '../../assests/data'

export default function Fact() {

	const randomObjectIndex = Math.floor(Math.random() * 27)
	const randomFactIndex = Math.floor(Math.random() * 2)
	const randomImage = data[randomObjectIndex]
	const randomFact = randomImage[randomFactIndex]

	return(
		<section>
			<h2>But did you know...</h2>
			{console.log(data[0].image)}
			<h2>On {randomImage.date}</h2>
			<h2>At {randomImage.time}</h2>
			<h2>{randomImage.randomFact}</h2>
			<img classname='fact-image' src={randomImage.image} alt={randomImage}/>
		</section>
	)
}