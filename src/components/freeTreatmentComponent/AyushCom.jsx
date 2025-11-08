// components/AyushmanBharatPage.js
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
  Home
} from 'lucide-react';
import AyushImage from '../../assets/ayush.jpg'

// Styled Components
const HeroSection = styled.section`
  background: linear-gradient(135deg, #fff 0%, #fff 100%);
  position: relative;
  overflow: hidden;
  color: #000;
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
const ServiceCard = styled.div`
  background: linear-gradient(135deg, ${props => props.color}20 0%, ${props => props.color}10 100%);
  border-left: 4px solid ${props => props.color};
`;

const AyushCom = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

    const services = [
      {
        icon: <Stethoscope className="w-6 h-6 md:w-8 md:h-8" />,
        title: "OPD Services",
        description: "Consultations, medicines, and basic investigations",
        color: "#8b5cf6"
      },
      {
        icon: <Heart className="w-6 h-6 md:w-8 md:h-8" />,
        title: "Indoor Treatment",
        description: "Hospitalization and surgical procedures",
        color: "#ef4444"
      },
      {
        icon: <Pill className="w-6 h-6 md:w-8 md:h-8" />,
        title: "Medicines",
        description: "Allopathic and Ayurvedic medicines",
        color: "#10b981"
      },
      {
        icon: <Microscope className="w-6 h-6 md:w-8 md:h-8" />,
        title: "Investigations",
        description: "Laboratory tests and diagnostic procedures",
        color: "#3b82f6"
      },
      {
        icon: <Ambulance className="w-6 h-6 md:w-8 md:h-8" />,
        title: "Emergency Services",
        description: "Emergency care and ambulance services",
        color: "#f59e0b"
      },
      {
        icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />,
        title: "Maternity Benefits",
        description: "Complete maternity and child care",
        color: "#ec4899"
      }
    ];

  const faqs = [
    {
      question: "What is the coverage amount under Ayushman Bharat?",
      answer: "Ayushman Bharat provides health coverage of up to ₹5 lakh per family per year for secondary and tertiary care hospitalization."
    },
    {
      question: "Is there any age limit for beneficiaries?",
      answer: "No, there is no age limit. All family members are covered regardless of age."
    },
    {
      question: "What medical treatments are covered?",
      answer: "The scheme covers approximately 1,393 medical packages including all pre-existing conditions, surgery, medical and day care treatments, cost of medicines and diagnostics."
    },
    {
      question: "How to check if I'm eligible?",
      answer: "You can check your eligibility by visiting the official website pmjay.gov.in, using the Ayushman Bharat app, or calling the helpline number 14555."
    },
    {
      question: "Are there any costs for the beneficiary?",
      answer: "No, the treatment is completely cashless and paperless at all empaneled hospitals. There are no registration fees or any other hidden costs."
    }
  ];

  const processSteps = [
    {
      icon: <FileText className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Check Eligibility",
      description: "Verify your eligibility through the official portal or helpline"
    },
    {
      icon: <Home className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Visit Hospital",
      description: "Go to any empaneled hospital with your Aadhaar card"
    },
    {
      icon: <CheckCircle className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Get Treatment",
      description: "Receive cashless treatment after verification"
    },
    {
      icon: <Heart className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Recover",
      description: "Focus on recovery without financial worries"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection className="text-[#000000] py-12 md:py-20">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="flex items-center mb-4">
                <Shield className="w-10 h-10 md:w-12 md:h-12 mr-3" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Ayushman Bharat Yojana
                </h1>
              </div>
              <p className="text-lg sm:text-xl mb-4 md:mb-6 opacity-90 leading-relaxed">
                Pradhan Mantri Jan Arogya Yojana - World's Largest Health Protection Scheme
              </p>
              <p className="text-base md:text-lg mb-6 md:mb-8 opacity-80 leading-relaxed">
                Providing health coverage of ₹5 lakh per family per year for secondary and tertiary care hospitalization
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a href='tel:8406000555'>
                  <button className="bg-[#004AAD] border-[#004AAD] text-white px-4 py-3 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-[#004AAD] transition duration-300 flex items-center justify-center w-full sm:w-auto" style={{border:'1px solid #004AAD'}}>
                    Call to Check Eligibility <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </a>
                <a href='tel:8406000555'>
                  <button className="border-2 border-[#004AAD] text-[#004AAD] px-4 py-3 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 flex items-center justify-center w-full sm:w-auto">
                    <Phone className="mr-2 w-4 h-4 md:w-5 md:h-5" /> 8406000555
                  </button>
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
              <img 
                src={AyushImage} 
                alt="Ayushman Bharat Yojana"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:max-w-full"
              />
            </div>
          </div>
        </Container>
      </HeroSection>

      {/* What is Ayushman Bharat */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">What is Ayushman Bharat?</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY) is a flagship scheme of the Government of India 
                launched to achieve Universal Health Coverage (UHC). It is the world's largest health protection scheme.
              </p>
              
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">Coverage of ₹5 lakh per family per year</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">Cashless and paperless access to healthcare</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">Covers secondary and tertiary care hospitalization</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">No restrictions on family size, age, or gender</span>
                </div>
              </div>
            </div>
            
            <Card className="p-4 md:p-6">
              <div className="bg-blue-50 rounded-lg p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-3 md:mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="text-center p-3 md:p-4 bg-white rounded-lg">
                    <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-lg md:text-2xl font-bold text-blue-600">50+ Crore</div>
                    <div className="text-xs md:text-sm text-gray-600">Beneficiaries</div>
                  </div>
                  <div className="text-center p-3 md:p-4 bg-white rounded-lg">
                    <Globe className="w-6 h-6 md:w-8 md:h-8 text-green-600 mx-auto mb-2" />
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

      {/* Eligibility Criteria */}
      <section className="py-12 md:py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Eligibility Criteria</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <Card className="p-4 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6 text-center">
              Who Can Avail Benefits?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-3 md:space-y-4">
                <h4 className="text-base md:text-lg font-semibold text-green-600 flex items-center">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" /> Included Categories
                </h4>
                <ul className="space-y-2 md:space-y-3 text-gray-600 text-sm md:text-base">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Families in rural areas based on Socio-Economic Caste Census (SECC) 2011 data
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Families of designated occupational categories in urban areas
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Families without able-bodied adult members (16-59 years)
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    SC/ST households and other specified categories
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                <h4 className="text-base md:text-lg font-semibold text-red-600 flex items-center">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" /> Automatic Inclusion
                </h4>
                <ul className="space-y-2 md:space-y-3 text-gray-600 text-sm md:text-base">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Families living in one room with kucha walls and kucha roof
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Households with no adult member between age 16 to 59
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Female-headed households with no adult male member
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Disabled member and no able-bodied adult member
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 md:mt-8 p-3 md:p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 text-center text-sm md:text-base">
                <strong>Note:</strong> Eligibility is determined based on deprivation and occupational criteria 
                of Socio-Economic Caste Census (SECC) 2011 data. You can check your eligibility online.
              </p>
            </div>
          </Card>
        </Container>
      </section>

      {/* Services Offered */}
      <section className="py-12 md:py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Healthcare Services</h2>
            <div className="w-20 h-1 bg-[#004AAD] mx-auto"></div>
            <p className="text-gray-600 mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Comprehensive medical care services provided under CGHS
            </p>
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

      {/* Process to Get Treatment */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Process to Get Treatment</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Follow these simple steps to avail cashless treatment under Ayushman Bharat
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
            
            <div className="mt-8 md:mt-12 bg-blue-50 rounded-2xl p-4 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4 md:mb-6 text-center">
                Documents Required
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                <div className="bg-white p-3 md:p-4 rounded-lg text-center">
                  <FileText className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800 text-sm md:text-base">Aadhaar Card</div>
                </div>
                <div className="bg-white p-3 md:p-4 rounded-lg text-center">
                  <FileText className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800 text-sm md:text-base">Ration Card</div>
                </div>
                <div className="bg-white p-3 md:p-4 rounded-lg text-center">
                  <FileText className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800 text-sm md:text-base">PMJAY e-Card</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gray-50">
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

export default AyushCom;