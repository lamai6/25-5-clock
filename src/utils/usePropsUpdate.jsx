import { useRef, useEffect } from 'react';

function usePropsUpdate(callback, deps) {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    callback();
  }, deps);
}

export default usePropsUpdate;
