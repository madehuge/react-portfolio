import { useEffect } from 'react';

export default function useDocumentMeta({ title, description, keywords }) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('keywords', keywords);
  }, [title, description, keywords]);
}