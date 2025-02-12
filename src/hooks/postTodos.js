import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '@api/api';

const postData = async (url, item = {}) => {
  const response = await apiClient.post(url, item);
  return response.data;
};

export const useAddNewTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['newTodo'],
    mutationFn: (newTodo) => postData('/todos', newTodo),
    onSuccess: (data) => {
      queryClient.invalidateQueries(['todos']);
      return data;
    },
  });
};
