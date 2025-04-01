'use client'
import {useParams} from "next/navigation";
import Article from '@/components/Article'
import Header from "@/components/Header";
export default function Post(){
    const {id} = useParams()
    if(id){
        return <>
            <Header/>
            <div className="container">
                <Article post_id={id}/>
            </div>
            </>
    }
}