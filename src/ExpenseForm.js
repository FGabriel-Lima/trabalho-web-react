import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function ExpenseForm({ addExpense }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Adicionar o gasto
    addExpense({ name, date, value });

    // Limpar os campos
    setName('');
    setDate('');
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Data"
        type="date"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        fullWidth
        margin="normal"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <TextField
        label="Valor"
        variant="outlined"
        fullWidth
        margin="normal"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Adicionar Gasto
      </Button>
    </form>
  );
}

export default ExpenseForm;
