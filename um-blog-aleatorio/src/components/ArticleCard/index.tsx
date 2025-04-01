import IArticleCard from './types'
import './styles.css'
import { DateFormatter } from '@/utils/formatter'
import Link from 'next/link'

export default function ArticleCard({title,desc,createdAt,id}:IArticleCard){
    return(
        <Link href={`/${id}`} className='card-link'>
            <article>
                <h2>{title}</h2>
                <p>{desc}</p>
                <small>{"Postado em: "+DateFormatter(createdAt)}</small>
            </article>
        </Link>
    )
}