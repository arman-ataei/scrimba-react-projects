import { Card, Carousel, CarouselItem } from 'react-bootstrap';
import MyCard from './MyCard';


import img1 from '../assets/image 12.png'
import img2 from '../assets/wedding-photography 1.png'
import img3 from '../assets/mountain-bike 1.png'

export default function MyCarousel(){
    let myCards = [];
    myCards.push(<MyCard
      img   = {img1}
      rate  = '5.0'
      rate1  = '6'
      title = 'Life lessons with Katie Zaferes'
      price = '136' 
    />)
    myCards.push(<MyCard
      img   = {img2}
      rate  = '5.0'
      rate1  = '6'
      title = 'Life lessons with Katie Zaferes'
      price = '136' 
    />)
    myCards.push(<MyCard
      img   = {img3}
      rate  = '5.0'
      rate1  = '6'
      title = 'Life lessons with Katie Zaferes'
      price = '136' 
    />)
    console.log(myCards)
    return(
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://placeimg.com/800/400/any"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://placeimg.com/800/420/any"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://placeimg.com/800/430/any"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}