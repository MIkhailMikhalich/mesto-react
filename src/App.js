import logo from './images/logo.svg';
import plus from './images/plus.svg';
import editButtonPen from './images/edit_button_pen.svg';
import editButton from './images/edit_button.svg';
import fiilheart from './images/fiilheart.svg';
import heart from './images/heart.svg';
import trashcan from './images/trashcan.svg';
function App() {
  return (
    <div className="page__content">
  <header className="header">
    <img className="header__logo" src={logo} alt="Логотип" />
  </header>
  <main>
    <section className="profile">
      <button className="button button_change-avatar">
        <div className="profile__editavatar-button">
          <img className="profile__edit-img" src={editButtonPen} alt="Изменение аватара" />
        </div>
        <img className="profile__avatar" src={"#"} alt="Аватар пользователя" />
      </button>
      <div className="profile__information">
        <div>
          <h1 className=" profile__name"> </h1>
          <p className=" profile__text"> </p>
        </div>
        <button type="button" className="button  profile__edit-button">
          <img className="button__img" src={editButton} alt="Изменение дланных" />
        </button>
      </div>
      <button type="button" className=" profile__add-button button">
        <img className="plus" src={plus} alt="Плюс" />
      </button>
    </section>
    <section className="photocards">
    </section>
    <footer className="footer">
      <p className="footer__copyright">©2020 Mesto Russia</p>
    </footer>
    <div id="popup" className="popup popup_type_profile">
      <button className="button popup__overlay" />
      <div className="popup__window">
        <h3 className="popup__heading">Редактировать профиль</h3>
        <button type="button" className="button button_close popup__close-button"> <img className="popup__close-button-img" src={plus} alt="крестик" /></button>
        <form id="profile-form" name="profile-iformation" className="popup__form">
          <input name="first" id="profile-name" placeholder="Имя" type="text" className=" popup__input popup__first-input popup__name-input" required minLength={2} maxLength={40} noValidate />
          <span id="profile-name-error" className="popup__error-message" />
          <input name="second" id="profile-information" placeholder="Информация" type="text" className=" popup__input popup__second-input popup__info-input" required minLength={2} maxLength={200} noValidate />
          <span id="profile-information-error" className="popup__error-message" />
          <button type="submit" className="popup__save-button popup__save-button_disabled button">
            Сохранить
          </button>
        </form>
      </div>
    </div>
    <div id="popup-place" className="popup popup_type_place">
      <button className="button popup__overlay" />
      <div className="popup__window">
        <h3 className="popup__heading">Новое место</h3>
        <button type="button" className="button button_close popup__place-close-button"> <img className="popup__close-button-img" src={plus} alt="крестик" /></button>
        <form id="place-form" name="photo-iformation" className="popup__form">
          <input name="first" id="place-name" placeholder="Название" type="text" className=" popup__input popup__first-input popup__place-name-input" required minLength={2} maxLength={30} noValidate />
          <span id="place-name-error" className="popup__error-message" />
          <input name="second" id="place-src" placeholder="Ссылка на картинку" type="url" className=" popup__input popup__second-input  popup__src-input" required noValidate />
          <span id="place-src-error" className=" popup__error-message" />
          <button type="submit" className="popup__save-button popup__save-button_disabled button">
            Сохранить
          </button>
        </form>
      </div>
    </div>
    <div id="popup-photo" className="popup popup_type_photo">
      <button className="button popup__overlay" />
      <div className="popup__photo-window">
        <button type="button" className="button button_close popup__photo-close-button"> <img className="popup__close-button-img" src={plus} alt="крестик" /></button>
        <img className="popup__photo-img" src="#" alt="Фото" />
        <p className="popup__photo-name" />
      </div>
    </div>
    <div id="popup-changeavatar" className="popup popup_type_changeavatar">
      <button className="button popup__overlay" />
      <div className="popup__window">
        <h3 className="popup__heading">Обновить аватар</h3>
        <button type="button" className="button button_close popup__close-button"> <img className="popup__close-button-img" src={plus} alt="крестик" /></button>
        <form id="avatar-form" name="profile-avatar" className="popup__form">
          <input name="second" id="profile-avatar" placeholder="Ссылка" type="url" className=" popup__input popup__second-input popup__avatar-link" required noValidate />
          <span id="profile-avatar-error" className="popup__error-message" />
          <button type="submit" className="popup__save-button popup__save-button_disabled button">
            Сохранить
          </button>
        </form>
      </div>
    </div>
    <div id="popup-erase" className="popup popup_type_erase">
      <button className="button popup__overlay" />
      <div className="popup__window">
        <h3 className="popup__heading">Вы уверены ?</h3>
        <button type="button" className="button button_close popup__close-button"> <img className="popup__close-button-img" src={plus} alt="крестик" /></button>
        <button id="agree" className="button popup__save-button popup__agree-button">
          Да
        </button>
      </div>
    </div>
  </main>
  <template id="photocard" />
</div>

  );
}

export default App;
