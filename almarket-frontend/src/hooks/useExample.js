import { useState, useEffect } from "react";

export const useExample = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Example logic
    setData("Example data");
  }, []);

  return data;
};
