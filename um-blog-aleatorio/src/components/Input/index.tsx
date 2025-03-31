import './styles.css';
import Button from '@/components/Button';
import {IInput} from './types'
import { MdSearch } from 'react-icons/md';
export default function Input(props : IInput){
    const {placeholder, value, onClick, onChange} = props
    return(
        <form>
            <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
            <Button label={<MdSearch />} onClick={onClick} type='primary'/>
            <Button label="Texto" onClick={onClick} type='secondary'/>
            <Button label="teste" onClick={onClick} type='default'/>
        </form>
    )
}