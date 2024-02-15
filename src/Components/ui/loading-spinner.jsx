import { CgSpinner } from 'react-icons/cg';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[50dvh]">
      <div
        className="flex gap-2 items-center px-5 py-2.5 font-semibold leading-6 text-white rounded-lg shadow-sm transition bg-primary-700"
        disabled="">
        <CgSpinner className="text-2xl animate-spin" />
        <span>wait a moment</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
