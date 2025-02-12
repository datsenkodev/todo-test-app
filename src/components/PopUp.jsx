export const PopUp = ({ data, onClose }) => {
  return (
    <div className='fixed top-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center'>
      <div className='bg-white p-2 rounded shadow-lg popup-slide-down'>
        <h2 className='text-xl font-bold mb-1'>Todo added successfully!</h2>
        <p>Status 200 OK</p>
        <p>Body: {data.title}</p>

        <button
          onClick={onClose}
          className='bg-[var(--foreground)] outline-0 border border-[var(--foreground)] text-white px-1 py-1 rounded duration-300 hover:bg-transparent focus:bg-transparent hover:text-black focus:text-black'>
          Close
        </button>
      </div>
    </div>
  );
};
