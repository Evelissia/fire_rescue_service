import { useState } from 'react';
import InputComponent from '../../components/InputComponent.jsx';
import Button from '../../components/Button.jsx';

const Submit = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errors = ['err', 'err2'];

  const handleRegister = () => {
    // Обработчик для регистрации
  };
  return (
    <>
      <div className="wrapper">
        <div className="content_body">
          <form action="" className="form">
            <h1 className="form_title">Отправить заявку</h1>

            <div className="form__group">
              <InputComponent
                type="text"
                placeholder="Введите ваше имя"
                className="form__input name"
                onChange={setName}
              />
              <InputComponent
                type="tel"
                placeholder="Ведите номер телефона"
                className="form__input email"
                onChange={setEmail}
              />
              <InputComponent
                type="text"
                placeholder="Введите улицу"
                className="form__input password"
                onChange={setPassword}
              />
              <InputComponent
                type="text"
                placeholder="Введите дом"
                className="form__input password"
                onChange={setPassword}
              />
              <InputComponent
                type="text"
                placeholder="Введите квартиру"
                className="form__input password"
                onChange={setPassword}
              />
            </div>

            {/* Сделать сравнение на схожесть*/}

            <div className="errors" id="errors"></div>

            <Button label="Отправить заявку" onClick={handleRegister} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Submit;
