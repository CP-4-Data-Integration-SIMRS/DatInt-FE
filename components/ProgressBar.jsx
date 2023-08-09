const ProgressBar = ({ progress }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-end w-[85%] font-bold text-[#333543]">
        <div>{Math.floor(progress)}%</div>
      </div>
      <div className="relative w-[85%] mx-auto my-2">
        <div className="h-[0.7rem] bg-gray-200 rounded-full">
          <div
            className="h-full bg-[#2ED4BF] transition-all rounded-full duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
