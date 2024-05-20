import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

const CreateReportForm = ({ onSubmit, onClose }) => {
  const [newReport, setNewReport] = useState({
    location: {
      street: '',
      house: '',
      apartment: '',
    },
    dangerLevel: '',
    areaSize: '',
    description: '',
    resources: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReport((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        [name]: value,
      },
    }));
  };

  const handleSubmit = () => {
    onSubmit(newReport);
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        label="Улица"
        name="street"
        value={newReport.location.street}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Дом"
        name="house"
        value={newReport.location.house}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Квартира"
        name="apartment"
        value={newReport.location.apartment}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Уровень опасности"
        name="dangerLevel"
        value={newReport.dangerLevel}
        onChange={(e) => setNewReport({ ...newReport, dangerLevel: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Размер площади"
        name="areaSize"
        type="number"
        value={newReport.areaSize}
        onChange={(e) => setNewReport({ ...newReport, areaSize: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Описание"
        name="description"
        value={newReport.description}
        onChange={(e) => setNewReport({ ...newReport, description: e.target.value })}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        style={{ marginRight: '10px' }}>
        Добавить отчет
      </Button>
      <Button variant="contained" color="primary" onClick={onClose}>
        Закрыть форму
      </Button>
    </Box>
  );
};

export default CreateReportForm;
