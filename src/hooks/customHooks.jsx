import { useState, useEffect, } from 'react';

export const useResize = () => {
  const [appWidth, setAppWidth] = useState(0);
  const [appHeight, setAppHeight] = useState(0);

  const resize = () => {
    setAppWidth(document.getElementsByTagName('main')[0].clientWidth);
    setAppHeight(window.innerHeight);
  };

  useEffect(() => {
    setAppWidth(document.getElementsByTagName('main')[0].clientWidth);
    setAppHeight(window.innerHeight);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return { appWidth, appHeight, };
}
