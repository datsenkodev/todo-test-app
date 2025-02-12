import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '@api/api';

const deleteData = async (id) => {
  const response = await apiClient.delete(`/todos/${id}`);
  return response.data;
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['deleteTodo'],
    mutationFn: (id) => deleteData(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });
};
