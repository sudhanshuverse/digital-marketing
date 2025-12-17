import { useEffect, useState } from "react";
import "./Loader.css";

const Loader = ({ done }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 90) return prev + 1;
        return prev;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  // When route change finishes
  useEffect(() => {
    if (done) {
      let complete = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(complete);
            return 100;
          }
          return prev + 1;
        });
      }, 10);

      return () => clearInterval(complete);
    }
  }, [done]);

  return (
    <div className={`loader-wrapper ${progress === 100 ? "fade-out" : ""}`}>
      <div className="loader-line-container">
        <div
          className="loader-line"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="loader-percent">{progress}%</span>
    </div>
  );
};

export default Loader;
