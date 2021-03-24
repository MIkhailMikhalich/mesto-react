import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { useState } from 'react';
import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import ImagePopup from './ImagePopup.js';
import currentUserContext from '../contexts/CurrentUserContext.js';
import api from '../utils/api.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [selectedCard, setSelectedCard] = useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getProfile()
      .then((data) => { setCurrentUser(data) })
      .catch((err) => console.log(err));
    api.getInitialCards()
      .then((data) => {
        setCards(data);
      }
      )
      .catch((err) => console.log(err));

  }, [])


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
  function handleUpdateUser(data) {

    api.setProfileData(data.name, data.about)
      .then((data) => { setCurrentUser(data); closeAllPopup(); })
      .catch((err) => console.log(err));

  }

  function handleUpdateAvatar(data) {

    api.setProfileAvatar(data.avatar)
      .then((data) => { setCurrentUser(data); closeAllPopup(); })
      .catch((err) => console.log(err));

  }

  function handleAddPlaceSubmit(data) {
    api.postCard(data)
      .then((data) => { setCards([data, ...cards]); closeAllPopup(); })
      .catch((err) => console.log(err));

  }

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
    if (isOwn) {
      api.deleteCard(card._id)
        .then((data) => { setCards(cards.filter(card => card._id !== deletedId)) })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="page__content">
      <Header />
      <currentUserContext.Provider value={currentUser}>
        <Main cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} onCardClick={handleCardClick} onSelectedCard={handleSelectedCardClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />

        <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopup} />
        <AddPlacePopup onPlaceSubmit={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} onClose={closeAllPopup} />
        <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopup} />
        <PopupWithForm name="erase" title="Вы уверены ?" isOpen={false} onClose={closeAllPopup} ><button id="agree" className="button popup__save-button popup__agree-button">
          Да
      </button></PopupWithForm>

        <ImagePopup onClose={closeAllPopup} isOpen={isImagePopupOpen} card={selectedCard} />


        <Footer />
      </currentUserContext.Provider>
    </div>

  );
}

export default App;
