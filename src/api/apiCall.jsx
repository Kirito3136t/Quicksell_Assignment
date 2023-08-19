import axios from 'axios';

const URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

export const apiCall = async () => {
  try {
    const res = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
    return res.data;

  } catch (error) {
    console.log(error);
  }
};
