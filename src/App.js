import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { data: new Date(2022, 4, 8), title: 'Car Insurance', amount: 294.67 },
    { data: new Date(2022, 4, 7), title: 'Internet', amount: 94.67 },
    { data: new Date(2022, 4, 6), title: 'Mobile', amount: 67.0 },
    { data: new Date(2022, 4, 5), title: 'House Rend', amount: 400.0 },
  ];
  return (
    <>
      <ExpenseItem
        title={expenses[0].title}
        data={expenses[0].data}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        title={expenses[1].title}
        data={expenses[1].data}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        title={expenses[2].title}
        data={expenses[2].data}
        amount={expenses[2].amount}
      />
      <ExpenseItem
        title={expenses[3].title}
        data={expenses[3].data}
        amount={expenses[3].amount}
      />
    </>
  );
}

export default App;
