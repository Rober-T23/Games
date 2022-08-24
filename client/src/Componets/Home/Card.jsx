
import './Card.css';


export default function Card({data}) {

  return (
    <div>
  
       <div className="menu__image">
          <img src={data.image} alt="no existe"  />
       </div>
        
        <h4>{data.name}</h4>
        {
          data.generos.map(data=> <p key={data.id}>{data.name}</p> )
        } 
    </div>
  )
}