const Error = ({ refetch }: { refetch: () => void }) => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <h2 className="font-semibold text-light-200 mb-3">
        An error occured while fetching data, please try again
      </h2>
      <button className="btn-primary" onClick={refetch}>
        Re-try
      </button>
    </div>
  );
};

export default Error;
