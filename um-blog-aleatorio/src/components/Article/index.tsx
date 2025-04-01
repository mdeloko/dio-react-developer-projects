'use client'
import { IArticleFullAPI } from "@/@Types/types";
import IArticle from "./types"
import './styles.css';
import supabase from '@/services/supabase';
import { useEffect, useState } from "react";
import { DateFormatter } from "@/utils/formatter";

export default function Article({post_id}:IArticle){
    const [article,setArticle] = useState<IArticleFullAPI>()
    const [hasLoaded,setHasLoaded] = useState(false);
    async function loadContent(){
        const req = await supabase.from('posts').select('title,desc,content,created_at').eq('id',post_id);
        const {error,status} = req;
        if(status===200&&req.data){
            const data:IArticleFullAPI = req.data[0];
            setArticle(data);
        }else{
            console.warn(error)
        }
    }
    useEffect(()=>{
        loadContent().finally(()=>{setHasLoaded(true)});
    },[])
    if(!hasLoaded){
        return <h1>Carregando...</h1>
    }else if(article){
        return(
            <>
                <main className="main-container">
                    <h2 className="article-title">{article.title}</h2>
                    <small className="date">{`Postado em: ${DateFormatter(article.created_at)}`}</small><br/>
                    <small className="desc-title">Descrição:</small>
                    <p className="desc">{`${article.desc}`}</p>
                    <h3 className="article-start">Artigo:</h3>
                    {
                        article.content.split("\n").map((stg,idx) => {
                            if(stg!==""){
                                return <p className="article" key={idx}>{stg}</p>
                            }
                        })
                    }
                </main>
            </>
        )
    }else{
        return <h1>Não encontrado! (404)</h1>
    }
}