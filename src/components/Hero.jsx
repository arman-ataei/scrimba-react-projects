import Header from "./Header";
import photogrid from "../assets/photo-grid.svg"
import { Image } from 'react-bootstrap';

function Hero(){
    return(
        <div className="hero d-flex flex-column">
            <div className="d-flex justify-content-center">
                <Image src={photogrid} />
            </div>
            <div className="desc">
                <h1>Online Experiences</h1>
                <p>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
        

    )
}








export default Hero 