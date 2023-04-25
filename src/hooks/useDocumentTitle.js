import { useLayoutEffect } from 'react';

const useDocumentTitle = (title) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = 'MAP - Millet eCommerce App';
    }
  }, [title]);
};

export default useDocumentTitle;
