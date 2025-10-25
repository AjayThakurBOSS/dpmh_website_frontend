// BlogPage.jsx
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import BlogBC from '../components/breadcrumbs/BlogBC';

// --- Mock Data (Replace with real API call or context) ---
const blogData = [
  { id: 1, title: "Understanding Telemedicine: The Future of Care", category: "Technology", content: "..." },
  { id: 2, title: "The Importance of Preventive Health Screenings", category: "Wellness", content: "..." },
  { id: 3, title: "New Guidelines for Diabetes Management", category: "Diseases", content: "..." },
  { id: 4, title: "Mental Health: Addressing Stigma in Healthcare", category: "Wellness", content: "..." },
  { id: 5, title: "Vaccine Development: A Look Behind the Scenes", category: "Research", content: "..." },
    {
    id: 6,
    title: "Understanding Telemedicine: The Future of Care",
    excerpt: "Telemedicine is rapidly transforming healthcare delivery...",
    content: "The full, in-depth content about telemedicine, its benefits, challenges, and future outlook in the healthcare sector...",
    category: "Technology",
    date: "2023-10-15",
    isFeatured: true,
  },
  {
    id: 7,
    title: "The Importance of Preventive Health Screenings",
    excerpt: "Regular check-ups can catch problems early...",
    content: "Detailed content on various preventive screenings (mammograms, colonoscopies, etc.).",
    category: "Wellness",
    date: "2023-10-01",
    isFeatured: false,
  },
];
// --- End Mock Data ---
// A conceptual data file (e.g., data/blogs.js)
const blogDataa = [
  {
    id: 1,
    title: "Understanding Telemedicine: The Future of Care",
    excerpt: "Telemedicine is rapidly transforming healthcare delivery...",
    content: "The full, in-depth content about telemedicine, its benefits, challenges, and future outlook in the healthcare sector...",
    category: "Technology",
    date: "2023-10-15",
    isFeatured: true,
  },
  {
    id: 2,
    title: "The Importance of Preventive Health Screenings",
    excerpt: "Regular check-ups can catch problems early...",
    content: "Detailed content on various preventive screenings (mammograms, colonoscopies, etc.).",
    category: "Wellness",
    date: "2023-10-01",
    isFeatured: false,
  },
  // ... more blog objects
];

// Helper to get the content of the currently selected blog
const getBlogContent = (id) => {
    return blogData.find(blog => blog.id === id);
};

// --- Sub-Components ---

const MainContent = ({ blog }) => (
    <MainContentArea>
        <h1>{blog.title}</h1>
        <p><em>Published: October 15, 2023 | Category: {blog.category}</em></p>
        <hr/>
        <h2>Introduction</h2>
        <p>The **healthcare landscape** is continually evolving, driven by technological advancements and changing patient needs. One of the most significant shifts in recent years has been the widespread adoption of telemedicine.</p>
        <h2>Detailed Analysis</h2>
        <p>Telemedicine, at its core, is the use of telecommunication and information technology to provide clinical health care from a distance. It eliminates geographical barriers, making specialist consultations accessible to rural and underserved populations. This is not just a temporary fix; it represents a fundamental change in how primary and specialized care is delivered. Advanced features like **remote patient monitoring (RPM)** allow clinicians to track vital signs of high-risk patients outside the clinic, leading to early intervention and better outcomes.</p>
        <p>However, implementation requires careful consideration of data security (HIPAA compliance) and ensuring equitable access for those without reliable internet. The future points towards integrated digital health platforms.</p>
        
        {/* Advanced Feature Placeholder */}
        <blockquote style={{borderLeft: '4px solid #28a745', paddingLeft: '15px', background: '#e9f7eb'}}>
            <p>🌟 **Advanced Feature: Interactive Patient Poll**</p>
            <p>Did this article clarify your understanding of telemedicine? [Yes/No/Mostly]</p>
        </blockquote>

    </MainContentArea>
);


