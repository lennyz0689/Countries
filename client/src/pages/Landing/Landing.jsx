import Style from './Landing.module.css'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div className={Style.container}>
            <h1 className={Style.title}>Bienvenido</h1>
            <Link to='/home'>
                <button className={Style.button}>Entrar</button>
            </Link>
        </div>
    )
}

export default Landing