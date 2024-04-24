import { useState } from 'react';
import Button from '../../components/Button.jsx';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegister, selectIsAuth } from '../../redux/slices/auth.js';
import { Navigate } from 'react-router-dom';

const Registration = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));

    if (!data.payload) {
      return alert('Не удалось зарегистрироваться');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  const handleRegister = () => {
    // Обработчик для регистрации
  };
  return (
    <>
      <div className="wrapper">
        <div className="content_body">
          <form action="" onSubmit={handleSubmit(onSubmit)} className="form">
            <h1 className="form_title">Регистрация</h1>

            <div className="form__group">
              <TextField
                type="text"
                placeholder="Enter your name"
                className="form__input name"
                error={Boolean(errors.fullName?.message)}
                helperText={errors.fullName?.message}
                {...register('fullName', { required: 'Укажите имя' })}
                fullWidth
              />
              <TextField
                type="email"
                placeholder="Enter your email"
                className="form__input email"
                error={Boolean(errors.email?.message)}
                helperText={errors.email?.message}
                {...register('email', { required: 'Укажите почту' })}
                fullWidth
              />
              <TextField
                type="password"
                placeholder="Enter your password"
                className="form__input password"
                error={Boolean(errors.password?.message)}
                helperText={errors.password?.message}
                {...register('password', { required: 'Введите пароль' })}
                fullWidth
              />
            </div>

            <div className="errors" id="errors"></div>

            <Button
              disabled={!isValid}
              type="submit"
              label="Зарегистрироваться"
              onClick={handleRegister}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