const Sidebar = ({ blogs, currentId, onBlogSelect }) => (
    <SidebarArea>
        <BlogListTitle>📚 All Blog Articles</BlogListTitle>
        <nav>
            <ul>
                {blogs.map(blog => (
                    <BlogListItem key={blog.id} $isActive={blog.id === currentId}>
                        <a href="#" onClick={() => onBlogSelect(blog.id)}>
                            {blog.title}
                        </a>
                    </BlogListItem>
                ))}
            </ul>
        </nav>
        {/* Advanced Feature Placeholder */}
        <div style={{marginTop: '30px', padding: '15px', border: '1px dashed #0056b3', borderRadius: '5px'}}>
            <p>🔍 **Advanced Feature: Search/Filter**</p>
            <input 
                type="text" 
                placeholder="Search by keyword or category..." 
                style={{width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px'}}
            />
        </div>
    </SidebarArea>
);

const RelatedBlogs = ({ blogs, currentId }) => {
    // Filter out the current blog and get a couple of related ones
    const related = blogs.filter(b => b.id !== currentId).slice(0, 3);
    
    return (
        <>
          
        <RelatedBlogsSection>
            <h2>Related Health Topics</h2>
            <div>
                {related.map(blog => (
                    <BlogCard key={blog.id}>
                        <h3>{blog.title}</h3>
                        <p>Category: {blog.category}</p>
                        <a href="#">Read More &rarr;</a>
                    </BlogCard>
                ))}
            </div>
        </RelatedBlogsSection>
        </>

    );
};

// --- Main Page Component ---

const BlogsPage = () => {
    // State to track which blog is currently featured/viewed
    const [featuredBlogId, setFeaturedBlogId] = useState(1); 
    const featuredBlog = getBlogContent(featuredBlogId);

    if (!featuredBlog) {
        return <BlogContainer>Blog post not found.</BlogContainer>;
    }

    return (
        <>
          <BlogBC/>
                  <BlogContainer>
            
            {/* Main Layout Grid (Main Content + Sidebar) */}
            <LayoutGrid>
                {/* 70% Section: Main Blog Content */}
                <MainContent blog={featuredBlog} /> 

                {/* 30% Section: All Blog Headings/Links */}
                <Sidebar 
                    blogs={blogData} 
                    currentId={featuredBlogId} 
                    onBlogSelect={setFeaturedBlogId} 
                />
            </LayoutGrid>

            {/* Related Blogs Section */}
            <RelatedBlogs blogs={blogData} currentId={featuredBlogId} />

        </BlogContainer>
        </>

    );
};

export default BlogsPage;


// styles/BlogStyles.js


// Color Palette
const colors = {
    primary: '#0056b3', // Professional Blue
    secondary: '#28a745', // Green for accents/links
    background: '#f8f9fa', // Light Gray Background
    text: '#343a40', // Dark Text
    border: '#dee2e6', // Light Border
};

// Global Layout Container
const BlogContainer = styled.div`
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    font-family: 'Arial', sans-serif;
    color: ${colors.text};
`;

// Flex container for Main Content and Sidebar
  const LayoutGrid = styled.div`
    display: flex;
    gap: 30px;
    margin-bottom: 50px;

    @media (max-width: 992px) {
        flex-direction: column;
    }
`;

// 70% width for the main article
  const MainContentArea = styled.section`
    flex: 7;
    background: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

    h1 {
        color: ${colors.primary};
        font-size: 2.5em;
        margin-bottom: 0.4em;
    }
    
    h2 {
        color: ${colors.text};
        font-size: 1.8em;
        border-bottom: 2px solid ${colors.border};
        padding-bottom: 10px;
        margin-top: 30px;
    }

    p {
        line-height: 1.7;
        margin-bottom: 20px;
        text-align: justify;
    }
`;

// 30% width for the sidebar
  const SidebarArea = styled.aside`
    flex: 3;
    padding: 20px;
    background: ${colors.background};
    border-radius: 8px;
    
    @media (max-width: 992px) {
        order: -1; /* Puts sidebar on top on mobile */
    }
`;

// Related Blogs Section
  const RelatedBlogsSection = styled.section`
    padding-top: 20px;

    h2 {
        color: ${colors.primary};
        font-size: 1.8em;
        border-bottom: 3px solid ${colors.secondary};
        padding-bottom: 5px;
        margin-bottom: 25px;
    }

    /* Container for the related blog cards */
    div {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
    }
`;

// Individual Related Blog Card Style
  const BlogCard = styled.article`
    background: #fff;
    border: 1px solid ${colors.border};
    border-radius: 6px;
    padding: 15px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    }

    h3 {
        color: ${colors.primary};
        font-size: 1.2em;
        margin-bottom: 10px;
    }

    a {
        text-decoration: none;
        color: ${colors.secondary};
        font-weight: bold;
        &:hover {
            text-decoration: underline;
        }
    }
`;

// Sidebar List Styles
  const BlogListTitle = styled.h3`
    color: ${colors.text};
    font-size: 1.4em;
    margin-bottom: 15px;
    padding-bottom: 5px;
    border-bottom: 2px solid ${colors.border};
`;

  const BlogListItem = styled.li`
    list-style: none;
    margin-bottom: 10px;
    padding: 5px 0;
    border-left: 3px solid transparent;

    a {
        text-decoration: none;
        color: ${colors.text};
        font-size: 0.95em;
        transition: color 0.2s;
    }

    &:hover {
        border-left-color: ${colors.primary};
        background-color: rgba(0, 86, 179, 0.05); /* Light hover effect */
    }
    
    /* Style for the currently active/featured blog */
    ${props => props.$isActive && css`
        border-left-color: ${colors.secondary};
        font-weight: bold;
        a {
            color: ${colors.primary};
        }
    `}
`;