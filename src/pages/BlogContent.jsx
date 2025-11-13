// BlogContent.jsx
import React from "react";
import styled from "styled-components";

const BlogContent = ({ blog, loading }) => {
  if (loading) return <p>Loading blog...</p>;

  if (!blog) return <p>Select a blog to read</p>;

  return (
    <>
      <h1>{blog.title}</h1>
      <p><em>Published: {blog.published_at} | Author: {blog.author_name}</em></p>
      <img src={blog.featured_image_url} alt={blog.title} style={{ width: "100%", borderRadius: "6px" }} />
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </>
  );
};

export default BlogContent;
