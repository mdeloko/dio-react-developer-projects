import './input-style.css';
import Button from '../Button'

export default function Input(props){
    const {value,onChange,onClick} = props;

    return(
        <div className="input-container">
            <input type="text" value={value} onChange={onChange} />
            <Button label="Buscar" onClick={onClick}/>
        </div>
    )
}