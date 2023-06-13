import axios from 'axios';

const fetchData = async () => {
  return (
    await axios
      .get('https://645510b8f803f34576395a3e.mockapi.io/items')
      .catch((error) => console.log(error))
  );
};

export default fetchData;
