// components/TPAPage.js
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
  MapPin
} from 'lucide-react';
import EmpanelmentList from './EmpanelmentList';
import TPAImg from '../../assets/tpa/TPA-Full-Form.jpg'
import MetaTags from '../../util/MetaTags';

// Styled Components
const HeroSection = styled.section`
  background: linear-gradient(135deg, #ffffff 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
  color: black;
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
    background: #10b981;
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
    border-color: #10b981;
  }
`;

const ServiceCard = styled.div`
  background: linear-gradient(135deg, ${props => props.color}20 0%, ${props => props.color}10 100%);
  border-left: 4px solid ${props => props.color};
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

const TPACom = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a Third Party Administrator (TPA) in health insurance?",
      answer: "A TPA is an organization that processes insurance claims and provides cashless services for policyholders. They act as an intermediary between insurance companies and healthcare providers."
    },
    {
      question: "What services do TPAs provide?",
      answer: "TPAs handle claim processing, cashless hospitalization, provider network management, customer support, pre-authorization, and reimbursement claims for health insurance policies."
    },
    {
      question: "How do I avail cashless treatment through TPA?",
      answer: "Present your health card at a network hospital, the hospital will contact the TPA for pre-authorization, and once approved, you can avail cashless treatment without any upfront payment."
    },
    {
      question: "What documents are required for claim settlement?",
      answer: "Typically required documents include claim form, medical records, bills, prescriptions, discharge summary, investigation reports, and your health insurance card."
    },
    {
      question: "How long does claim processing take?",
      answer: "Cashless claims are typically processed within 2-6 hours for emergency cases. Reimbursement claims are usually settled within 7-15 working days after document submission."
    },
    {
      question: "Can I choose my own TPA?",
      answer: "No, the TPA is assigned by your insurance company. However, you can request a change if you're not satisfied with the services, subject to insurance company policies."
    }
  ];

  const processSteps = [
    {
      icon: <FileText className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Pre-Authorization",
      description: "Hospital submits treatment plan and gets approval"
    },
    {
      icon: <CheckCircle className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Approval",
      description: "TPA reviews and approves the cashless request"
    },
    {
      icon: <Heart className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Treatment",
      description: "Patient receives cashless medical treatment"
    },
    {
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Claim Settlement",
      description: "TPA settles bills directly with the hospital"
    }
  ];

  const services = [
    {
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Cashless Hospitalization",
      description: "Seamless cashless treatment at network hospitals",
      color: "#10b981"
    },
    {
      icon: <FileText className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Claim Processing",
      description: "Efficient and timely processing of insurance claims",
      color: "#3b82f6"
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Provider Network Management",
      description: "Extensive network of hospitals and healthcare providers",
      color: "#8b5cf6"
    },
    {
      icon: <Phone className="w-6 h-6 md:w-8 md:h-8" />,
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance for policyholders",
      color: "#f59e0b"
    },
    {
      icon: <HelpCircle className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Pre-Authorization",
      description: "Quick approval for planned hospitalizations",
      color: "#ef4444"
    },
    {
      icon: <Award className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Quality Assurance",
      description: "Ensuring quality healthcare services",
      color: "#06b6d4"
    }
  ];

  const majorTPAs = [
    { name: "MDIndia Healthcare", services: "Comprehensive TPA services" },
    { name: "Family Health Plan", services: "Insurance claim processing" },
    { name: "Raksha TPA", services: "Health insurance services" },
    { name: "Paramount Health", services: "TPA and insurance services" },
    { name: "Vipul Medcorp", services: "Healthcare administration" },
    { name: "East West Assist", services: "International TPA services" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
       <MetaTags
          title="Third Party Administrator (TPA) | Cashless Treatment & Health Insurance Claim Support | Dr. Prabhat Memorial Hiramati Hospital Patna"
          description="Get seamless cashless hospitalization and hassle-free insurance claim processing through our trusted TPAs. Quick pre-authorization, 24/7 support, wide hospital network, and fast reimbursement services for patients."
          keywords="TPA help desk, TPA claim settlement, insurance help hospital, Paramount TPA hospital, Raksha TPA hospital, Vipul Medcorp hospital, cashless emergency admission, how to claim health insurance, hospital TPA department"                    
          type="website"
      />
      {/* Hero Section */}
      <HeroSection className="text-black py-12 md:py-20">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="flex items-center mb-4">
                <Building className="w-10 h-10 md:w-12 md:h-12 mr-3" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Third Party Administrator
                </h1>
              </div>
              <p className="text-lg sm:text-xl mb-4 md:mb-6 opacity-90 leading-relaxed">
                Your Bridge Between Healthcare and Insurance
              </p>
              <p className="text-base md:text-lg mb-6 md:mb-8 opacity-80 leading-relaxed">
                Professional administration of health insurance claims, cashless services, 
                and seamless healthcare experiences for policyholders.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a href='tel:84060000555'>
                  <button className="bg-[#004AAD] text-[#fff] px-4 py-3 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-[#004aad] transition duration-300 flex items-center justify-center w-full sm:w-auto" style={{border:'2px solid #004AAD'}}>
                    Check On-Board TPAs <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
              <img 
                src={TPAImg}
                alt="Third Party Administrator"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:max-w-full"
              />
            </div>
          </div>
        </Container>
      </HeroSection>

      {/* What is TPA */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">What is a Third Party Administrator?</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                A Third Party Administrator (TPA) is an organization that processes insurance claims and provides 
                cashless services for policyholders. TPAs act as intermediaries between insurance companies and 
                healthcare providers, ensuring smooth administration of health insurance policies.
              </p>
              
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">Manages cashless hospitalization services</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">Processes insurance claims efficiently</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">Maintains network of healthcare providers</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">Provides 24/7 customer support</span>
                </div>
              </div>
            </div>
            
            <Card className="p-4 md:p-6">
              <div className="bg-green-50 rounded-lg p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-green-800 mb-3 md:mb-4">Key Benefits</h3>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="text-center p-3 md:p-4 bg-white rounded-lg">
                    <Clock className="w-6 h-6 md:w-8 md:h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-base md:text-lg font-bold text-green-600">Quick</div>
                    <div className="text-xs md:text-sm text-gray-600">Claim Processing</div>
                  </div>
                  <div className="text-center p-3 md:p-4 bg-white rounded-lg">
                    <Shield className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-base md:text-lg font-bold text-blue-600">Cashless</div>
                    <div className="text-xs md:text-sm text-gray-600">Treatment</div>
                  </div>
                  <div className="text-center p-3 md:p-4 bg-white rounded-lg">
                    <Users className="w-6 h-6 md:w-8 md:h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-base md:text-lg font-bold text-purple-600">Wide</div>
                    <div className="text-xs md:text-sm text-gray-600">Network</div>
                  </div>
                  <div className="text-center p-3 md:p-4 bg-white rounded-lg">
                    <Phone className="w-6 h-6 md:w-8 md:h-8 text-red-600 mx-auto mb-2" />
                    <div className="text-base md:text-lg font-bold text-red-600">24/7</div>
                    <div className="text-xs md:text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Services Offered */}
      <section className="py-12 md:py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto"></div>
            <p className="text-gray-600 mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Comprehensive TPA services to ensure seamless healthcare experiences
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

      <EmpanelmentList/>

      {/* Claim Process */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Claim Process</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto"></div>
            <p className="text-gray-600 mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Simple and efficient process for cashless and reimbursement claims
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 relative">
              {processSteps.map((step, index) => (
                <ProcessStep key={index} className="text-center">
                  <Card className="p-4 md:p-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                      <div className="text-green-600">
                        {step.icon}
                      </div>
                    </div>
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-xs md:text-sm font-bold">
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
            
            <div className="mt-8 md:mt-12 grid md:grid-cols-2 gap-6 md:gap-8">
              <Card className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-green-800 mb-3 md:mb-4 flex items-center">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                  Cashless Claim
                </h3>
                <ul className="space-y-2 md:space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base">Present health card at network hospital</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base">Hospital obtains pre-authorization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base">TPA approves treatment plan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base">Avail treatment without cash payment</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-3 md:mb-4 flex items-center">
                  <FileText className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                  Reimbursement Claim
                </h3>
                <ul className="space-y-2 md:space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base">Get treatment at any hospital</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base">Pay hospital bills directly</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base">Submit claim documents to TPA</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base">Receive reimbursement in bank account</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Major TPAs in India */}
      <section className="py-12 md:py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Major TPAs in India</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {majorTPAs.map((tpa, index) => (
              <Card key={index} className="p-4 md:p-6 text-center">
                <Building className="w-8 h-8 md:w-12 md:h-12 text-green-600 mx-auto mb-3 md:mb-4" />
                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1 md:mb-2">
                  {tpa.name}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {tpa.services}
                </p>
                <button className="mt-3 md:mt-4 text-green-600 hover:text-green-700 text-xs md:text-sm font-semibold">
                  View Details →
                </button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto"></div>
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
                    className={`w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0 transition-transform duration-300 ${
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

export default TPACom;