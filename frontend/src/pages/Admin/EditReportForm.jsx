// EditReportForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUpdateReport } from '../../redux/slices/reports';
import { Box, Button, TextField, Alert } from '@mui/material';

const EditReportForm = ({ report, onClose }) => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    location: {
      street: report.location?.street || '',
      house: report.location?.house || '',
      apartment: report.location?.apartment || '',
    },
    dangerLevel: report.dangerLevel || '',
    areaSize: report.areaSize || '',
    description: report.description || '',
    resources: report.resources || [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [parent, child] = name.split('.');
    setFormData((prevState) => ({
      ...prevState,
      [parent]: {
        ...prevState[parent],
        [child]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    dispatch(fetchUpdateReport({ reportId: report._id, updatedData: formData }))
      .then(() => {
        setSuccess('Отчет успешно обновлен');
        setTimeout(() => {
          setSuccess('');
          onClose();
        }, 3000);
      })
      .catch(() => {
        setError('Не удалось обновить отчет');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}
      <TextField
        label="Улица"
        name="location.street"
        value={formData.location.street}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Дом"
        name="location.house"
        value={formData.location.house}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Квартира"
        name="location.apartment"
        value={formData.location.apartment}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Уровень опасности"
        name="dangerLevel"
        value={formData.dangerLevel}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Размер площади"
        name="areaSize"
        type="number"
        value={formData.areaSize}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Описание"
        name="description"
        value={formData.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <button type="submit" onClick={handleSubmit}>
        Сохранить
      </button>
      <button type="button" onClick={onClose}>
        Отмена
      </button>
    </Box>
  );
};

export default EditReportForm;
