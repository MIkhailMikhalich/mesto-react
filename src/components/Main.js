import plus from '../images/plus.svg';
import editButtonPen from '../images/edit_button_pen.svg';
import editButton from '../images/edit_button.svg';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/API.js';
import React from 'react';
import Card from './Card/Card.js'

function Main(props) {
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
                <button onClick={props.onEditAvatar} className="button button_change-avatar">
                    <div className="profile__editavatar-button">
                        <img className="profile__edit-img" src={editButtonPen} alt="Изменение аватара" />
                    </div>
                    <img className="profile__avatar" src={`${userAvatar}`} alt="Аватар пользователя" />
                </button>
                <div className="profile__information">
                    <div>
                        <h1 className=" profile__name">{userName}</h1>
                        <p className=" profile__text">{userDescription}</p>
                    </div>
                    <button onClick={props.onEditProfile} type="button" className="button  profile__edit-button">
                        <img className="button__img" src={editButton} alt="Изменение дланных" />
                    </button>
                </div>
                <button onClick={props.onAddPlace} type="button" className=" profile__add-button button">
                    <img className="plus" src={plus} alt="Плюс" />
                </button>
            </section>
            <section className="photocards">
                {
                    
                    cards.map(item => 
                        
                        <Card onCardClick={props.onCard} key={item.id} card={item} link={item.link} likes={item.likes.length} name={item.name} />
                    )
                }
            </section>
            <PopupWithForm name="profile" title="Редактировать профиль" isOpen={props.isEditProfilePopupOpen} onClose={props.onClose} >
                <input name="first" id="profile-name" placeholder="Имя" type="text" className=" popup__input popup__first-input popup__name-input" required minLength={2} maxLength={40} noValidate />
                <span id="profile-name-error" className="popup__error-message" />
                <input name="second" id="profile-information" placeholder="Информация" type="text" className=" popup__input popup__second-input popup__info-input" required minLength={2} maxLength={200} noValidate />
                <span id="profile-information-error" className="popup__error-message" />
                <button type="submit" className="popup__save-button popup__save-button_disabled button">
                    Сохранить
        </button>
            </PopupWithForm>
            <PopupWithForm name="place" title="Новое место" isOpen={props.isAddPlacePopupOpen} onClose={props.onClose}>
                <input name="first" id="place-name" placeholder="Название" type="text" className=" popup__input popup__first-input popup__place-name-input" required minLength={2} maxLength={30} noValidate />
                <span id="place-name-error" className="popup__error-message" />
                <input name="second" id="place-src" placeholder="Ссылка на картинку" type="url" className=" popup__input popup__second-input  popup__src-input" required noValidate />
                <span id="place-src-error" className=" popup__error-message" />
                <button type="submit" className="popup__save-button popup__save-button_disabled button">
                    Сохранить
        </button>
            </PopupWithForm>
            <PopupWithForm name="changeavatar" title="Обновить аватар" isOpen={props.isEditAvatarPopupOpen} onClose={props.onClose} >
                <input name="second" id="profile-avatar" placeholder="Ссылка" type="url" className=" popup__input popup__second-input popup__avatar-link" required noValidate />
                <span id="profile-avatar-error" className="popup__error-message" />
                <button type="submit" className="popup__save-button popup__save-button_disabled button">
                    Сохранить
        </button>
            </PopupWithForm>

            <PopupWithForm name="erase" title="Вы уверены ?" isOpen={false} onClose={props.onClose} ><button id="agree" className="button popup__save-button popup__agree-button">
                Да
      </button></PopupWithForm>

            <ImagePopup onClose={props.onClose}  isOpen={props.isImagePopupOpen} card={props.card}/>


        </main>
    )
}
export default Main;