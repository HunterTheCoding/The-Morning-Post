import { format } from 'date-fns';
import { useCallback, useEffect, useState } from 'react';

interface CountdownTimerProps {
  expiresAt: string;
  onExpire: () => void;
  isActive: boolean;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ expiresAt, onExpire, isActive, className }) => {
  const formatRemainingTime = useCallback((expiresAt: string) => {
    const currentDate = new Date();
    const expirationDate = new Date(expiresAt);

    if (!isActive) {
      return `Expired on ${format(expirationDate, 'do MMMM yyyy hh:mm a')}`;
    }

    const timeDiff = expirationDate.getTime() - currentDate.getTime();

    if (timeDiff <= 0) {
      onExpire();
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    return `${days} days ${hours} hours ${minutes} minutes remaining`;
  }, [isActive, onExpire]);

  const [remainingTime, setRemainingTime] = useState<string>(
    formatRemainingTime(expiresAt)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(formatRemainingTime(expiresAt));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [expiresAt, formatRemainingTime]);

  return <p className={className}>{remainingTime}</p>;
};

export default CountdownTimer;
