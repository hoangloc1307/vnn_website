import { useEffect, useState } from 'react';
import { isBrowser } from '~/utils/utils';

const useScrollPosition = () => {
  const [scrollPos, setScrollPos] = useState(0);

  const onScroll = () => {
    if (isBrowser) {
      setScrollPos(window.scrollY);
    }
  };

  useEffect(() => {
    if (isBrowser) {
      onScroll();
      window.addEventListener('scroll', onScroll);

      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }
  });

  return scrollPos;
};

export default useScrollPosition;
