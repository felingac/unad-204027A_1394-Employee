'use client'

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function EmployeeForm({ db }) {
  const [employeeData, setEmployeeData] = useState({
    code: '',
    name: '',
    surname: '',
    identity: '',
    address: '',
    telephone: '',
    photo_id: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const insertQuery = `
      INSERT INTO employees (code, name, surname, identity, address, telephone, photo_id)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
  
    try {
      await db.run(insertQuery, [
        employeeData.code,
        employeeData.name,
        employeeData.surname,
        employeeData.identity,
        employeeData.address,
        employeeData.telephone,
        employeeData.photo_id,
      ]);
  
      console.log('Empleado insertado con éxito.');
    } catch (error) {
      console.error('Error al insertar el empleado:', error.message);
    }
  };
  
  

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Code"
        name="code"
        value={employeeData.code}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Name"
        name="name"
        value={employeeData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Surname"
        name="surname"
        value={employeeData.surname}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Identity"
        name="identity"
        value={employeeData.identity}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Address"
        name="address"
        value={employeeData.address}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Telephone"
        name="telephone"
        value={employeeData.telephone}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Photo ID"
        name="photo_id"
        value={employeeData.photo_id}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Crear Empleado
      </Button>
    </form>
  );


 
}

export default EmployeeForm;
