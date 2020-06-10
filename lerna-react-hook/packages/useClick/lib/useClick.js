'use strict';
import { useRef, useEffect } from 'react';

module.exports = useClick;

function useClick(onClick) {
    if (typeof onClick !== 'function') return;

    const element = useRef();
    useEffect(() => {
      element.current && element.current.addEventListenr('click', onClick);
      return () => {
        element.current && element.current.removeListener('click', onClick);
      }
    }, []);
    return element;
}
