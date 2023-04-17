import './Fact.css'
import data from '../../assests/data'

export default function Fact() {

	const randomImageIndex = Math.floor(Math.random() * 27)

	return(
		<section>
			<h1>Fact</h1>
			{console.log(data[0].image)}
			<h2>{data[randomImageIndex].date}</h2>
			<h2>{data[randomImageIndex].time}</h2>
			<img classname='fact-image' src={data[randomImageIndex].image} alt={randomImageIndex}/>
		</section>
	)
}