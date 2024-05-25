// components/CreateResourceForm/CreateResourceForm.jsx
import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Alert,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchAddResources } from '../../redux/slices/resources';

const RESOURCE_TYPES = ['fire truck', 'ambulance', 'rescue vehicle'];
const RESOURCE_STATUSES = ['available', 'busy', 'maintenance'];

const CreateResourceForm = ({ onSubmit, onClose }) => {
  const dispatch = useDispatch();
  const [newResource, setNewResource] = useState({
    name: '',
    type: '',
    status: 'available',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewResource((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!newResource.name || !newResource.type || !newResource.status) {
      setError('Все поля должны быть заполнены');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    dispatch(fetchAddResources(newResource))
      .then(() => {
        setSuccess('Ресурс успешно создан');
        setNewResource({
          name: '',
          type: '',
          status: 'available',
        });
        setTimeout(() => {
          setSuccess('');
          onClose();
        }, 3000);
      })
      .catch(() => {
        setError('Не удалось создать ресурс');
      });
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}
      <TextField
        label="Название"
        name="name"
        value={newResource.name}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel id="type-label">Тип</InputLabel>
        <Select
          labelId="type-label"
          name="type"
          value={newResource.type}
          onChange={handleInputChange}
          label="Тип">
          {RESOURCE_TYPES.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel id="status-label">Статус</InputLabel>
        <Select
          labelId="status-label"
          name="status"
          value={newResource.status}
          onChange={handleInputChange}
          label="Статус">
          {RESOURCE_STATUSES.map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        style={{ marginRight: '10px' }}>
        Добавить ресурс
      </Button>
      <Button variant="contained" color="primary" onClick={onClose}>
        Закрыть форму
      </Button>
    </Box>
  );
};

export default CreateResourceForm;
