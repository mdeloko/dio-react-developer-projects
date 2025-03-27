import './App.css';
import githubLogo from '../../assets/github-png.png';
import Input from '../../components/Input';
import ItemRepo from '../../components/ItemRepo';
import { useState } from 'react';
import githubApi from '../../services/api';

export default function App() {
  const [repos,setRepos] = useState([]);
  const [currentRepo,setCurrentRepo] = useState('')

  async function searchRepo(){
    try{
      const {data} = await githubApi.get(`/${currentRepo}`)
      if(data.id){
        if(repos.some(repo => repo.id === data.id)){
          alert("Repositório já adicionado!");
          return;
        }
        setRepos(prev=> [...prev,data]);
        return;
      }
    }catch(e){
      window.alert(`Repositório não existe/foi encontrado!\nErro ${e}`); 
    }
  }

  function unlistRepo(id){
    setRepos(prevRepos => prevRepos.filter(repo => repo.id !== id));
  }

  return (
    <div className='app'>
      <img src={githubLogo} alt="Logo do GitHub" id="github-logo" />
      <Input value={currentRepo} onChange={(e)=>{setCurrentRepo(e.target.value)}} onClick={searchRepo}/>
      {repos.map(repo => {
        return <ItemRepo 
        key={repo.id}
        name={repo.full_name}
        desc={repo.description}
        link={repo.html_url}
        remove={()=>unlistRepo(repo.id)}
        />
      })}
      
    </div>
  )
}
