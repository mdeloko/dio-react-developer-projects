import './profile-style.css'

export default function Profile(props){
    const {pfpSrc,name,desc,username} = props;
    return(
        <div id="profile">
            <img src={pfpSrc} alt={`Imagem de perfil de ${name}`} id="pfp"/>
            <div id="name-desc">
                <h3>{name}</h3>
                <h4>{username}</h4>
                <p>{desc}</p>
            </div>
        </div>
    )
}