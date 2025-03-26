import './App.css'
import Header from '../../components/Header'
import gitHubPng from '../../assets/github-png.png'
import Input from '../../components/Input'
import Profile from '../../components/Profile'
import List from '../../components/List'

import { useState } from 'react'

function App() {
  const [user,setUser] = useState('');
  const [currentUser,setCurrentUser] = useState(null);
  const [repos,setRepos] = useState(null);

  async function getData(){
    const userFetch = await fetch(`https://api.github.com/users/${user}`);
    const userData = await userFetch.json()
    if(userData.name){
      const {name,bio,avatar_url,login} = userData;
      setCurrentUser({name,bio,avatar_url,login});

      const reposFetch = await fetch(`https://api.github.com/users/${user}/repos`);
      const reposData = await reposFetch.json();
      if(reposData.length){
        setRepos(reposData);
      }
    }
  }
  
  return (
    <div className="app">
      <Header />
      <img src={gitHubPng} alt="GitHub logo." id="git-bg" />
      <div id="container">
        <Input state={setUser} value={user} onClick={getData}/>
        {currentUser?.name?(
          <>
            <Profile pfpSrc={currentUser.avatar_url} name={currentUser.name} desc={currentUser.bio} username={`@${currentUser.login}`}/>
            <hr />
          </>
        ) : null}
        {repos?.length?(
          <>
            <h3 id="repos-title">Repositórios</h3>
            {repos.map(repo => {
              return (<List title={repo.name} description={repo.description}/>)
          })}
          </>
        ) : null}
      </div>
    </div>
  )
}

export default App
