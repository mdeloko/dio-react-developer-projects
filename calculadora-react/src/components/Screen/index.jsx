import './screen-style.css';

export default function Screen({value}){
    return(
        <input disabled value={value} placeholder='0'></input>
    )
}