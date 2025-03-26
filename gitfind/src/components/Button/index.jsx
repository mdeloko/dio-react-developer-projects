import './button-style.css'
export default function Button(props){
    const {label,id,onClick} = props;

    return(
        <button className="button" id={id} onClick={onClick}>{label}</button>
    )
}