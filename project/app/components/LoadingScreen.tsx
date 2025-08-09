import { useEffect, useState } from 'react';
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    // Simulate progress over 3 seconds
    const interval = setInterval(() => {
      start += 2.17; // Roughly 65% over 3s
      if (start >= 65) {
        setProgress(65);
        clearInterval(interval);
      } else {
        setProgress(start);
      }
    }, 31); // About 3sec to 65%
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${montserrat.className}`} style={{
      background: '#181818',
      minHeight: '100vh',
      minWidth: '100vw',
      position: 'fixed',
      top: 0, left: 0,
      zIndex: 1000,
      color: '#fff'
    }}>
    
      {/* Center "Loading..." */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <div style={{
          borderRadius: '100%',
          border: '1px solid #222',
          padding: '40px',
          background: 'rgba(17,17,17,0.8)',
          textAlign: 'center',
          fontSize: 16,
          color: '#bbb'
        }}>
          Loading...
        </div>
      </div>
      {/* Bottom progress bar */}
      <div style={{
        position: 'absolute',
        bottom: 30,
        left: 0,
        width: '100%',
        height: 4,
        background: '#111'
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          borderRadius: 2,
          background: "linear-gradient(348deg, rgb(255, 250, 239) 53.53%, rgb(252, 214, 139) 58.59%, rgb(249, 120, 76) 66.72%, rgb(156, 53, 109) 73.85%, rgb(0, 0, 0) 80.83%)",
        }} />
      </div>
      {/* Percentage */}
      <div style={{
        position: 'absolute',
        bottom: 18,
        right: 30,
        color: '#fff',
        fontSize: 42,
        fontWeight: 400
      }}>
        {Math.round(progress)}%
      </div>
    </div>
  );
}
