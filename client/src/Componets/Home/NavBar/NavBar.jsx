import Search from './Search/Search';
import Filters from './Filters/Filters';
import { Link } from 'react-router-dom';
import './NavBar.css'
export default function NavBar() {
    return (
        <nav>
            <div className="nav-search">
                <Search />
            </div>

            <div className="nav-filter">
                <Filters />
            </div>
        
            <div className="nav-add">
                <Link to='/Add'><button className='button'>ADD NEW PLAY GAMES</button></Link>
            </div>

        </nav>


    )


}