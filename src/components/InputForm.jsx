import { PlusIcon } from '@heroicons/react/24/outline';

export const InputForm = ({ inputValue, setInputValue, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit} className='flex items-center space-x-2'>
      <div className='relative flex-1'>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className='border border-[var(--foreground)] bg-transparent rounded-lg px-4 py-2 w-full outline-0 focus:shadow-[0_0_32px_-1px_rgb(255_255_255_/_0.8)]'
          placeholder='Add a new task'
        />
        {error && <div className='absolute top-full mt-1 text-red-500 text-sm'>{error}</div>}
      </div>
      <button
        type='submit'
        className='bg-[var(--foreground)] outline-0 border border-[var(--foreground)] text-white px-1 py-1 rounded duration-300 hover:bg-transparent focus:bg-transparent text-3xl'>
        <PlusIcon className='h-6 w-6 text-bold' />
      </button>
    </form>
  );
};
