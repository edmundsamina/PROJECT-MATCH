import './About.css'

export default function AboutUsCard(props){
    return (
        <div className={`about-us-card ${props.class}`}>
                    <h2>{props.heading}</h2>
                    <p>{props.statement}
</p>

        </div>
    )
}