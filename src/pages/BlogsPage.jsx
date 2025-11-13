import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { ChevronRight } from "lucide-react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import BlogContent from './BlogContent';
import RightSideLink from './RightSideLink';
import Loader2 from '../util/Loader2';

const BlogsPage = ({ onBlogTitleChange }) => {
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [pageLoading, setPageLoading] = useState(true); // For initial page/blog list load
    const [contentLoading, setContentLoading] = useState(false); // For loading single blog content
    const [error, setError] = useState(null);
    const [currentBlogTitle, setCurrentBlogTitle] = useState('');

    const { slug } = useParams();
    const navigate = useNavigate();

    // Flag to track if blogs list has been fetched
    const blogsFetchedRef = React.useRef(false);

    // Fetch detailed content for a specific blog
    const fetchBlogDetails = async (targetSlug, shouldNavigate = true) => {
        if (selectedBlog && selectedBlog.slug === targetSlug) {
            // Avoid refetching if already selected
            return;
        }
        
        try {
            //setContentLoading(true);
            
            // Only navigate if we are *not* in the initial load or if explicitly told to
        /*     if (shouldNavigate) {
                navigate(`/resources/blogs/${targetSlug}`);
            } */

            // Request 1 (Individual Blog Details)
            const response = await fetch(`https://app.prabhatmemorialhospital.com/api/blogs/${targetSlug}`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch blog details');
            }
            const data = await response.json();
            setSelectedBlog(data);
            setCurrentBlogTitle(data.title);
            
            if (onBlogTitleChange) {
                onBlogTitleChange(data.title);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setContentLoading(false);
        }
    };

    // Fetch all blogs on component mount - ONLY ONCE
    useEffect(() => {
        let isMounted = true;

        const fetchBlogsList = async () => {
            try {
                // Request 2 (Total Blog List) - Only runs once on mount
                const listResponse = await fetch('https://app.prabhatmemorialhospital.com/api/blogs');
                if (!listResponse.ok) {
                    throw new Error('Failed to fetch blogs list');
                }
                const blogListData = await listResponse.json();
                
                if (isMounted) {
                    setBlogs(blogListData);
                    blogsFetchedRef.current = true; // Mark as fetched
                    
                    // Determine which blog to load initially
                    let initialSlug = slug;
                    
                    if (!initialSlug && blogListData.length > 0) {
                        initialSlug = blogListData[0].slug;
                    }

                    if (initialSlug) {
                        await fetchBlogDetails(initialSlug, false);
                    }
                }
                
            } catch (err) {
                if (isMounted) {
                    setError(err.message);
                }
            } finally {
                if (isMounted) {
                    setPageLoading(false);
                }
            }
        };

        // Only fetch blogs list if it hasn't been fetched before
        if (!blogsFetchedRef.current) {
            fetchBlogsList();
        }

        return () => {
            isMounted = false;
        };
    }, []); // Empty dependency array - runs only once on mount

    // Handle slug changes when blogs are already loaded
    useEffect(() => {
        if (blogs.length > 0 && slug && (!selectedBlog || selectedBlog.slug !== slug)) {
            fetchBlogDetails(slug, false);
        }
    }, [slug, blogs.length, selectedBlog]); // Only run when slug changes and blogs are loaded

    const handleBlogSelect = async (targetSlug) => {
        await fetchBlogDetails(targetSlug, true);
    };

    // Format date for display
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Display global page loader/error only during initial fetch
    if (pageLoading && blogs.length === 0) {
        return (       
            <BlogsHome>
                <HeroContainer>
                    <Breadcrumb>
                        <a href="/">Home</a>
                        <ChevronRight size={18} />
                        <span>Blogs</span>
                        {currentBlogTitle && (
                            <>
                                <ChevronRight size={18} />
                                <span>{currentBlogTitle}</span>
                            </>
                        )}
                    </Breadcrumb>
                    <Title>Stay updated with our Healthcare Blogs</Title>
                </HeroContainer>

                <BlogContainer>
                    <LayoutGrid>
                        <MainContentArea>
                            <LoaderText>  <Loader2/>  </LoaderText>
                        </MainContentArea>

                        <SidebarArea>
                             <BlogListTitle>📚 All Blog Articles</BlogListTitle>
                           <LoaderText><Loader2/> </LoaderText>
                        </SidebarArea>
                    </LayoutGrid>
                </BlogContainer>
            </BlogsHome>
        );
    }

    if (error && blogs.length === 0) {
        return <BlogContainer>Error: {error}</BlogContainer>;
    }

    return (
        <BlogsHome>
            <HeroContainer>
                <Breadcrumb>
                    <a href="/">Home</a>
                    <ChevronRight size={18} />
                    <span>Blogs</span>
                    {currentBlogTitle && (
                        <>
                            <ChevronRight size={18} />
                            <span>{currentBlogTitle}</span>
                        </>
                    )}
                </Breadcrumb>
                <Title>Stay updated with our Healthcare Blogs</Title>
            </HeroContainer>

            <BlogContainer>
                <LayoutGrid>
                    <MainContentArea>
                        {selectedBlog ? (
                            <BlogContent 
                                blog={selectedBlog} 
                                loading={contentLoading}
                            />
                        ) : (
                            <LoaderText>
                                <Loader2/> 
                            </LoaderText>
                        )}

                        {contentLoading && (
                            <ContentOverlay>
                                <ContentLoader>
                                    <LoaderSpinner />
                                    <LoaderText><Loader2/> </LoaderText>
                                </ContentLoader>
                            </ContentOverlay>
                        )}
                    </MainContentArea>

                    <SidebarArea>
                        <RightSideLink        blogs={blogs}
                        selectedBlog={selectedBlog}
                        formatDate={formatDate}/>
                    </SidebarArea>
                </LayoutGrid>

                {selectedBlog && blogs.length > 1 && (
                    <RelatedBlogsSection>
                        <h2>Related Health Blogs for you</h2>
                        <RelatedBlogsGrid>
                            {blogs
                                .filter(blog => blog.slug !== selectedBlog.slug)
                                .slice(0, 3)
                                .map(blog => (
                                    <BlogCard
                                        key={blog.id}
                                        to={`/resources/blogs/${blog.slug}`}
                                        //onClick={() => handleBlogSelect(blog.slug)}
                                    >
                                        <BlogCardImage
                                            src={blog.featured_image_url}
                                            alt={blog.title}
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                            }}
                                        />
                                        <BlogCardContent>
                                            <h3>{blog.title}</h3>
                                            <p>{formatDate(blog.published_at)}</p>
                                            <ReadMoreLink>Read More &rarr;</ReadMoreLink>
                                        </BlogCardContent>
                                    </BlogCard>
                                ))}
                        </RelatedBlogsGrid>
                    </RelatedBlogsSection>
                )}
            </BlogContainer>
        </BlogsHome>
    );
};

