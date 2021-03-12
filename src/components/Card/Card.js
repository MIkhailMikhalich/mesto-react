import heart from '../../images/heart.svg';
import trashcan from '../../images/trashcan.svg';
import React from 'react';

function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card);
    props.onSelectedCard();
  }
  return (
    <div>
      <div className="photocards__item">
        <button onClick={handleCardClick} type="button" className="photocards__photo-button button">
          <img className="photocards__photo" src={props.link} alt={`Фото ${props.name}`} />
        </button>
        <button type="button" className="photocards__delete-button button">
          <img className="photocards__trashcan" src={trashcan} alt="Удалить" />
        </button>
        <div className="photocards__name-like-area">
          <h2 className="  photocards__place-name" >{props.name}</h2>
          <button type="button" className="photocards__like-button  button">
            <img className="photocards__likeimg" src={heart} alt="Сердечко" />
            <p className="photocards__likes">{props.likes}</p>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
