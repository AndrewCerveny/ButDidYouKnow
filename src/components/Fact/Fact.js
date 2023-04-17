import './Fact.css'


export default function Fact() {
	return(
		<section>
			<h1>Fact</h1>
			{console.log(data[0].image)}
			<img src={data[0].image} alt='data0'/>
		</section>
	)
}