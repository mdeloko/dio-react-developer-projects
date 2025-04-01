import './styles.css';
import Button from '@/components/Button';
import {IInput} from './types'
import { MdSearch } from 'react-icons/md';

export default function Input({placeholder,state,setState,handleSearch} : IInput){
    return(
        <form onSubmit={(e)=>handleSearch(e)}>
            <input type="text" placeholder={placeholder} value={state} onChange={evt=>setState(evt.target.value)} />
            <Button label={<MdSearch />} type='primary'/>
        </form>
    )
}