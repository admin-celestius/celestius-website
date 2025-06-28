import { useEffect, useState } from 'react';
import { differenceInSeconds, addDays, startOfDay } from 'date-fns';

interface CountdownPopupProps {
  targetDate: Date;
  onClose: () => void;
}

const CountdownPopup: React.FC<CountdownPopupProps> = ({ targetDate, onClose }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    return differenceInSeconds(targetDate, now);
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (time: number) => {
    const days = Math.floor(time / (60 * 60 * 24));
    const hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((time % (60 * 60)) / 60);
    const seconds = time % 60;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  if (!isMounted) return null; // Prevent rendering until mounted

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 transition-opacity duration-300 ease-in-out">
      <div className="bg-gray-800 p-8 rounded-xl shadow-xl text-center animate-fadeIn">
        <h2 className="text-2xl font-bold text-white mb-4">Countdown</h2>
        <div className="grid grid-cols-4 gap-4 text-center">
          {/* Days */}
          <div className="flex flex-col items-center">
            <div className="text-6xl font-bold text-primary">
              {String(days).padStart(2, '0')}
            </div>
            <div className="text-gray-400">Days</div>
          </div>
          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="text-6xl font-bold text-primary">
              {String(hours).padStart(2, '0')}
            </div>
            <div className="text-gray-400">Hours</div>
          </div>
          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="text-6xl font-bold text-primary">
              {String(minutes).padStart(2, '0')}
            </div>
            <div className="text-gray-400">Minutes</div>
          </div>
          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="text-6xl font-bold text-primary">
              {String(seconds).padStart(2, '0')}
            </div>
            <div className="text-gray-400">Seconds</div>
          </div>
        </div>
        <button onClick={onClose} className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Close
        </button>
      </div>
    </div>
  );
};

export default CountdownPopup;
