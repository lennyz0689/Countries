import Style from './Navbar.module.css'
import { Link } from 'react-router-dom'
import Searchbar from '../Searchbar/Searchbar'

const Navbar = () => {
    return (
        <div className={Style.container}>
            <nav className={Style.navbar}>
                <Link to='/home'>
                <button >Home</button>
                </Link>
                <Link to='/form'>
                <button> Form</button>
                </Link>

                <Searchbar />
            </nav>
        </div>
    )
}

export default Navbar