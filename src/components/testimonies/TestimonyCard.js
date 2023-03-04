import './Testimonies.css'

export default function TestimoniesCard(props){
    return (
        <div className='testimony-card'>
            <p>
            <i>
            "{props.testimony}"
            </i>
            </p>
            <div className='testimony-card-image'>
            <img src={props.img} alt = "reviewer icon"/>
            <div className='review-name'>
            <h5>
            {props.name}
            </h5>
            <h6>{props.occupation}</h6>
            </div>
            </div>
        </div>
    )
}