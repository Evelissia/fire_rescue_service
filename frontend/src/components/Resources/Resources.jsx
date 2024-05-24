import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Resources.module.scss';
import { fetchRemoveResources } from '../../redux/slices/resources';

const Report = ({ _id, name, type, status, user, createdAt, isEditable, isLoading }) => {
  const dispatch = useDispatch();
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const onClickRemove = () => {
    if (window.confirm('Вы действительно хотите удалить ресурс?')) {
      dispatch(fetchRemoveResources(_id));
    }
  };

  const onClickEdit = () => {
    setIsEditFormOpen(true);
  };

  const handleCloseEditForm = () => {
    setIsEditFormOpen(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.root}>
      <div className="">
        <h2>Name: {name}</h2>
        <p>Type: {type}</p>
        <p>Status: {status}</p>
      </div>
      <button
        variant="contained"
        color="primary"
        onClick={onClickRemove}
        className={styles.removeButton}>
        Удалить
      </button>
      <button
        variant="contained"
        color="primary"
        onClick={onClickEdit}
        className={styles.editButton}>
        Редактировать
      </button>
    </div>
  );
};

export default Report;
