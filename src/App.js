import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { date: new Date(2022, 4, 8), title: 'Car Insurance', amount: 294.67 },
    { date: new Date(2022, 4, 7), title: 'Internet', amount: 94.67 },
    { date: new Date(2022, 4, 6), title: 'Mobile', amount: 67.0 },
    { date: new Date(2022, 4, 5), title: 'House Rend', amount: 400.0 },
  ];
  return (
    <>
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        title={expenses[2].title}
        date={expenses[2].date}
        amount={expenses[2].amount}
      />
      <ExpenseItem
        title={expenses[3].title}
        date={expenses[3].date}
        amount={expenses[3].amount}
      />
    </>
  );
}

export default App;
