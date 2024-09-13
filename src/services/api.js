import axios from 'axios';

const API_URL = 'https://testapi.getlokalapp.com/common/jobs';

export const fetchJobs = async (page) => {
  try {
    const response = await axios.get(`${API_URL}?page=${page}`);
    console.log('API response:', response.data);

    // Check if 'results' exists and is an array
    if (response.data && Array.isArray(response.data.results)) {
      return response.data.results; // Extract jobs from the 'results' array
    } else {
      console.error('Unexpected API response format:', response.data);
      return []; // Return an empty array to prevent errors
    }
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

// Ensure `fetchJobDetails` is defined and exported
export const fetchJobDetails = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching job details:', error);
      throw error;
    }
  };