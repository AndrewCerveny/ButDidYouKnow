import './Fact.css'
import data from '../../assests/data'
import Blanche91936AM from '/Users/fayer/turing_work/4mod/ButDidYouKnow/src/assests/Screenshots/Brandon9.25.23 AM.png'

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