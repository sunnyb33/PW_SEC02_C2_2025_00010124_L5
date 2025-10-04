import "../Styles/cardScientist.css";

const cardScientist = ({name, image, profession, awards, discoveries}) => {
    return(
        <div className="card__cientist">
            <h2>{name}</h2>
            <img src={img} alt={name} className="card-image"/>
            <ul>
                <li><strong>Profesión</strong> {profession} </li>
                <li><strong>Premios</strong> {awards} </li>
                <li><strong>Descubrió</strong> {discoveries} </li>
            </ul>
        </div>
    );
}

export default cardScientist;