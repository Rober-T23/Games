
import './landing.css'
import { Link } from 'react-router-dom'
export default function Landig(){
    return(
        <div className="landig-container">
            <div className='landing-data'>
            <h1>VIDEO GAMES</h1>
            <p>Enjoy your favorite video games</p>
           <Link to='/Home'><button>Ingresar</button></Link>
            </div>
          
        </div>
    )
}