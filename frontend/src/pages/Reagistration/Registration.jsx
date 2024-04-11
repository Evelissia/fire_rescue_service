import { useState } from 'react';
import InputComponent from '../../components/InputComponent.jsx';
import Button from '../../components/Button.jsx';

const Registration = () => {
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
            <h1 className="form_title">Регистрация</h1>

            <div className="form__group">
              <InputComponent
                type="text"
                placeholder="Enter your name"
                className="form__input name"
                onChange={setName}
              />
              <InputComponent
                type="email"
                placeholder="Enter your email"
                className="form__input email"
                onChange={setEmail}
              />
              <InputComponent
                type="password"
                placeholder="Enter your password"
                className="form__input password"
                onChange={setPassword}
              />
            </div>

            {/* Сделать сравнение на схожесть*/}
            <div className="form__group">
              <input
                type="password"
                id="confirm"
                required
                name="confirm_password"
                placeholder="Enter your confirm password"
                className="form__input"
              />
            </div>

            <div className="errors" id="errors"></div>

            <Button label="Зарегистрироваться" onClick={handleRegister} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
