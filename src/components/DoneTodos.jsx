export const DoneTodos = ({ todos }) => {
  return (
    <div>
      <h2 className='text-white mb-4'>Done - {todos.length}</h2>
      <ul className='flex flex-col gap-4'>
        {todos.map((item) => (
          <li
            key={item.id}
            className='shadow-2xl text-success line-through bg-[var(--itemBG)] rounded-[10px] p-5'>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
