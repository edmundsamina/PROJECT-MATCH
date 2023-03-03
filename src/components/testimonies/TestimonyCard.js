import './Testimonies.css'

export default function TestimoniesCard(props){
    return (
        <div className='testimony-card'>
            <p>
            {props.testimony}
            </p>
            <div className='testimony-image'>
            <img src={props.img} alt = "reviewer icon"/>
            <h5>
            {props.name}
            </h5>
            </div>
        </div>
    )
}