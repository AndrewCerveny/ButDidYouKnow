import './Fact.css'
import data from '../../assests/data'

export default function Fact() {

	const randomObjectIndex = Math.floor(Math.random() * 27)
	const randomFactIndex = Math.floor(Math.random() * 2)
	const randomImage = data[randomObjectIndex]
	const randomFact = randomImage[randomFactIndex]

	return(
		<section>
			<h1>Fact</h1>
			{console.log(data[0].image)}
			<h2>{randomImage.date}</h2>
			<h2>{randomImage.time}</h2>
			<h2>{randomImage.randomFact}</h2>
			<img classname='fact-image' src={randomImage.image} alt={randomImage}/>
		</section>
	)
}