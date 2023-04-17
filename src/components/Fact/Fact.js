import './Fact.css'
import data from '../../assests/data'

export default function Fact({value}) {

	const randomImageIndex = Math.floor(Math.random() * 27)

	return(
		<section>
			<h4>I'm sorry, I don't know about {value}</h4>
			<h2>But did you know...</h2>
			{console.log(data[0].image)}
			<h2>On {data[randomImageIndex].date}</h2>
			<h2>At {data[randomImageIndex].time}</h2>
			<h2>{data[randomImageIndex].fact}</h2>
			<img classname='fact-image' src={data[randomImageIndex].image} alt={randomImageIndex}/>
		</section>
	)
}