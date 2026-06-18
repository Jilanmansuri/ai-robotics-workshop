import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const submitEnquiry = async (data) => {
  try {
    const response = await API.post('/api/enquiry', data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data;
    }
    throw {
      success: false,
      message: error.message || 'Something went wrong. Please try again.'
    };
  }
};

export default API;
