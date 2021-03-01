const Card = (props) => {
    return(
        <div className="card"> 
            <div className="card-img">
                <img src={props.img} alt="..."/>
            </div>
            <div className="card-text">
                <strong>{props.name}</strong>
                <p>Nickname: {props.nick}</p>
                <p>Ator: {props.actor}</p>
            </div>
        </div>
    )
}

export default Card;