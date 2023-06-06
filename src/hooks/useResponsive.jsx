import { useEffect, useState } from 'react';

export default function useResponsive(query, key, start, end) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(${query}: ${key}px)`);
    const handleChange = (event) => {
      setMatches(event.matches);
    };

    mediaQuery.addListener(handleChange);
    setMatches(mediaQuery.matches);

    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, [query, key]);

  return matches;
}
