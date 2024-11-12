const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="loader-spinner border-t-4 border-b-4 border-blue-500 rounded-full w-12 h-12 mb-4 animate-spin"></div>
        <p className="text-xl font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
