import { Link } from "react-router-dom";

const Card = (props) => {

    return (
        <div className="card" id={props.id} onClick={props.onClick} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
            <div className={props.classNameCard} style={props.styleStock}>
                <div className="wrapper-block">
                    <p className="block__text" style={props.styleColor}>{props.blokText}</p>
                    <h1>Нямушка</h1>
                    <h3>{props.menu}</h3>
                    <div className="text-block">
                        <p className="text">{props.quantity} порций</p>
                        {(props.present !== 0) ? (<p className="text">{props.present}</p>) : null}
                        <p className="text">{props.like}</p>
                    </div>
                    <div className="circle" style={props.styleBackground}>
                        <p className="text__mass">{props.kg}</p>
                        <p className="text__kg">кг</p>
                    </div>
                    
                </div>
            </div>
            <div className="buy-text">
                {(props.stock === false) ? <p className="card__text text_stock">Печалька, {props.menu} закончился.</p> 
                    : (!props.selectedText) ? <p className="card__text">Чего сидишь? Порадуй котэ, <Link to="#" className={props.classNameLink}>купи</Link></p>
                    : <p className="card__text">{props.selectedText}</p>}
            </div>
        </div>
    );
};
  
export default Card;