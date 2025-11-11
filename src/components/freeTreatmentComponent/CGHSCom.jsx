// components/CGHSPage.js
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
  Microscope
} from 'lucide-react';
import CGHSImg from '../../assets/cghs_hero.jpeg'
import MetaTags from '../../util/MetaTags';

// Styled Components
const HeroSection = styled.section`
  background: linear-gradient(135deg, #ffffff 0%, #ffffff 100%);
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
    background: #8b5cf6;
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
    border-color: #8b5cf6;
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

const CGHSCom = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Who is eligible for CGHS benefits?",
      answer: "CGHS covers current and former employees of the Central Government, Members of Parliament, ex-MPs, judges, freedom fighters, and their dependent family members."
    },
    {
      question: "What medical services are covered under CGHS?",
      answer: "CGHS provides comprehensive healthcare including OPD treatment, indoor treatment, specialist consultations, investigations, medicines, and hospitalization at empaneled hospitals."
    },
    {
      question: "How to get a CGHS card?",
      answer: "Apply through your department's CGHS portal, submit required documents including service proof, photographs, and dependent certificates. The card is issued after verification."
    },
    {
      question: "Are retired employees covered under CGHS?",
      answer: "Yes, retired central government employees and their dependents are covered for lifetime by paying the prescribed subscription rates based on their last pay drawn."
    },
    {
      question: "Can CGHS beneficiaries get treatment at private hospitals?",
      answer: "Yes, CGHS has empaneled private hospitals where beneficiaries can get cashless treatment for specified procedures after proper referral from CGHS wellness centers."
    },
    {
      question: "What is the process for reimbursement?",
      answer: "Submit original bills, prescription, investigation reports, and discharge summary at your CGHS wellness center. Reimbursement is processed as per CGHS rules and rates."
    },
    {
      question: "Is there any age limit for dependent children?",
      answer: "Unmarried dependent children are covered up to 25 years of age. There's no age limit for permanently disabled children."
    }
  ];

  const processSteps = [
    {
      icon: <FileText className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Get CGHS Card",
      description: "Apply and obtain your CGHS beneficiary card"
    },
    {
      icon: <Stethoscope className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Visit Wellness Center",
      description: "Consult at CGHS wellness center for primary care"
    },
    {
      icon: <CheckCircle className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Get Referral",
      description: "Obtain referral for specialist/hospital treatment"
    },
    {
      icon: <Heart className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Avail Treatment",
      description: "Receive treatment at empaneled hospitals"
    }
  ];

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

  const citiesCovered = [
    "Delhi", "Mumbai", "Kolkata", "Chennai", "Bengaluru", "Hyderabad",
    "Ahmedabad", "Pune", "Lucknow", "Chandigarh", "Bhopal", "Bhubaneswar",
    "Guwahati", "Jaipur", "Jammu", "Kochi", "Nagpur", "Patna", "Shillong", "Thiruvananthapuram"
  ];

  const subscriptionRates = [
    { level: "Level 1-5", pensioners: "₹250", serving: "₹500" },
    { level: "Level 6-9", pensioners: "₹500", serving: "₹1,250" },
    { level: "Level 10-12", pensioners: "₹750", serving: "₹1,500" },
    { level: "Level 13 & above", pensioners: "₹1,000", serving: "₹2,000" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
       <MetaTags
          title=" CGHS Empaneled Hospital | Cashless Treatment for Central Govt Employees & Pensioners | Dr Prabhat Memorial Hiramati Hospital, Rajendra Nagar, Patna"
          description="Get cashless treatment under CGHS for Central Government employees, pensioners, retired officials, MPs, judges and dependents. OPD, emergency care, surgeries, medicines, investigations, maternity care & cashless hospitalization availabl"
          keywords="CGHS empaneled hospital, CGHS cashless treatment,Central Government Health Scheme, CGHS for pensioners, CGHS hospital for central govt employees, Best CGHS approved hospital, CGHS OPD services, CGHS emergency care, CGHS cashless hospitalization, CGHS maternity benefits, CGHS in Patna, CGHS wellness center referral, CGHS medical reimbursement, CGHS treatment for retired employees, CGHS health card"                    
          type="website"
      />

      {/* Hero Section */}
      <HeroSection className="text-[#000000] py-12 md:py-20">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="flex items-center mb-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  CENTRAL GOVERNMENT HEALTH SCHEME (CGHS)
                </h1>
              </div>
              <p className="text-lg sm:text-xl mb-4 md:mb-6 opacity-90 leading-relaxed">
                Comprehensive Healthcare for Central Government Employees & Pensioners
              </p>
              <p className="text-base md:text-lg mb-6 md:mb-8 opacity-80 leading-relaxed">
                Providing quality healthcare services to central government employees, 
                pensioners, and their dependent family members across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a href='tel:84060000555'>
                  <button className="bg-[#004AAD] text-[#fff] px-4 py-3 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-[#004aad] transition duration-300 flex items-center justify-center w-full sm:w-auto" style={{border:'2px solid #004AAD'}}>
                    Enquiry for CGHS <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
              <img 
                src={CGHSImg} 
                alt='Central Government Health Scheme'
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:max-w-full"
              />
            </div>
          </div>
        </Container>
      </HeroSection>

      {/* What is CGHS */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">What is CGHS?</h2>
            <div className="w-20 h-1 bg-[#004AAD] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                The Central Government Health Scheme (CGHS) was started in 1954 with the objective of 
                providing comprehensive medical care facilities to Central Government employees, 
                pensioners, and their dependent family members.
              </p>
              
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#004AAD] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">Covers current and retired central government employees</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#004AAD] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">Provides OPD and indoor treatment facilities</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#004AAD] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">Cashless treatment at empaneled hospitals</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#004AAD] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">Available in major cities across India</span>
                </div>
              </div>
            </div>
            
            <Card className="p-4 md:p-6">
              <div className="bg-[#004AAD]/10 rounded-lg p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-[#004AAD] mb-3 md:mb-4">CGHS at a Glance</h3>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="text-center p-3 md:p-4 bg-white rounded-lg">
                    <Users className="w-6 h-6 md:w-8 md:h-8 text-[#004AAD] mx-auto mb-2" />
                    <div className="text-lg md:text-2xl font-bold text-[#004AAD]">35+ Lakh</div>
                    <div className="text-xs md:text-sm text-gray-600">Beneficiaries</div>
                  </div>
                  <div className="text-center p-3 md:p-4 bg-white rounded-lg">
                    <Building className="w-6 h-6 md:w-8 md:h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-lg md:text-2xl font-bold text-green-600">70+</div>
                    <div className="text-xs md:text-sm text-gray-600">Wellness Centers</div>
                  </div>
                  <div className="text-center p-3 md:p-4 bg-white rounded-lg">
                    <Globe className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-lg md:text-2xl font-bold text-blue-600">20+</div>
                    <div className="text-xs md:text-sm text-gray-600">Cities Covered</div>
                  </div>
                  <div className="text-center p-3 md:p-4 bg-white rounded-lg">
                    <Award className="w-6 h-6 md:w-8 md:h-8 text-red-600 mx-auto mb-2" />
                    <div className="text-lg md:text-2xl font-bold text-red-600">1954</div>
                    <div className="text-xs md:text-sm text-gray-600">Year Started</div>
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

      {/* Eligibility & Subscription */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Eligibility</h2>
            <div className="w-20 h-1 bg-[#004AAD] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            <Card className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold text-[#004AAD] mb-3 md:mb-4 flex items-center">
                <Users className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                Who is Eligible?
              </h3>
              <ul className="space-y-2 md:space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">Current Central Government employees</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">Central Government pensioners</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">Members of Parliament and ex-MPs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">Judges of Supreme Court & High Courts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">Freedom fighters and their dependents</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">Dependent family members</span>
                </li>
              </ul>
            </Card>

            <Card className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold text-[#004AAD] mb-3 md:mb-4 flex items-center">
                <FileText className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                Required Documents
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                <li>• Application form (available online)</li>
                <li>• Proof of government service</li>
                <li>• Recent passport photographs</li>
                <li>• Dependent certificates</li>
                <li>• Proof of residence</li>
                <li>• PAN card copy</li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* Process Flow */}
      <section className="py-12 md:py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">How to Avail CGHS Benefits</h2>
            <div className="w-20 h-1 bg-[#004AAD] mx-auto"></div>
            <p className="text-gray-600 mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Simple steps to access healthcare services under CGHS
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 relative">
              {processSteps.map((step, index) => (
                <ProcessStep key={index} className="text-center">
                  <Card className="p-4 md:p-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#004AAD]/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                      <div className="text-[#004AAD]">
                        {step.icon}
                      </div>
                    </div>
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-[#004AAD] text-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-xs md:text-sm font-bold">
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
                <h3 className="text-lg md:text-xl font-semibold text-[#004AAD] mb-3 md:mb-4 flex items-center">
                  <FileText className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                  Required Documents
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                  <li>• Application form (available online)</li>
                  <li>• Proof of government service</li>
                  <li>• Recent passport photographs</li>
                  <li>• Dependent certificates</li>
                  <li>• Proof of residence</li>
                  <li>• PAN card copy</li>
                </ul>
              </Card>
              
              <Card className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-[#004AAD] mb-3 md:mb-4 flex items-center">
                  <HelpCircle className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                  Important Notes
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                  <li>• Always carry your CGHS card</li>
                  <li>• Get referral for specialist consultation</li>
                  <li>• Keep all medical records safely</li>
                  <li>• Submit reimbursement claims within time</li>
                  <li>• Update card for new dependents</li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-[#004AAD] mx-auto"></div>
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
                    className={`w-4 h-4 md:w-5 md:h-5 text-[#004AAD] flex-shrink-0 transition-transform duration-300 ${
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

export default CGHSCom;