import './Fact.css'
import data from '../../assests/data'

export default function Fact() {

	const randomImageIndex = Math.floor(Math.random() * 27)

	return(
		<section>
			<h1>Fact</h1>
			{console.log(data[0].image)}
			<img classname='fact-image' src={data[randomImageIndex].image} alt={randomImageIndex}/>
		</section>
	)
}