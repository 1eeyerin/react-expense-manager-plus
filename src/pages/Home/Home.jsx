import { useQuery } from '@tanstack/react-query';
import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseTable';
import MonthlyFilter from './MonthlyFilter';

const Home = () => {
  const { data, isPending, isFetching } = useQuery({
    queryKey: ['todos'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/posts/1').then((res) =>
        res.json(),
      ),
  });

  console.log('@@ data: ', data);
  console.log('isPending: ', isPending);
  console.log('isFetching: ', isFetching);

  return (
    <>
      <ExpenseForm />
      <MonthlyFilter />
      <ExpenseTable />
    </>
  );
};

export default Home;
