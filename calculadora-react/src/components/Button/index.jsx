import './button-style.css';

export default function Button(props){
    const {label,handle} = props
    return(
        <button className='button' onClick={handle}>{label}</button>
    )
}