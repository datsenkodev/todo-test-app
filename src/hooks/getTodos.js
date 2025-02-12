import { useQuery } from '@tanstack/react-query';
import apiClient from '@api/api.js';

export const fetchData = async (endpoint, params = {}) => {
  const response = await apiClient.get(endpoint, {
    params: {
      ...params,
    },
  });
  return response.data;
};

export const useTodos = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () => fetchData('/todos', { _limit: 10 }),
  });
};
