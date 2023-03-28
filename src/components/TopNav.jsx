
import logo from '../assets/Troll Face.png'

export default function TopNav(){
    return(
        <nav className="nav top-nav p-2 d-flex flex-row justify-content-between align-items-center top-nav-bg">
                    <a href="#" className="navbar-brand align-self-center">
                        <img className='me-1' src={logo} alt="" srcSet="" />
                        Meme Generator
                    </a>
                <span className='top-nav--info'>Scrimba- ReactCourse -Project 3</span>
        </nav>
    )
} 