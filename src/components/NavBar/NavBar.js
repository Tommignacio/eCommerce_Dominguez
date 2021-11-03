import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
const Navbar=()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Gentleman</a>
                <button className="navbar-toggler" type="button" datatoggle="collapse" dataarget="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Clothes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Buy</a>
                    </li>
                    </ul>
                    <form className="my-formSearch form-inline my-2 my-lg-0 ">
                    <input className="form-control my-form-control mr-sm-2 miBtn" type="search" placeholder="Search"/>
                    
                    <button className="btn btn-outline-success my-2 my-sm-0 " type="submit">Search</button>
                    <CartWidget/>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar