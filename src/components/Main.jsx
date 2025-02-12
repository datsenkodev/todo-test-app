'use client';
import { useState, useEffect } from 'react';

import { useTodos } from '@hooks/getTodos';
import { useAddNewTodo } from '@hooks/postTodos';
import { useDeleteTodo } from '@hooks/deleteTodos';

import { IncompleteTodos } from './IncompleteTodos';
import { DoneTodos } from './DoneTodos';
import { InputForm } from './InputForm';

import { PopUp } from './PopUp';
import { Loader } from './Loader';

export const Main = () => {
  const [error, setError] = useState('');
  const [doneTodos, setDoneTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [successData, setSuccessData] = useState(null);
  const [currentTodos, setCurrentTodos] = useState([]);

  const { data: todos, refetch, isLoading } = useTodos();
  const { mutate: addTodo } = useAddNewTodo();
  const { mutate: deleteTodo } = useDeleteTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      setError('This field cannot be empty');
    } else {
      addTodo(
        { title: inputValue },
        {
          onSuccess: (data) => {
            setSuccessData(data);
            setCurrentTodos([...currentTodos, data]);
            refetch();
          },
        },
      );
      setError('');
      setInputValue('');
    }
  };

  const handleDone = (item) => {
    setDoneTodos([...doneTodos, item]);
    const updatedTodos = currentTodos.filter((todo) => todo.id !== item.id);
    setCurrentTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    deleteTodo(id);
    const updatedTodos = currentTodos.filter((todo) => todo.id !== id);
    setCurrentTodos(updatedTodos);
  };

  const handleClosePopup = () => {
    setSuccessData(null);
  };

  useEffect(() => {
    if (todos) {
      setCurrentTodos(todos);
    }
  }, [todos]);

  return (
    <div className='h-full w-100 flex items-center justify-center'>
      <div className='flex flex-col py-12 px-16 gap-10 max-h-[80%] overflow-y-scroll bg-[var(--blockColor)] min-w-[36rem] rounded-xl'>
        <InputForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSubmit={handleSubmit}
          error={error}
        />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {currentTodos && currentTodos.length ? (
              <IncompleteTodos
                todos={currentTodos}
                handleDone={handleDone}
                handleDelete={handleDelete}
              />
            ) : null}
            {doneTodos && doneTodos.length ? <DoneTasks todos={doneTodos} /> : null}
          </>
        )}
        {doneTodos && doneTodos.length ? <DoneTodos todos={doneTodos} /> : null}
        {successData && <PopUp data={successData} onClose={handleClosePopup} />}
      </div>
    </div>
  );
};
