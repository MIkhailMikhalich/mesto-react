import plus from '../images/plus.svg';
import editButtonPen from '../images/edit_button_pen.svg';
import editButton from '../images/edit_button.svg';
import api from '../utils/api.js';
import React from 'react';
import Card from './Card/Card.js'

function Main(props) {
  const { onEditAvatar, onEditProfile, onAddPlace, onCard, onSelectedCard } = props;
  const [userAvatar, setUserAvatar] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api.getProfile()
      .then((data) => {
        setUserAvatar(data.avatar);
        setUserName(data.name);
        setUserDescription(data.about);
      })
      .catch((err) => console.log(err));
    api.getInitialCards()
      .then((data) => {
        setCards(data);
      }
      )
      .catch((err) => console.log(err));

  }, []);

  return (
    <main>
      <section className="profile">
        <button onClick={onEditAvatar} className="button button_change-avatar">
          <div className="profile__editavatar-button">
            <img className="profile__edit-img" src={editButtonPen} alt="Изменение аватара" />
          </div>
          <img className="profile__avatar" src={{ userAvatar }} alt="Аватар пользователя" />
        </button>
        <div className="profile__information">
          <div>
            <h1 className=" profile__name">{userName}</h1>
            <p className=" profile__text">{userDescription}</p>
          </div>
          <button onClick={onEditProfile} type="button" className="button  profile__edit-button">
            <img className="button__img" src={editButton} alt="Изменение дланных" />
          </button>
        </div>
        <button onClick={onAddPlace} type="button" className=" profile__add-button button">
          <img className="plus" src={plus} alt="Плюс" />
        </button>
      </section>
      <section className="photocards">
        {
          cards.map(item =>
          (<Card onCardClick={onCard} onSelectedCard={onSelectedCard} key={item._id} id={item._id} card={item} link={item.link} likes={item.likes.length} name={item.name} />
          ))
        }
      </section>
    </main>
  )
}
export default Main;
