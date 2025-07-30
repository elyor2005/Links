import React, { useState, useEffect } from "react";
import { Component } from "./Components/GlassEffect";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen bg-black text-white text-2xl animate-pulse">
          Loading...
        </div>
      ) : (
        <Component />
      )}
    </>
  );
};

export default App;
