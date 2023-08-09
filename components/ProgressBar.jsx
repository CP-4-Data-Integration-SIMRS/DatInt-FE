const ProgressBar = ({ progress }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-[0.7rem] my-3 bg-gray-200 rounded-full w-[85%] mx-auto relative">
        <div
          className="h-full bg-[#2ED4BF] transition-all rounded-full duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="ml-2">{Math.floor(progress)}%</div>
    </div>
  );
};

export default ProgressBar;
