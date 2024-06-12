import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseTable';
import MonthlyFilter from './MonthlyFilter';

const Home = () => {
  return (
    <>
      <ExpenseForm />
      <MonthlyFilter />
      <ExpenseTable />
    </>
  );
};

export default Home;
