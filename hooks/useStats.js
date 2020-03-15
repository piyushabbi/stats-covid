import { useEffect, useState } from "react";

export const useStats = function(url) {
  const [stats, setStats] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(url).then(data => data.json());
      setStats(data);
    }

    fetchData();
  }, [url]);

  return stats;
};
