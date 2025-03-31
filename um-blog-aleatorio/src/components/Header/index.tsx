import './styles.css'
import { MdHome } from 'react-icons/md'
import Link from 'next/link';
import Input from '../Input';
export default function Header(){
    return(
        <header>
            <div className="header-container">
                <Link href="/"><MdHome size="2.5rem"/></Link>
                <Input />
            </div>
        </header>
    )
}