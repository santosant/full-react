import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    { date: new Date(2022, 4, 8), title: 'Car Insurance', amount: 294.67 },
    { date: new Date(2022, 4, 7), title: 'Internet', amount: 94.67 },
    { date: new Date(2022, 4, 6), title: 'Mobile', amount: 67.0 },
    { date: new Date(2022, 4, 5), title: 'House Rend', amount: 400.0 },
  ];
  return <Expenses items={expenses} />;
};

export default App;
