import React from 'react'
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const RightSideLink = ({ blogs, loading, selectedBlog, formatDate }) => {
  return (
    <div>
        <BlogListTitle>📚 All Blog Articles</BlogListTitle>
                                     <nav>
                                    <ul>
                                        {blogs.map(blog => (
                                            <BlogListItem
                                                key={blog.id}
                                                $isActive={selectedBlog && blog.slug === selectedBlog.slug}
                                            >
                                                <Link
                                                    to={`/resources/blogs/${blog.slug}`}
                                                >
                                                    {blog.title}
                                                </Link>
                                                <BlogDate>{formatDate(blog.published_at)}</BlogDate>
                                            </BlogListItem>
                                        ))}
                                    </ul>
                                </nav>
    </div>
  )
}

export default RightSideLink

const BlogListTitle = styled.h3`
    color: #343a40;
    font-size: 1.4em;
    margin-bottom: 15px;
    padding-bottom: 5px;
    border-bottom: 2px solid #dee2e6;
`;

const BlogListItem = styled.li`
    list-style: none;
    margin-bottom: 15px;
    padding: 10px;
    border-left: 3px solid transparent;
    background: #fff;
    border-radius: 5px;
    transition: all 0.3s ease;

    a {
        text-decoration: none;
        color: #343a40;
        font-size: 0.95em;
        font-weight: 500;
        display: block;
        margin-bottom: 5px;
        cursor: pointer;
    }

    &:hover {
        border-left-color: #0056b3;
        background-color: rgba(0, 86, 179, 0.05);
        transform: translateX(5px);
    }
    
    ${props => props.$isActive && css`
        border-left-color: #28a745;
        background-color: rgba(40, 167, 69, 0.1);
        a {
            color: #0056b3;
            font-weight: bold;
        }
    `}
`;

const BlogDate = styled.small`
    color: #6c757d;
    font-size: 0.8em;
`;