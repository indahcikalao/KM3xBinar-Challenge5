import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Success({ label }) {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(3);

  useEffect(() => {
    if (timeLeft === 0) {
      navigate('/');
      setTimeLeft(3);
    }

    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, navigate]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{label} Berhasil!</h1>
      <p>Redirecting to home in {timeLeft} ...</p>
    </div>
  );
}

export default Success;
