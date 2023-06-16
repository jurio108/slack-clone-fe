import axios from 'axios';

const fetcher = (url: string) =>
  axios
    .get(url, {
      withCredentials: true,
    })
    .then((response) => {
      console.log('fetcher response ==>', response);
      return response.data;
    });

export default fetcher;
