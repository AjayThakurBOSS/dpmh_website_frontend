// SitemapPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaUserMd, FaHeart, FaInfoCircle, FaCogs, FaBook, FaBriefcase, FaEnvelope, FaCalendarCheck } from 'react-icons/fa';

const Sitemap = () => {
    // Sitemap data structure matching your navbar
    const sitemapData = [
        {
            title: 'Home',
            path: '/',
            icon: <FaHome />,
            description: 'Welcome to our hospital homepage'
        },
        {
            title: 'Doctors',
            path: '/doctors',
            icon: <FaUserMd />,
            description: 'Meet our expert medical professionals'
        },
        {
            title: 'Center of Excellence',
            path: '/center-of-excellence',
            icon: <FaHeart />,
            description: 'Specialized medical departments and treatments',
            children: [
                { name: 'Cardiology', path: '/departments/cardiology' },
                { name: 'Emergency', path: '/departments/emergency' },
                { name: 'Nephrology', path: '/departments/nephrology' },
                { name: 'Gynecology + Obstetrician', path: '/departments/gynecology-obstetrician' },
                { name: 'Orthopedic', path: '/departments/orthopedic' },
                { name: 'Gastroenterology', path: '/departments/gastroenterology' },
                { name: 'Neurology', path: '/departments/neurology' },
                { name: 'Paediatrics', path: '/departments/paediatrics' },
                { name: 'Neuro-surgery', path: '/departments/neuro-surgery' },
                { name: 'Oncology + Chemotherapy', path: '/departments/oncology-chemotherapy' },
                { name: 'General Medicine', path: '/departments/general-medicine' },
                { name: 'General Surgery', path: '/departments/general-surgery' },
                { name: 'Laproscopic Surgery', path: '/departments/laproscopic-surgery' },
                { name: 'Urology', path: '/departments/urology' },
                { name: 'Pulmonology', path: '/departments/pulmonology' }
            ]
        },
        {
            title: 'About Us',
            path: '/about-us',
            icon: <FaInfoCircle />,
            description: 'Learn about our hospital and mission'
        },
        {
            title: 'Facilities',
            path: '/facilities',
            icon: <FaCogs />,
            description: 'Explore our state-of-the-art facilities'
        },
        {
            title: 'Resources',
            path: '/resources',
            icon: <FaBook />,
            description: 'Educational materials and hospital information',
            children: [
                { name: 'Blog', path: '/resources/blogs' },
                { name: 'Gallery', path: '/resources/gallery' },
                { name: 'News-Letter', path: '/resources/newsletter' },
                { name: 'Testimonials', path: '/resources/testimonials' },
                { name: 'Videos', path: '/resources/videos' }
            ]
        },
        {
            title: 'Career',
            path: '/careers',
            icon: <FaBriefcase />,
            description: 'Join our healthcare team'
        },
        {
            title: 'Contact Us',
            path: '/contact-us',
            icon: <FaEnvelope />,
            description: 'Get in touch with us'
        },
        {
            title: 'Book Appointment',
            path: '/book-appointment',
            icon: <FaCalendarCheck />,
            description: 'Schedule your medical appointment',
            isSpecial: true
        }
    ];

    return (
        <SitemapContainer>
            <SitemapHeader>
                <h1>Website Sitemap</h1>
                <p>Explore all the pages and sections of our hospital website</p>
            </SitemapHeader>

            <SitemapGrid>
                {sitemapData.map((section, index) => (
                    <SitemapCard key={section.title} delay={index * 0.1} isSpecial={section.isSpecial}>
                        <CardHeader isSpecial={section.isSpecial}>
                            <IconWrapper isSpecial={section.isSpecial}>
                                {section.icon}
                            </IconWrapper>
                            <h3>{section.title}</h3>
                        </CardHeader>
                        
                        <CardContent>
                            <p>{section.description}</p>
                            <MainLink to={section.path} isSpecial={section.isSpecial}>
                                Visit {section.title}
                            </MainLink>
                        </CardContent>

                        {section.children && (
                            <ChildrenSection>
                                <ChildrenTitle>Subsections:</ChildrenTitle>
                                <ChildrenList>
                                    {section.children.map((child, childIndex) => (
                                        <ChildItem key={child.name} delay={childIndex * 0.05}>
                                            <ChildLink to={child.path}>
                                                {child.name}
                                            </ChildLink>
                                        </ChildItem>
                                    ))}
                                </ChildrenList>
                            </ChildrenSection>
                        )}
                    </SitemapCard>
                ))}
            </SitemapGrid>

            <QuickLinksSection>
                <QuickLinksTitle>Quick Links</QuickLinksTitle>
                <QuickLinksGrid>
                    <QuickLinkCard to="/">
                        <FaHome />
                        <span>Home</span>
                    </QuickLinkCard>
                    <QuickLinkCard to="/doctors">
                        <FaUserMd />
                        <span>Doctors</span>
                    </QuickLinkCard>
                    <QuickLinkCard to="/book-appointment" special>
                        <FaCalendarCheck />
                        <span>Book Appointment</span>
                    </QuickLinkCard>
                    <QuickLinkCard to="/contact-us">
                        <FaEnvelope />
                        <span>Contact</span>
                    </QuickLinkCard>
                </QuickLinksGrid>
            </QuickLinksSection>
        </SitemapContainer>
    );
};

