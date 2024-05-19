import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchRemoveReport } from '../../redux/slices/reports'; // Замените на нужный action
import styles from './Reports.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const Report = ({
  _id,
  location,
  dangerLevel,
  areaSize,
  description,
  resources,
  user,
  createdAt,
  isEditable,
  isLoading,
}) => {
  const dispatch = useDispatch();

  /*const onClickRemove = () => {
    if (window.confirm('Вы действительно хотите удалить отчет?')) {
      dispatch(fetchRemoveReport(_id)); // Замените на нужный action
    }
  };*/

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.root}>
      {isEditable && <div>{/*<button onClick={onClickRemove}>Удалить</button>*/}</div>}
      <div className="">
        <h2>
          Location: {location.street}, {location.house}, {location.apartment}
        </h2>
        <p>Danger Level: {dangerLevel}</p>
        <p>Area Size: {areaSize}</p>
        <p>Description: {description}</p>
        <p>resources: {resources}</p>
      </div>
    </div>
  );
};

export default Report;
