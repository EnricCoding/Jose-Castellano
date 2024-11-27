import { Metadata } from "next";

interface PageMetadata {
  title: string;
  description: string;
  pageRoute: string;
  ogImgRoute: string;
}

const siteConfig = {
  url: "https://joseghostwriting.com",
  siteName: "Jose Ghost Writing - Potencia tu marca persona en LinkedIn",
};

export const genPageMetadata = ({
  title,
  description,
  pageRoute,
  ogImgRoute,
}: PageMetadata): Metadata => {
  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: pageRoute,
    },
    openGraph: {
      title,
      description,
      url: pageRoute,
      siteName: siteConfig.siteName,
      images: [
        {
          url: ogImgRoute,
        },
      ],
      type: "website",
    },
    twitter: {
      title,
      description,
      images: [ogImgRoute],
    },
  };
};