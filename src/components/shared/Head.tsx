import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

interface Props {
  title: string;
  description: string;
}
export const Head = ({ title, description }: Props) => {
  const { pathname: url } = useLocation();
  const image = "/images/banner.png";
  const domain = "jobanaut.co";
  const canonical = url && url === "/" ? domain : domain + url;
  const featuredImage = domain + image;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={featuredImage} />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={canonical} />
      <meta property="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={featuredImage} />
    </Helmet>
  );
};

Head.defaultProps = {
  description:
    "Jobanaut is a state-of-the-art job search and resume writing platform that harnesses the power of AI to provide job seekers with tailored job recommendations and professionally written resumes, enabling them to land their dream jobs more easily and efficiently than ever before. ",
};
