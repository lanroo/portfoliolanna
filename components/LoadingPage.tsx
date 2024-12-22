import { useState, useEffect } from "react";

function LoadingDots() {
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev === 2 ? 0 : prev + 1)); 
    }, 300); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-full bg-black">
      <div className="flex space-x-3">
        <div
          className={`w-4 h-4 rounded-full bg-white transition-all duration-300 ${
            activeDot === 0 ? "transform translate-y-4" : ""
          }`}
        />
        <div
          className={`w-4 h-4 rounded-full bg-white transition-all duration-300 ${
            activeDot === 1 ? "transform translate-y-4" : ""
          }`}
        />
        <div
          className={`w-4 h-4 rounded-full bg-white transition-all duration-300 ${
            activeDot === 2 ? "transform translate-y-4" : ""
          }`}
        />
      </div>
    </div>
  );
}

export default function LoadingPage() {
  return <LoadingDots />;
}
