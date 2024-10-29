import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpenseForm from './ExpenseForm';

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Carregar os gastos do localStorage quando o app iniciar
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(savedExpenses);
  }, []);

  useEffect(() => {
    // Salvar os gastos no localStorage sempre que houver uma mudança
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  // O estado é atualizado com uma cópia da lista antiga e o novo gasto
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const removeExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  // Cálculo do total gasto
  const totalSpent = expenses.reduce((total, expense) => total + parseFloat(expense.value), 0);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Registro de Gastos
      </Typography>

      <ExpenseForm addExpense={addExpense} />

      <List>
        {expenses.map((expense, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={expense.name}
              secondary={`Data: ${expense.date} - Valor: R$ ${expense.value}`}
            />
            <IconButton edge="end" aria-label="delete" onClick={() => removeExpense(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>

      <Typography variant="h6" gutterBottom>
        Total gasto: R$ {totalSpent.toFixed(2)}
      </Typography>
    </Container>
  );
}

export default App;
