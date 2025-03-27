import './itemrepo-style.css';

export default function ItemRepo({name,desc,link,remove}){
    return (
        <div className="item-container">
            <h3>{name}</h3>
            <p>{desc}</p>
            <a href={link} target='_blank' rel="noreferrer">Ir para repositório...</a>
            <a className='remove' onClick={remove}>Remover repositório</a>
            <hr />
        </div>
    )
}