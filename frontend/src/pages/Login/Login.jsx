import { useState } from 'react';
import InputComponent from '../../components/InputComponent.jsx';
import Button from '../../components/Button.jsx';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth, selectIsAuth } from '../../redux/slices/auth.js';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: 'eveli@test.ru',
      password: '12345',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      return alert('Не удалось авторизаваться');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/admin" />;
  }

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
                type="password"
                label="Пароль"
                error={Boolean(errors.password?.message)}
                helperText={errors.password?.message}
                {...register('password', { required: 'Введите пароль' })}
                fullWidth
              />
            </div>
            <Button type="submit" label="Войти" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
