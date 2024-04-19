import { useState } from 'react';
import InputComponent from '../../components/InputComponent.jsx';
import Button from '../../components/Button.jsx';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchAuth } from '../../redux/slices/auth.js';

// сделать запрос на то, чтобы сделать авторизацию

const Login = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: 'eveli@test.ru',
      password: '12345',
    },
    mode: 'onChange',
  });

  const onSubmit = (values) => {
    dispatch(fetchAuth(values));
  };

  console.log(errors, isValid);

  const handleLogin = () => {
    // Обработчик для авторизации
  };
  return (
    <>
      <div className="wrapper">
        <div className="content_body">
          <div className="pictures"></div>
          <form onSubmit={handleSubmit(onSubmit)} action="" className="form">
            <h1 className="form_title">Вход</h1>
            <div className="form__group">
              <TextField
                type="email"
                className="form__input email"
                label="E-mail"
                error={Boolean(errors.email?.message)}
                helperText={errors.email?.message}
                {...register('email', { required: 'Укажите почту' })}
                fullWidth
              />

              <TextField
                className="form__input password"
                label="Пароль"
                error={Boolean(errors.password?.message)}
                helperText={errors.password?.message}
                {...register('password', { required: 'Введите пароль' })}
                fullWidth
              />
            </div>
            <Button type="submit" label="Войти" onClick={handleLogin} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
