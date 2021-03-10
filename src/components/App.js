import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { useState } from 'react';
function App() {
  const [isEditProfilePopupOpen,setisEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen,setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen,setisEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen,setisImagePopupOpen] = useState(false);
  
  const [selectedCard,setSelectedCard]=useState({});
  function handleEditAvatarClick() {

    setisEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  function handleEditProfileClick() {
    setisEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(!isAddPlacePopupOpen);
  }
  function handleCardClick(card)
  {
    setSelectedCard(card);
    setisImagePopupOpen(!isImagePopupOpen);
  }
  function closeAllPopup()
  {
    setisEditAvatarPopupOpen(false);
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisImagePopupOpen(false);
    setSelectedCard({});
  }
  return ( 
    <div className="page__content">
      <Header />
      <Main onCard={handleCardClick} card={selectedCard} isImagePopupOpen={isImagePopupOpen} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onClose={closeAllPopup} isEditProfilePopupOpen={isEditProfilePopupOpen} isAddPlacePopupOpen={isAddPlacePopupOpen} isEditAvatarPopupOpen={isEditAvatarPopupOpen}>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
