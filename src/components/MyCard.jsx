/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/
import { Card, Image } from 'react-bootstrap';

import star from '../assets/Star 1.png'
export default function MyCard(props){

    // console.log(props)
    // props = props.item
    // instead of props=props.item you can use spread operator
    // console.log(props)
    let bageText
    if(props.openSpots === 0 ){
        bageText = 'SOLD OUT'
    }else if(props.location ==='Online'){
        bageText = 'ONLINE'
    }
    return(
        <Card className='crd' style={{ minWidth: '300px', margin: '40px 0' ,borderRadius:'15px', border: 'none'}}>
            {/* how to render condionally using {} */}
            {bageText && <div className="crd--bage">{bageText}</div>}
            <Card.Img variant="top" src={props.coverImg} />
            <Card.Header className='d-flex flex-row align-items-center' style={{border: 'none', backgroundColor:'white', width: '100%'}}><Image src={star} height="17px" width="17px"/>  {props.stats.rating}<span style={{color:'gray'}}>({props.stats.reviewCount}) &middot; {props.location} </span></Card.Header>
            <Card.Body width="100%"> 
                <p>Life lessons with Katie Zaferes</p>
                <p><span style={{fontWeight: 'bold'}}>From ${props.price}</span> /person</p>
            </Card.Body>
            {/* <ListGroup flush>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body> */}
        </Card>
    )
}