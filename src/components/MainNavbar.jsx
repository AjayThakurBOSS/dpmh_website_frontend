// MainNavbar.js (FIXED MOBILE SUBMENU VISIBILITY WITH LINKS)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaCalendarCheck, FaBars, FaTimes } from 'react-icons/fa';
import { FaCaretDown } from "react-icons/fa6";
import Logo1 from '../../src/assets/logo-3.png';

const MainNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null); 

    // Function to generate URL-friendly slugs
    const generateSlug = (text) => {
        return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    };

    const navItems = [
        { name: 'Home', link: '/' },
        { name: 'Doctors', link: '/doctors' },
        { 
            name: 'Center of Excellence', 
            dropdown: true, 
            isSpecial: true, 
            submenu: [
                { name: 'Cardiology', link: '/departments/cardiology' },
                { name: 'Emergency', link: '/departments/emergency' },
                { name: 'Nephrology', link: '/departments/nephrology' },
                { name: 'Gynecology + obstetrician', link: '/departments/gynecology-obstetrician' },
                { name: 'Orthopedic', link: '/departments/orthopedic' },
                { name: 'Gastroenterology', link: '/departments/gastroenterology' },
                { name: 'Neurology', link: '/departments/neurology' },
                { name: 'Paediatrics', link: '/departments/paediatrics' },
                { name: 'Neuro-surgery', link: '/departments/neuro-surgery' },
                { name: 'Oncology + Chemotherapy', link: '/departments/oncology-chemotherapy' },
                { name: 'General Medicine', link: '/departments/general-medicine' },
                { name: 'General Surgery', link: '/departments/general-surgery' },
                { name: 'Laproscopic Surgery', link: '/departments/laproscopic-surgery' },
                { name: 'Urology', link: '/departments/urology' },
                { name: 'Pulmonology', link: '/departments/pulmonology' }
            ] 
        },
        { name: 'About Us', link: '/about-us' },
        { 
            name: 'Facilities', 
            link: '/facilities'
           
        },
        { 
            name: 'Resources', 
            dropdown: true, 
            submenu: [
                { name: 'Blog', link: '/resources/blogs' },
                { name: 'Gallery', link: '/resources/gallery' },
                { name: 'News-Latter', link: '/resources/newsletter' },
                { name: 'Testimonials', link: '/resources/testimonials' },
                { name: 'Videos', link: '/resources/videos' }
            ] 
        },
         { name: 'Career', link: '/careers' },
        { name: 'Contact Us', link: '/contact-us' },
    ];

    const toggleSubMenu = (itemName) => {
        if (window.innerWidth <= 992) {
            setOpenSubmenu(openSubmenu === itemName ? null : itemName);
        }
    };

    const handleNavLinkClick = (item) => {
        if (window.innerWidth <= 992) {
            setIsOpen(false);
            setOpenSubmenu(null);
        }
    };

    return (
        <NavContainer>
            <LogoSection>
                <Link to="/">
                    <img src={Logo1} alt='hospital-logo' />
                </Link>
            </LogoSection>
            
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </Hamburger>

            <NavLinks isOpen={isOpen}>
                {navItems.map((item) => (
                    <NavItem 
                        key={item.name} 
                        hasDropdown={item.dropdown} 
                        isSpecial={item.isSpecial}
                        isMobileOpen={openSubmenu === item.name}
                    >
                        {item.dropdown ? (
                            <NavLink 
                                as="div"
                                isSpecial={item.isSpecial} 
                                onClick={(e) => {
                                    if (window.innerWidth <= 992) {
                                        e.preventDefault();
                                        toggleSubMenu(item.name);
                                    }
                                }}
                                onMouseEnter={() => {
                                    if (window.innerWidth > 992) {
                                        setOpenSubmenu(item.name);
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (window.innerWidth > 992) {
                                        setOpenSubmenu(null);
                                    }
                                }}
                            >
                                {item.name} {item.dropdown && <FaCaretDown style={{marginTop:'4px'}} />}
                            </NavLink>
                        ) : (
                            <NavLink 
                                as={Link} 
                                to={item.link}
                                isSpecial={item.isSpecial} 
                                onClick={() => handleNavLinkClick(item)}
                            >
                                {item.name}
                            </NavLink>
                        )}
                        
                        {item.dropdown && item.submenu.length > 0 && (
                            <SubMenu 
                                isSpecial={item.isSpecial}
                                isMobileOpen={openSubmenu === item.name}
                                onMouseEnter={() => {
                                    if (window.innerWidth > 992) {
                                        setOpenSubmenu(item.name);
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (window.innerWidth > 992) {
                                        setOpenSubmenu(null);
                                    }
                                }}
                            >
                                {item.submenu.map((subItem) => (
                                    <SubMenuItem 
                                        key={subItem.name} 
                                        as={Link} 
                                        to={subItem.link}
                                        isSpecial={item.isSpecial}
                                        onClick={() => {
                                            if (window.innerWidth <= 992) {
                                                setIsOpen(false);
                                                setOpenSubmenu(null);
                                            }
                                        }}
                                    >
                                        {subItem.name}
                                    </SubMenuItem>
                                ))}
                            </SubMenu>
                        )}
                    </NavItem>
                ))}
            </NavLinks>

            <AppointmentButton as={Link} to="/book-appointment">
                <FaCalendarCheck /> BOOK APPOINTMENT
            </AppointmentButton>
        </NavContainer>
    );
};

// --- Styled Components ---

const NavContainer = styled.nav`
    background-color: #345FA5;
 
    padding: 10px 2.5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    min-height: 80px;
    
    @media (max-width: 992px) {
        flex-wrap: wrap; 
        padding: 10px 15px; 
    }
`;

const LogoSection = styled.div`
    img {
        height: 80px;
        color: #fff;
        z-index: 100;
    }
    @media (max-width: 992px) {
        img {
            height: 50px;
        }
    }
`;

const SubMenu = styled.div`
    display: none; 
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 220px;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-top: 3px solid ${props => props.isSpecial ? '#345FA5' : '#00bfff'};
    z-index: 20;

    ${props => props.isSpecial && `
        @media (min-width: 993px) {
            justify-content: center;
            flex-wrap: wrap; 
            width: 1200px;
            min-width: 400px;
            left: 50%;
            transform: translateX(-50%);
            padding: 10px;
            background-color: #f7f7f7;
            border-top: 3px solid #ffc107;
        }
    `}

    @media (max-width: 992px) {
        display: ${props => props.isMobileOpen ? 'block' : 'none'}; 
        position: relative;
        top: auto;
        width: 100%;
        min-width: auto;
        box-shadow: none;
        border-top: none;
        background-color: #3b508f;
        padding: 0;
    }
`;

const SubMenuItem = styled(Link)`
    display: block;
    padding: 10px 15px;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: background-color 0.2s;
    white-space: nowrap;
    color: #3b508f; 
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
        color: #00bfff;
    }

    ${props => props.isSpecial && `
        @media (min-width: 993px) {
            flex-basis: 32%; 
            padding: 10px 15px;
            box-sizing: border-box;
            color: #345FA5; 
            background-color: #a4e0f4ff;
            border-radius: 5px;
            margin: 3px;
            
            &:hover {
              background-color: #f0f0f0;
              color: #00bfff;
            }
        }
    `}

    @media (max-width: 992px) {
        color: white;
        padding-left: 30px;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        &:hover {
            background-color: #4c62a5;
        }
    }
`;

const NavItem = styled.div`
    position: relative;
    
    &:hover > ${SubMenu} {
        @media (min-width: 993px) {
            display: ${props => props.isSpecial ? 'flex' : 'block'};
        }
    }

    @media (max-width: 992px) {
        width: 100%;
        background-color: ${props => props.isMobileOpen ? '#4c62a5' : 'transparent'};
    }
`;

const NavLink = styled(Link)`
    display: flex;
    align-items: start;
    justify-content: flex-start;
    gap: 5px; 
    color: white;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 600;
    padding: 10px 15px;
    transition: background-color 0.2s, color 0.2s;
    cursor: pointer;
    white-space: nowrap;
    justify-content: ${props => (props.isSpecial || window.innerWidth > 992) ? 'center' : 'flex-start'};
    border: none;
    background: none;

    &:hover {
        color: ${props => props.isSpecial ? 'white' : '#ffffffff'};
        background-color: ${props => props.isSpecial ? '#345FA5' : 'transparent'};
    }

    @media (max-width: 992px) {
        width: 100%;
        justify-content: center;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        background-color: ${props => props.isSpecial ? '#345FA5' : 'transparent'};
        color: ${props => props.isSpecial ? '#white' : 'white'};

        &:hover {
            background-color: ${props => props.isSpecial ? '#00bfff;' : '#00bfff'};
        }
    }
    
    ${props => props.isSpecial && `
        @media (min-width: 993px) {
            background-color: #345FA5;
            color: #ffffffff;
            font-weight: 700;
            padding: 5px 10px;
            border-radius: 4px;
            margin: 0 5px;
        }
    `}
`;

const NavLinks = styled.div`
    display: flex;
    align-items: center;
    
    @media (max-width: 992px) {
        flex-direction: column;
        position: absolute;
        top: 100%; 
        left: 0;
        width: 100%;
        background-color: #3b508f; 
        z-index: 10;
        max-height: ${props => (props.isOpen ? 'calc(100vh - 80px)' : '0')}; 
        overflow-y: auto;
        transition: max-height 0.3s ease-in-out;
    }
`;

const AppointmentButton = styled(Link)`
    background-color: #00bfff;
    color: white;
    border: none;
    padding: 8px 15px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 4px;
    white-space: nowrap;
    text-decoration: none;

    svg {
        margin-right: 8px;
    }

    &:hover {
        background-color: #0099cc;
        color: white;
    }

    @media (max-width: 992px) {
        width: 100%;
        order: 3;
        margin-top: 10px;
        padding: 12px;
        justify-content: center;
    }
`;

const Hamburger = styled.div`
    display: none;
    position: absolute;
    right: 5%;
    top: 25%;
    transform: translateY(-25%);
    font-size: 1.5rem;
    cursor: pointer;
    color: white;
    z-index: 100;
    border-radius: 5px;
    padding: 7px 15px;
    background-color: #00bfff;
    
    @media (max-width: 992px) {
        display: block;
    }
`;

export default MainNavbar;