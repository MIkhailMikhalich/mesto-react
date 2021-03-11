import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { useState } from 'react';
import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});
  function handleEditAvatarClick() {

    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function handleSelectedCardClick() {
    setIsImagePopupOpen(!isImagePopupOpen);

  }
  function closeAllPopup() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);

  }
  return (
    <div className="page__content">
      <Header />
      <Main onCard={handleCardClick} onSelectedCard={handleSelectedCardClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />

      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopup} >
        <input name="first" id="profile-name" placeholder="Имя" type="text" className=" popup__input popup__first-input popup__name-input" required minLength={2} maxLength={40} noValidate />
        <span id="profile-name-error" className="popup__error-message" />
        <input name="second" id="profile-information" placeholder="Информация" type="text" className=" popup__input popup__second-input popup__info-input" required minLength={2} maxLength={200} noValidate />
        <span id="profile-information-error" className="popup__error-message" />
        <button type="submit" className="popup__save-button popup__save-button_disabled button">
          Сохранить
        </button>
      </PopupWithForm>
      <PopupWithForm name="place" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopup}>
        <input name="first" id="place-name" placeholder="Название" type="text" className=" popup__input popup__first-input popup__place-name-input" required minLength={2} maxLength={30} noValidate />
        <span id="place-name-error" className="popup__error-message" />
        <input name="second" id="place-src" placeholder="Ссылка на картинку" type="url" className=" popup__input popup__second-input  popup__src-input" required noValidate />
        <span id="place-src-error" className=" popup__error-message" />
        <button type="submit" className="popup__save-button popup__save-button_disabled button">
          Сохранить
        </button>
      </PopupWithForm>
      <PopupWithForm name="changeavatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopup}>
        <input name="second" id="profile-avatar" placeholder="Ссылка" type="url" className=" popup__input popup__second-input popup__avatar-link" required noValidate />
        <span id="profile-avatar-error" className="popup__error-message" />
        <button type="submit" className="popup__save-button popup__save-button_disabled button">
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm name="erase" title="Вы уверены ?" isOpen={false} onClose={closeAllPopup} ><button id="agree" className="button popup__save-button popup__agree-button">
        Да
      </button></PopupWithForm>

      <ImagePopup onClose={closeAllPopup} isOpen={isImagePopupOpen} card={selectedCard} />


      <Footer />
    </div>
  );
}

export default App;
