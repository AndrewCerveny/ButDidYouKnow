import './Fact.css'


export default function Fact() {

	const randomImageIndex = Math.floor(Math.random() * 30)

	return(
		<section>
			<h1>Fact</h1>
			{console.log(data[0].image)}
			<img src={data[0].image} alt={randomImageIndex}/>
		</section>
	)
}