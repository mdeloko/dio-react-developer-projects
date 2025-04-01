'use client'
import { FormEvent, useEffect, useState } from "react";
import ArticleCard from "@/components/ArticleCard";
import { IArticleCardAPI } from "@/@Types/types";
import supabase from "@/services/supabase"
import Input from "@/components/Input";
import Header from "@/components/Header";
export default function Home() {
  const [articles,setArticles] = useState<IArticleCardAPI[]>([]);
  const [search,setSearch] = useState('');

  async function handleSearch(evt:FormEvent):Promise<void>{
    evt.preventDefault()
    setArticles([]);
    const req = await supabase.from('posts').select().or(`title.ilike.%${search}%,desc.ilike.%${search}%`);
    if(req.status===200 && req.data){
      const data:IArticleCardAPI[] = req.data
      console.log(data)
      setArticles(data);
    }else{
      console.warn(req.error)
    }
  }

  async function updateArticles():Promise<void>{
    const  req = await supabase.from('posts').select('*');
    const {status,error} = req;
    if(status===200 && req.data){
      const data:IArticleCardAPI[] = req.data
      setArticles(data);
    }else{
      console.warn(error);
    }
  }
  useEffect(()=>{
    updateArticles();
  },[]);

  return (<>
    <Header><Input placeholder='Pesquise por título, descrição...' handleSearch={handleSearch} state={search} setState={setSearch}/></Header>
    <div className="container">
      {articles.map(art => <ArticleCard id={art.id} key={art.id} title={art.title} desc={art.desc} createdAt={art.created_at}/>)}
    </div>
    </>
  );
}
