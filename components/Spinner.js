
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Spinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <AiOutlineLoading3Quarters className="text-white animate-spin text-5xl" />
    </div>
  );
}
