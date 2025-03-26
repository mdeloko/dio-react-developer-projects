import './input-style.css'
import Button from '../Button'

export default function Input({state,value,onClick}){
    return(
        <div id="input">
            <input type="text" placeholder='@username' name="user" value={value} onChange={event => state(event.target.value)}/>
            <Button label="Buscar" id="input-button" onClick={onClick}/>
        </div>
    )
}