export default BlogsPage;

// Styles remain the same...
const ContentOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    border-radius: 8px;
    transition: opacity 0.2s ease;
`;

const ContentLoader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
`;

const LoaderSpinner = styled.div`
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #0056b3;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 15px;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

const LoaderText = styled.p`
    color: #6c757d;
    font-size: 1.1em;
    text-align: center;
`;

const BlogsHome = styled.div`
    display: flex;
    flex-direction: column;
`;

const HeroContainer = styled.section`
  width: 100%;
  height: 40vh;
  background-image: linear-gradient(to bottom, #2C4B98, #149BD2);
  display: flex;
  align-items: start;
  justify-content: center;
  text-align: center;
  color: white;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  

  @media (max-width: 768px) {
    height: 40vh;
  }
`;

const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  position: absolute;
  top: 50px;
  left: 30px;

  a {
    color: #fff;
    text-decoration: none;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }

  span {
    opacity: 0.8;
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 12px;
  text-align: left;
  margin-top: 10px;
  position: absolute;
  top: 70px;
  left: 30px;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const BlogContainer = styled.div`
    z-index: 9;
    background-color: #ffffff;
    width: 100vw;
    margin: 40px auto;
    padding: 30px 20px 10px 20px;
    font-family: 'Arial', sans-serif;
    color: #343a40;
    position: relative;
    margin-top:-100px;
    border-top-right-radius: 40px ;
    border-top-left-radius: 40px ;
    min-height: 100vh;
    @media (min-width: 900px){
        max-width: 1300px;
    }

`;

const LayoutGrid = styled.div`
    display: flex;
    gap: 30px;
    margin-bottom: 50px;

    @media (max-width: 992px) {
        flex-direction: column;
    }
`;

const MainContentArea = styled.section`
    flex: 7;
    background: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    position: relative;
    min-height: 500px; 

    h1 {
        color: #0056b3;
        font-size: 2.5em;
        margin-bottom: 0.4em;
        font-weight: 600;
    }
    
    h2 {
        color: #343a40;
        font-size: 1.8em;
        border-bottom: 2px solid #dee2e6;
        padding-bottom: 10px;
        margin-top: 30px;
    }

    p {
        line-height: 1.7;
        margin-bottom: 20px;
        text-align: justify;
    }
`;

const SidebarArea = styled.aside`
    flex: 3;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    max-height: 600px;
    overflow-y: auto;
    
    @media (max-width: 992px) {
        order: -1;
        max-height: none;
    }
`;

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

const RelatedBlogsSection = styled.section`
    padding-top: 20px;
    margin-top: 40px;
    border-top: 2px solid #dee2e6;

    h2 {
        color: #0056b3;
        font-size: 1.8em;
        border-bottom: 3px solid #28a745;
        padding-bottom: 5px;
        margin-bottom: 25px;
        font-weight: 600;
    }
`;

const RelatedBlogsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
`;

const BlogCard = styled(Link)`
    background: #fff;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    max-width: 320px;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
`;

const BlogCardImage = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
`;

const BlogCardContent = styled.div`
    padding: 20px;
 
    h3 {
        color: #0056b3;
        font-size: 1.2em;
        margin-bottom: 10px;
        line-height: 1.4;
        font-weight: 600;
    }

    p {
        color: #6c757d;
        font-size: 0.9em;
        margin-bottom: 15px;
    }
`;

const ReadMoreLink = styled.span`
    text-decoration: none;
    color: #28a745;
    font-weight: bold;
    font-size: 0.9em;
    
    &:hover {
        text-decoration: underline;
    }
`;