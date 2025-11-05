// components/MetaTags.js
import React from 'react';
import {Helmet} from "react-helmet";
import Logo from '../assets/dpmh_logo_rm.png'

const MetaTags = ({ 
  title,
  description ,
  keywords,
  image={Logo},
  url = window.location.href,
  type = 'website',
  siteName = 'Dr Prabhat Memorial Hiramati Hospital, Rajendra Nagar, Patna, PIN Code - 800016'
}) => {
  return (
    <Helmet>
   <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
        <meta name="author" content="Dr Prabhat Memorial Hiramati Hospital, Rajendra Nagar, Patna, PIN Code - 800016"></meta>
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default MetaTags;