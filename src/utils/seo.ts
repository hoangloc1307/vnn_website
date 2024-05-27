import { Metadata } from 'next';
import siteMetadata from '~/constants/siteMetadata';

type PageSEOProps = {
  title?: string;
  description?: string;
  image?: string;
  locale: string;
  [key: string]: any;
};

const genPageMetadata = ({ title, description, image, locale, ...rest }: PageSEOProps): Metadata => {
  return {
    title: title ? `${title} | ${siteMetadata.title}` : siteMetadata.title,
    openGraph: {
      title: title ? `${title} | ${siteMetadata.title}` : siteMetadata.title,
      description: description || siteMetadata.description,
      url: './',
      siteName: siteMetadata.title,
      images: image ? image : siteMetadata.socialBanner,
      locale,
      type: 'website',
    },
    twitter: {
      title: title ? `${title} | ${siteMetadata.title}` : siteMetadata.title,
      card: 'summary_large_image',
      images: image ? image : siteMetadata.socialBanner,
    },
    ...rest,
  };
};

export default genPageMetadata;
