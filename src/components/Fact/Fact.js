import './Fact.css'
import data from '../../assests/data'
import Blanche91936AM from '/Users/fayer/turing_work/4mod/ButDidYouKnow/src/assests/Screenshots/Brandon9.25.23 AM.png'

export default function Fact() {
	return(
		<section>
			<h1>Fact</h1>
			{console.log(data[0].image)}
			<img src={Blanche91936AM} alt='data0'/>
		</section>
	)
}