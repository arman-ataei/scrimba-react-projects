
import { Card, ListGroup, ListGroupItem,  } from 'react-bootstrap';


export default function MyCard(props){
    return(
        <div className="card d-flex flex-md-row flex-column justify-content-between">
            <img className='img-fluid' src={props.imageUrl}  alt="img" />
            <div className="card-body">
                <div><p><i className='fa fa-map-marker text-danger'></i> {props.location}<a className='ms-3' href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a></p></div>
                <h1 className="card-titlt">{props.title}</h1>
                <div className="card-subtitle">{props.startDate}-{props.endDate}</div>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
                
            
    )
}