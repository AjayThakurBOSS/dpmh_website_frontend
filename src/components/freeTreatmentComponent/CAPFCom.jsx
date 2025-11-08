// components/AyushmanCAPFPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Shield,
  Users,
  FileText,
  Heart,
  ArrowRight,
  CheckCircle,
  Phone,
  Globe,
  Building,
  Award,
  Clock,
  HelpCircle,
  Mail,
  MapPin,
  Stethoscope,
  Pill,
  Ambulance,
  Microscope,
  Star,
  Badge,
  Target,
  Military
} from 'lucide-react';
import CAPFImg from '../../assets/capf_hero.jpeg'

// Styled Components
const HeroSection = styled.section`
  background: linear-gradient(135deg, #ffffffff 0%, #ffffffff 100%);
  position: relative;
  overflow: hidden;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

const ProcessStep = styled.div`
  position: relative;
  
  &:not(:last-child):after {
    content: '';
    position: absolute;
    top: 50%;
    right: -2rem;
    width: 4rem;
    height: 2px;
    background: #3b82f6;
    transform: translateY(-50%);
    
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const FAQItem = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #3b82f6;
  }
`;

const ServiceCard = styled.div`
  background: linear-gradient(135deg, ${props => props.color}20 0%, ${props => props.color}10 100%);
  border-left: 4px solid ${props => props.color};
