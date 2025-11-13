// BlogContent.jsx
import React from "react";
import styled from "styled-components";

const BlogContent = ({ blog, loading }) => {
  if (loading) return <p>Loading blog...</p>;

  if (!blog) return <p>Select a blog to read</p>;
  const publishedAt = new Date(blog.published_at);
const humanReadable = publishedAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

  return (
    <>
      <h1>{blog.title}</h1>
      <p><em>Published: {humanReadable} | Author: {blog.author_name}</em></p>
      <img src={blog.featured_image_url} alt={blog.title} style={{ width: "100%", borderRadius: "6px" }} />
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </>
  );
};

export default BlogContent;
