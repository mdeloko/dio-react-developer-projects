'use client'
import './styles.css'
import { MdHome } from 'react-icons/md'
import Link from 'next/link';
import IHeader from './types';
import {usePathname} from 'next/navigation'
export default function Header({children}:IHeader){ 
    const route = usePathname();
    function handleReload(){
        if(route==="/"){
            window.location.reload();
        }
    }
    return(
        <header>
            <div className="header-container">
                <Link href="/" onClick={handleReload}><MdHome size="2.5rem"/></Link>
                {children}
            </div>
        </header>
    )
}