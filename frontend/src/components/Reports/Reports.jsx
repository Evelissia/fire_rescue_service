import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRemoveReport } from '../../redux/slices/reports';
import EditReportForm from '../../pages/Admin/EditReportForm';
import styles from './Reports.module.scss';

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
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const onClickRemove = () => {
    if (window.confirm('Вы действительно хотите удалить отчет?')) {
      dispatch(fetchRemoveReport(_id));
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
        <h2>
          Location: {location.street || 'N/A'}, {location.house || 'N/A'},{' '}
          {location.apartment || 'N/A'}
        </h2>
        <p>Danger Level: {dangerLevel}</p>
        <p>Area Size: {areaSize}</p>
        <p>Description: {description}</p>
        <p>Resources: {resources.join(', ')}</p>
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
      {isEditFormOpen && (
        <EditReportForm
          report={{ _id, location, dangerLevel, areaSize, description, resources }}
          onClose={handleCloseEditForm}
        />
      )}
    </div>
  );
};

export default Report;
