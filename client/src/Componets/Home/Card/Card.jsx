
import { Link } from 'react-router-dom';
import './Card.css';


export default function Card({ data }) {

  return (
    <div className='menu__card'>

      <div className="menu__image">
        <img src={data.image} alt="no existe" />
        <Link to={`/Details/${data.id}`}><button className='button-play' >Details</button></Link>
      </div>
      <div className='div-rating'>
        <h4>{data.name}</h4>
        <p>{data.rating}</p>
      </div>

      <div className='card_genero'>
        {
          data.generos.map(data => <p key={data.id}>{data.name}</p>)
        }
      </div>
     
    </div>
  )
}