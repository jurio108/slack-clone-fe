import useSWR from "swr";
import fetcher from '@utils/fetcher';

const Users = () => {
  const { data, error, mutate } = useSWR('http://localhost:3095/api/users', fetcher, {
    dedupingInterval: 2000,
  });

  return { data, error, mutate }
}

export default Users;