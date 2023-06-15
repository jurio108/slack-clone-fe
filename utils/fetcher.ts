import axios from 'axios';

const fetcher = (url: string) =>
  axios
    .get(url, {
      withCredentials: true,
    })
    .then((response) => {
      console.log(response);
      response.data
    });

export default fetcher;
