import { useState } from 'react';
import InputComponent from '../../components/InputComponent.jsx';
import Button from '../../components/Button.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errors = ['err', 'err2'];

  const handleLogin = () => {
    // Обработчик для авторизации
  };
  return (
    <>
      <div className="wrapper">
        <div className="content_body">
          <div className="pictures"></div>
          <form action="" className="form">
            <h1 className="form_title">Вход</h1>
            <div className="form__group">
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
            <Button label="Войти" onClick={handleLogin} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