// Styled Components
const SitemapContainer = styled.div`
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    padding: 40px 20px;
`;

const SitemapHeader = styled.div`
    text-align: center;
    margin-bottom: 50px;

    h1 {
        color: #345FA5;
        font-size: 3rem;
        margin-bottom: 15px;
        font-weight: 700;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }

    p {
        color: #666;
        font-size: 1.2rem;
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.6;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2.2rem;
        }
        
        p {
            font-size: 1rem;
            padding: 0 20px;
        }
    }
`;

const SitemapGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    max-width: 1400px;
    margin: 0 auto 60px;
    padding: 0 20px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 0 10px;
    }
`;

const SitemapCard = styled.div`
    background: white;
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: ${props => props.isSpecial ? '2px solid #00bfff' : '2px solid transparent'};
    animation: fadeInUp 0.6s ease-out ${props => props.delay}s both;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: ${props => props.isSpecial 
            ? 'linear-gradient(90deg, #00bfff, #345FA5)' 
            : 'linear-gradient(90deg, #345FA5, #00bfff)'};
    }

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const CardHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 2px solid #f0f0f0;

    h3 {
        color: ${props => props.isSpecial ? '#00bfff' : '#345FA5'};
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0;
        margin-left: 15px;
    }
`;

const IconWrapper = styled.div`
    background: ${props => props.isSpecial 
        ? 'linear-gradient(135deg, #00bfff, #345FA5)' 
        : 'linear-gradient(135deg, #345FA5, #00bfff)'};
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    box-shadow: 0 4px 15px rgba(52, 95, 165, 0.3);
`;

const CardContent = styled.div`
    margin-bottom: 20px;

    p {
        color: #666;
        line-height: 1.6;
        margin-bottom: 20px;
        font-size: 0.95rem;
    }
`;

const MainLink = styled(Link)`
    display: inline-block;
    background: ${props => props.isSpecial 
        ? 'linear-gradient(135deg, #00bfff, #345FA5)' 
        : 'linear-gradient(135deg, #345FA5, #00bfff)'};
    color: white;
    text-decoration: none;
    padding: 12px 25px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
    text-align: center;
    width: 100%;
    box-shadow: 0 4px 15px rgba(52, 95, 165, 0.3);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(52, 95, 165, 0.4);
        color: white;
    }
`;

const ChildrenSection = styled.div`
    margin-top: 20px;
    padding-top: 20px;
    border-top: 2px solid #f0f0f0;
`;

const ChildrenTitle = styled.h4`
    color: #345FA5;
    font-size: 1.1rem;
    margin-bottom: 15px;
    font-weight: 600;
`;

const ChildrenList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 8px;
`;

const ChildItem = styled.li`
    animation: fadeIn 0.5s ease-out ${props => props.delay}s both;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateX(-10px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

const ChildLink = styled(Link)`
    display: block;
    color: #666;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 6px;
    transition: all 0.3s ease;
    background: #f8f9fa;
    border-left: 3px solid #00bfff;
    font-size: 0.9rem;

    &:hover {
        background: #345FA5;
        color: white;
        transform: translateX(5px);
    }
`;

const QuickLinksSection = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
`;

const QuickLinksTitle = styled.h2`
    text-align: center;
    color: #345FA5;
    font-size: 2.2rem;
    margin-bottom: 30px;
    font-weight: 700;
`;

const QuickLinksGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
`;

const QuickLinkCard = styled(Link)`
    background: ${props => props.special 
        ? 'linear-gradient(135deg, #00bfff, #345FA5)' 
        : 'white'};
    color: ${props => props.special ? 'white' : '#345FA5'};
    text-decoration: none;
    padding: 25px 20px;
    border-radius: 12px;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    border: ${props => props.special ? 'none' : '2px solid #345FA5'};

    svg {
        font-size: 2rem;
        margin-bottom: 10px;
        display: block;
        margin: 0 auto 10px;
    }

    span {
        font-weight: 600;
        font-size: 1.1rem;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        color: ${props => props.special ? 'white' : '#345FA5'};
    }
`;

export default Sitemap;
