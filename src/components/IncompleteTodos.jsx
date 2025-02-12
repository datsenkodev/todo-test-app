import { CheckIcon, TrashIcon } from '@heroicons/react/24/outline';

export const IncompleteTodos = ({ todos, handleDone, handleDelete }) => {
  return (
    <div>
      <h2 className='text-white mb-4'>Tasks to do - {todos.length}</h2>
      <ul className='flex flex-col gap-4'>
        {todos.map((item) => (
          <li
            key={item.id}
            className='flex justify-between gap-2 bg-[var(--itemBG)] rounded-[10px] p-5 shadow-2xl'>
            {item.title}
            <span className='flex gap-2'>
              <CheckIcon className='h-6 w-6 cursor-pointer' onClick={() => handleDone(item)} />
              <TrashIcon className='h-6 w-6 cursor-pointer' onClick={() => handleDelete(item.id)} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
