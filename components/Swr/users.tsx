import useSWR from "swr";
import fetcher from '@utils/fetcher';

const Users = () => {
  const { data, error, mutate } = useSWR('/api/users', fetcher, {
    dedupingInterval: 2000,
  });

  return { data, error, mutate }
}

export default Users;