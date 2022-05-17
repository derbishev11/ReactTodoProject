import { Link } from 'react-router-dom';
import './MainMenu.scss'

function MainMenu() {
    return( 
        <nav>
            <Link className="nav-link" to = "/">Tasks</Link>
            <Link className="nav-link" to = "/help">Help</Link>
        </nav>
    )
}

export default MainMenu;