import axios, { AxiosRequestConfig } from 'axios';
import { FetchDataTypes } from '../constants/Types';
import useFetchingState from '../hooks/useFetchingState';

const API_BASE_URL = `http://192.168.18.96:5001/`;

const useFetch = () => {
  const { updateFetchingState } = useFetchingState();

  const fetchData = async ({ endPoint, method, data }: FetchDataTypes) => {
    const config: AxiosRequestConfig = {
      method,
      url: `${API_BASE_URL}${endPoint}`,
      data,
    };

    try {
      updateFetchingState(true, 'Processing...');
      const { data: responseData, status, statusText } = await axios(config);
      return { data: responseData, status, statusText };
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || 'An error occurred while fetching data.';
      console.error('Error fetching data:', errorMessage);
      throw new Error(errorMessage);
    } finally {
      updateFetchingState(false,``);
    }
  };

  return { fetchData };
};

export default useFetch;
