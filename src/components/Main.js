import plus from '../images/plus.svg';
import editButtonPen from '../images/edit_button_pen.svg';
import editButton from '../images/edit_button.svg';
import api from '../utils/api.js';
import React from 'react';
import Card from './Card/Card.js'
import currentUserContext from '../contexts/CurrentUserContext.js';
function Main(props) {
  const { onEditAvatar, onEditProfile, onAddPlace, onCardClick, onSelectedCard } = props;
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(currentUserContext);

  React.useEffect(() => {

    api.getInitialCards()
      .then((data) => {
        setCards(data);
      }
      )
      .catch((err) => console.log(err));

  }, []);

  function handleCardLike(card) {

    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id) ? newCard : c));
    })
      .catch((err) => console.log(err));
  }
  function handleCardDelete(card) {
    const deletedId = card._id;
    const isOwn = card.owner._id === currentUser._id;
    if(isOwn){
    api.deleteCard(card._id)
    .then((data)=>{setCards(cards.filter(card => card._id !== deletedId))})
      .catch((err) => console.log(err));
    }
  }
  return (
    <main>
      <section className="profile">
        <button onClick={onEditAvatar} className="button button_change-avatar">
          <div className="profile__editavatar-button">
            <img className="profile__edit-img" src={editButtonPen} alt="Изменение аватара" />
          </div>
          <img className="profile__avatar" src={currentUser.avatar} alt="Аватар пользователя" />
        </button>
        <div className="profile__information">
          <div>
            <h1 className=" profile__name">{currentUser.name}</h1>
            <p className=" profile__text">{currentUser.about}</p>
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
          (<Card onCardLike={handleCardLike} onCardDelete={handleCardDelete} onCardClick={onCardClick} onSelectedCard={onSelectedCard} key={item._id} id={item._id} card={item} link={item.link} likes={item.likes.length} name={item.name} />
          ))
        }
      </section>
    </main>
  )
}
export default Main;
