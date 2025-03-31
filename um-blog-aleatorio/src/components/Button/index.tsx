import {IButton} from './types';
import css from './button.module.css'

export default function Button({label,onClick,type}:IButton){
    switch(type){
        case 'primary':
            return <button onClick={onClick} className={css.primary}>{label}</button>
        case 'secondary':
            return <button onClick={onClick} className={css.secondary}>{label}</button>
        default:
            return <button onClick={onClick} className={css.default}> {label}</button>
    }

}