`;

const ForceCard = styled.div`
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transform: translate(30px, -30px);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const CAPFCom = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is CAPF scheme?",
      answer: "CAPF is a comprehensive health insurance scheme for Central Armed Police Forces personnel and their families, providing cashless treatment up to ₹5 lakh per family per year."
    },
    {
      question: "Who is eligible for CAPF?",
      answer: "All serving and retired CAPF personnel (BSF, CRPF, CISF, SSB, ITBP, AR, NSG) and their dependent family members are eligible for the scheme."
    },
    {
      question: "What medical treatments are covered?",
      answer: "The scheme covers 1,393 medical packages including surgery, medical treatments, day care procedures, pre-existing conditions, and all types of critical illnesses."
    },
    {
      question: "How to avail cashless treatment?",
      answer: "Present your CAPF e-card at any empaneled hospital. The hospital will verify eligibility and provide cashless treatment after pre-authorization."
    },
    {
      question: "Are retired CAPF personnel covered?",
      answer: "Yes, retired CAPF personnel and their families are covered for lifetime under the scheme. They need to register and obtain their CAPF e-card."
    },
    {
      question: "What documents are required for registration?",
      answer: "Service certificate, Aadhaar card, family details, photographs, and dependent certificates are required for registration under CAPF."
    },
    {
      question: "Is there any co-payment or hidden costs?",
      answer: "No, the treatment is completely cashless and paperless. There are no registration fees, co-payments, or hidden costs for the beneficiaries."
    },
    {
      question: "Can we get treatment in any city?",
      answer: "Yes, treatment can be availed at any empaneled hospital across India, making it especially beneficial for personnel posted in different locations."
    }
  ];

  const processSteps = [
    {
      icon: <FileText className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Registration",
      description: "Register through unit or online portal"
    },
    {
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Get e-Card",
      description: "Receive CAPF e-card"
    },
    {
      icon: <Building className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Visit Hospital",
      description: "Go to any empaneled hospital"
    },
    {
      icon: <Heart className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Cashless Treatment",
      description: "Avail cashless medical treatment"
    }
  ];

  const services = [
    {
      icon: <Stethoscope className="w-6 h-6 md:w-8 md:h-8" />,
      title: "OPD Services",
      description: "Consultations, diagnostics, and medicines",
      color: "#3b82f6"
    },
    {
      icon: <Heart className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Surgical Procedures",
      description: "All types of surgeries and procedures",
      color: "#ef4444"
    },
    {
      icon: <Microscope className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Diagnostic Tests",
      description: "Laboratory tests and investigations",
      color: "#10b981"
    },
    {
      icon: <Pill className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Medicines",
      description: "All prescribed medicines and drugs",
      color: "#8b5cf6"
    },
    {
      icon: <Ambulance className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Emergency Care",
      description: "Emergency and critical care services",
      color: "#f59e0b"
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Family Coverage",
      description: "Complete family health coverage",
      color: "#ec4899"
    }
  ];

  const capfForces = [
    {
      name: "Border Security Force",
      abbreviation: "BSF",
      description: "Guardians of India's borders",
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />
    },
    {
      name: "Central Reserve Police Force",
      abbreviation: "CRPF",
      description: "India's largest paramilitary force",
      icon: <Target className="w-6 h-6 md:w-8 md:h-8" />
    },
    {
      name: "Central Industrial Security Force",
      abbreviation: "CISF",
      description: "Industrial security and protection",
      icon: <Building className="w-6 h-6 md:w-8 md:h-8" />
    },
    {
      name: "Sashastra Seema Bal",
      abbreviation: "SSB",
      description: "Guardians of Nepal and Bhutan borders",
      icon: <Badge className="w-6 h-6 md:w-8 md:h-8" />
    },
    {
      name: "Indo-Tibetan Border Police",
      abbreviation: "ITBP",
      description: "Protectors of Himalayan borders",
      icon: <Star className="w-6 h-6 md:w-8 md:h-8" />
    },
    {
      name: "Assam Rifles",
      abbreviation: "AR",
      description: "Sentinel of the Northeast",
      icon: <Star className="w-6 h-6 md:w-8 md:h-8" />
    }
  ];

  const benefits = [
    {
      title: "Cashless Treatment",
      description: "No upfront payment at empaneled hospitals",
      icon: "💳"
    },
    {
      title: "Pan-India Coverage",
      description: "Treatment available across all states",
      icon: "🗺️"
    },
    {
      title: "Family Protection",
      description: "Spouse, children, and dependent parents covered",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Pre-existing Diseases",
      description: "All pre-existing conditions covered from day one",
      icon: "🏥"
    },
    {
      title: "Lifetime Coverage",
      description: "Retired personnel covered for lifetime",
      icon: "🕰️"
    },
    {
      title: "No Age Limit",
      description: "No restrictions based on age of beneficiaries",
      icon: "🎂"
    }
  ];

  const documentsRequired = [
    {
      category: "Service Proof",
      items: ["Service certificate", "Payslip", "ID card"]
    },
    {
      category: "Identity Proof",
      items: ["Aadhaar card", "PAN card", "Voter ID"]
    },
    {
      category: "Family Details",
      items: ["Family photograph", "Dependent certificate", "Marriage certificate"]
    },
    {
      category: "Medical History",
      items: ["Existing medical records", "Previous treatment details"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection className="text-[#000000] bg-white py-12 md:py-20">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="flex items-center mb-4">
                <Ambulance className="w-10 h-10 md:w-12 md:h-12 mr-3" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">CAPF</h1>
              </div>
              <p className="text-lg sm:text-xl mb-4 md:mb-6 opacity-90 leading-relaxed">
                Comprehensive Health Protection for Our Brave Forces
              </p>
              <p className="text-base md:text-lg mb-6 md:mb-8 opacity-80 leading-relaxed">
                A dedicated healthcare scheme for Central Armed Police Forces personnel 
                and their families, ensuring cashless medical treatment across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a href='tel:84060000555'>
                  <button className="bg-[#004AAD] text-[#fff] px-4 py-3 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-[#004aad] transition duration-300 flex items-center justify-center w-full sm:w-auto" style={{border:'2px solid #004AAD'}}>
                    Enquiry for CAPF <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
              <img 
                src={CAPFImg} 
                alt="CAPF Personnel" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:max-w-full"
              />
            </div>
          </div>
        </Container>
      </HeroSection>

      {/* What is CAPF */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">About CAPF</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                CAPF is a specialized health insurance scheme launched to provide comprehensive 
                healthcare coverage to personnel of Central Armed Police Forces and their families. 
                It ensures our brave personnel receive quality medical care without financial worries.
              </p>
              
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">Coverage of ₹5 lakh per family per year</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">Cashless treatment at 25,000+ hospitals</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">Coverage for serving and retired personnel</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">No restrictions on family size or age</span>
                </div>
              </div>
            </div>
            
            <Card className="p-4 md:p-6">
              <div className="bg-blue-50 rounded-lg p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-3 md:mb-4">Scheme Highlights</h3>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="text-center p-3 md:p-4 bg-white rounded-lg">
                    <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-lg md:text-2xl font-bold text-blue-600">35+ Lakh</div>
                    <div className="text-xs md:text-sm text-gray-600">Beneficiaries</div>
                  </div>
                  <div className="text-center p-3 md:p-4 bg-white rounded-lg">
                    <Building className="w-6 h-6 md:w-8 md:h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-lg md:text-2xl font-bold text-green-600">25,000+</div>
                    <div className="text-xs md:text-sm text-gray-600">Hospitals</div>
                  </div>
                  <div className="text-center p-3 md:p-4 bg-white rounded-lg">
                    <FileText className="w-6 h-6 md:w-8 md:h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-lg md:text-2xl font-bold text-purple-600">1,393</div>
                    <div className="text-xs md:text-sm text-gray-600">Medical Packages</div>
                  </div>
                  <div className="text-center p-3 md:p-4 bg-white rounded-lg">
                    <Heart className="w-6 h-6 md:w-8 md:h-8 text-red-600 mx-auto mb-2" />
                    <div className="text-lg md:text-2xl font-bold text-red-600">₹5 Lakh</div>
                    <div className="text-xs md:text-sm text-gray-600">Coverage per Family</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Covered Forces */}
      <section className="py-12 md:py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Covered CAPF Forces</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base">
              All Central Armed Police Forces personnel and their families are covered under this scheme
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {capfForces.map((force, index) => (
              <ForceCard key={index} className="p-4 md:p-6">
                <div className="flex items-start mb-3 md:mb-4">
                  <div className="p-2 rounded-lg mr-3 md:mr-4 bg-white bg-opacity-20">
                    {force.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold mb-1">{force.name}</h3>
                    <div className="text-xs md:text-sm opacity-90">{force.abbreviation}</div>
                  </div>
                </div>
                <p className="text-xs md:text-sm opacity-90 leading-relaxed">{force.description}</p>
                <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-white border-opacity-20">
                  <div className="text-xs opacity-80">Covered under CAPF</div>
                </div>
              </ForceCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Covered */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Medical Services Covered</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                color={service.color}
                className="p-4 md:p-6 rounded-lg"
              >
                <div className="flex items-start mb-3 md:mb-4">
                  <div className="p-2 rounded-lg mr-3 md:mr-4" style={{ backgroundColor: `${service.color}20` }}>
                    <div style={{ color: service.color }}>
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1 md:mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </ServiceCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Key Benefits */}
      <section className="py-12 md:py-16 bg-blue-600 text-white">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Key Benefits</h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-4 md:p-6">
                <div className="text-2xl md:text-3xl mb-3 md:mb-4">{benefit.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{benefit.title}</h3>
                <p className="opacity-90 text-sm md:text-base">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Eligibility & Process */}
      <section className="py-12 md:py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Eligibility & Process</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            <Card className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-3 md:mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                Eligibility Criteria
              </h3>
              <ul className="space-y-2 md:space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">Serving CAPF personnel (all ranks)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">Retired CAPF personnel and families</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">Dependent spouse and children</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">Dependent parents of personnel</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">No income limit for eligibility</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">Coverage across all states in India</span>
                </li>
              </ul>
            </Card>

            <Card className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-3 md:mb-4 flex items-center">
                <FileText className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                Required Documents
              </h3>
              <div className="space-y-3 md:space-y-4">
                {documentsRequired.map((docCategory, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">{docCategory.category}</h4>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {docCategory.items.map((item, itemIndex) => (
                        <span 
                          key={itemIndex}
                          className="px-2 py-1 md:px-3 md:py-1 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm mb-1"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Process Flow */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">How to Avail Benefits</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Simple and streamlined process for our forces to access healthcare services
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 relative">
              {processSteps.map((step, index) => (
                <ProcessStep key={index} className="text-center">
                  <Card className="p-4 md:p-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                      <div className="text-blue-600">
                        {step.icon}
                      </div>
                    </div>
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-xs md:text-sm font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1 md:mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </Card>
                </ProcessStep>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Special Features */}
      <section className="py-12 md:py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Special Features for Forces</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            <Card className="p-4 md:p-6 text-center">
              <Ambulance className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mx-auto mb-3 md:mb-4" />
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1 md:mb-2">Dedicated Support</h3>
              <p className="text-gray-600 text-xs md:text-sm">Special helpline for CAPF personnel</p>
            </Card>
            
            <Card className="p-4 md:p-6 text-center">
              <Clock className="w-8 h-8 md:w-12 md:h-12 text-green-600 mx-auto mb-3 md:mb-4" />
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1 md:mb-2">Quick Processing</h3>
              <p className="text-gray-600 text-xs md:text-sm">Priority processing for forces</p>
            </Card>
            
            <Card className="p-4 md:p-6 text-center">
              <Globe className="w-8 h-8 md:w-12 md:h-12 text-purple-600 mx-auto mb-3 md:mb-4" />
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1 md:mb-2">Pan-India Access</h3>
              <p className="text-gray-600 text-xs md:text-sm">Treatment during postings anywhere</p>
            </Card>
            
            <Card className="p-4 md:p-6 text-center">
              <Award className="w-8 h-8 md:w-12 md:h-12 text-red-600 mx-auto mb-3 md:mb-4" />
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1 md:mb-2">Lifetime Coverage</h3>
              <p className="text-gray-600 text-xs md:text-sm">Continued benefits after retirement</p>
            </Card>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} className="bg-white">
                <button
                  className="w-full px-4 py-3 md:px-6 md:py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-gray-800 text-base md:text-lg pr-4 text-left">
                    {faq.question}
                  </span>
                  <ArrowRight 
                    className={`w-4 h-4 md:w-5 md:h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                      openFAQ === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-4 pb-4 md:px-6 md:pb-4">
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </FAQItem>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default CAPFCom;