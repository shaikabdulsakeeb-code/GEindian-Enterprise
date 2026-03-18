import { useEffect } from 'react';

const SEO = ({ title, description }) => {
  useEffect(() => {
    // Update title
    const baseTitle = 'Geindian';
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;

    // Update meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = description;
        document.head.appendChild(metaDescription);
      }
    }
  }, [title, description]);

  return null;
};

export default SEO;
