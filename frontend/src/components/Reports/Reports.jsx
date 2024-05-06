import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchRemoveReport } from '../../redux/slices/reports'; // Замените на нужный action

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
    <div>
      {isEditable && <div>{/*<button onClick={onClickRemove}>Удалить</button>*/}</div>}
      <div>
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
