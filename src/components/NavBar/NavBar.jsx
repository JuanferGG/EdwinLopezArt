import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg fw-bold">
            <div className="container">
                <a className="navbar-brand" href="/"><img src="https://i.imgur.com/fcopJxZ.jpg" className="rounded-circle" style={{ width: '40px' }} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav gap-3">
                        <li className="nav-item" style={{ margin: 'auto' }}>
                            <Link style={{color: 'black', textDecoration: 'none'}} to='/'>Inicio</Link>
                        </li>
                        <li className="nav-item" style={{ margin: 'auto' }}>
                            <Link style={{color: 'black', textDecoration: 'none'}} to='/gallery'>Galeria</Link>
                        </li>
                        <li className="nav-item" style={{ margin: 'auto' }}>
                            <Link style={{color: 'black', textDecoration: 'none'}} to='/advertising'>Publicidad</Link>
                        </li>
                        <li className="nav-item" style={{ margin: 'auto' }}>
                            <Link style={{color: 'black', textDecoration: 'none'}} to='/contact'>Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
