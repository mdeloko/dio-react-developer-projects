import './list-style.css'

export default function List({title, description}){
    
    return (
        <div className="list-item">
            <strong>{title}</strong>
            <p>{description}</p>
            <hr />
        </div>
    )
}