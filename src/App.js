import { useState } from 'react';
import { Typography, Box, makeStyles } from '@material-ui/core';
import './App.css';
import Balance from './Componets/Balance';
import ExpenseCard from './Componets/ExpenseCard';
import Transactions from './Componets/Transactions';
import NewTransaction from './Componets/NewTransaction';
import { useEffect } from 'react';

const useStyle = makeStyles({
  header: {
    margin: '10px 0',
  	color: 'blue',
	  fontSize: 36,
	  textTransform: 'uppercase',
  },
  component: {
    background: '#FFF',
    padding: 10,
    borderRadius: 20,
    display: 'flex',
    width: 800,
    '& > *': {
      padding: 10,
      width: '50%',
      height: '70vh'
    }
  }
})

function App() {
  const classes = useStyle();

  const [transactions, setTransactions] = useState([
    { id: 1, text: 'ShamKaNasta', amount: -100},
    { id: 2, text: 'Salary', amount: 15000},
    { id: 3, text: 'Books', amount: -500},
    { id: 4, text: 'Bonus', amount: 1500 },
  ]);

  const deleteTransaction = (id) => {
    console.log(id);
    setTransactions(transactions.filter(transaction => transaction.id !== id));
    console.log(transactions);
  }

  const addTransaction = (transaction) => {
    setTransactions(transactions => [transaction, ...transactions]);
    console.log(transaction);
    console.log(transactions);
  }


  return (
    <div className="App">
      <Typography className={classes.header}>Expense Tracker</Typography>
      <Box className={classes.component}>
        <Box>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions} />
          <NewTransaction addTransaction={addTransaction}/>
        </Box>
        <Box>
          <Transactions transactions={transactions} deleteTransaction={deleteTransaction}/>
        </Box>
      </Box>
    </div>
  );
}

export default App;
