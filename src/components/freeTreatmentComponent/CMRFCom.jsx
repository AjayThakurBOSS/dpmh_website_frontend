// components/CMRFPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Heart,
  Users,
  FileText,
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
  DollarSign,
  Shield,
  HandHeart,
  Donate
} from 'lucide-react';
import CMRFImg from '../../assets/cmrf_hero.jpeg'

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
    background: #ef4444;
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
    border-color: #ef4444;
  }
`;

const ServiceCard = styled.div`
  background: linear-gradient(135deg, ${props => props.color}20 0%, ${props => props.color}10 100%);
  border-left: 4px solid ${props => props.color};
`;

const UrgentCase = styled.div`
  background: linear-gradient(135deg, #fef3f2 0%, #fff 100%);
  border: 2px solid #fecaca;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: #dc2626;
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

const CMRFCom = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeState, setActiveState] = useState('Maharashtra');

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the Chief Minister's Relief Fund?",
      answer: "The Chief Minister's Relief Fund is a dedicated fund established to provide immediate financial assistance to citizens facing emergencies, medical crises, natural disasters, and other unforeseen circumstances."
    },
    {
      question: "Who can apply for assistance from CMRF?",
      answer: "Any resident of the state facing genuine financial hardship due to medical emergencies, natural calamities, accidents, or other crises can apply. Priority is given to economically weaker sections."
    },
    {
      question: "What types of emergencies are covered?",
      answer: "Medical treatments, surgeries, cancer care, organ transplants, accident relief, natural disaster assistance, educational support for orphans, and other humanitarian causes."
    },
    {
      question: "How to apply for financial assistance?",
      answer: "Applications can be submitted online through the official state portal or offline at district collector offices. Required documents include medical reports, income certificate, identity proof, and application form."
    },
    {
      question: "How long does it take to process applications?",
      answer: "Urgent medical cases are processed within 3-7 days. Regular applications take 2-4 weeks. Emergency cases can be expedited through special channels."
    },
    {
      question: "Can NRIs and organizations donate to CMRF?",
      answer: "Yes, both Indian citizens and NRIs can donate. Corporate donations are also welcome. Donations to CMRF are eligible for tax benefits under Section 80G of Income Tax Act."
    },
    {
      question: "Is there any maximum assistance limit?",
      answer: "The assistance amount varies case by case. Medical assistance typically ranges from ₹50,000 to ₹5,00,000 based on treatment costs and economic status. Special cases may receive higher amounts."
    },
    {
      question: "How are funds utilized and monitored?",
      answer: "All funds are audited regularly, utilization is transparently displayed on official portals, and a monitoring committee oversees fund distribution to ensure proper use."
    }
  ];

  const processSteps = [
    {
      icon: <FileText className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Apply",
      description: "Submit application with required documents"
    },
    {
      icon: <CheckCircle className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Verification",
      description: "District authorities verify application details"
    },
    {
      icon: <Heart className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Approval",
      description: "CMRF committee approves assistance"
    },
    {
      icon: <DollarSign className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Disbursement",
      description: "Funds transferred directly to hospital/beneficiary"
    }
  ];

  const assistanceCategories = [
    {
      icon: <Stethoscope className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Medical Treatment",
      description: "Critical illnesses, surgeries, cancer treatment, organ transplants",
      color: "#ef4444"
    },
    {
      icon: <Ambulance className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Emergency Relief",
      description: "Natural disasters, accidents, fire incidents, floods",
      color: "#f59e0b"
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Humanitarian Aid",
      description: "Support for orphans, elderly, differently-abled persons",
      color: "#10b981"
    },
    {
      icon: <Award className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Educational Support",
      description: "Scholarships for meritorious students from poor families",
      color: "#3b82f6"
    },
    {
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Social Welfare",
      description: "Assistance for marginalized communities and special cases",
      color: "#8b5cf6"
    },
    {
      icon: <HandHeart className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Special Appeals",
      description: "Individual cases requiring immediate intervention",
      color: "#ec4899"
    }
  ];

  const stateFunds = [
    { name: "Maharashtra", helpline: "1800-120-8040", portal: "cmrf.maharashtra.gov.in" },
    { name: "Karnataka", helpline: "080-22255557", portal: "cmrf.karnataka.gov.in" },
    { name: "Tamil Nadu", helpline: "044-25672333", portal: "cmrf.tn.gov.in" },
    { name: "Uttar Pradesh", helpline: "1800-180-5145", portal: "cmrf.up.gov.in" },
    { name: "Delhi", helpline: "011-23392020", portal: "cmrf.delhi.gov.in" },
    { name: "Gujarat", helpline: "079-23250500", portal: "cmrf.gujarat.gov.in" },
    { name: "West Bengal", helpline: "033-22145555", portal: "cmrf.wb.gov.in" },
    { name: "Rajasthan", helpline: "0141-2227272", portal: "cmrf.rajasthan.gov.in" }
  ];

  const donationMethods = [
    {
      method: "Online Transfer",
      details: "NEFT/RTGS/UPI to CMRF account",
      steps: ["Get account details from portal", "Transfer amount", "Email receipt to CMRF"]
    },
    {
      method: "Cheque/DD",
      details: "Payable to 'Chief Minister's Relief Fund'",
      steps: ["Visit CMRF office", "Submit cheque/DD", "Get receipt"]
    },
    {
      method: "Online Portal",
      details: "Direct payment through state website",
      steps: ["Visit official portal", "Fill donation form", "Pay online"]
    },
    {
      method: "Cash Donation",
      details: "At designated collection centers",
      steps: ["Visit collection center", "Fill form", "Get receipt"]
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
                <HandHeart className="w-10 h-10 md:w-12 md:h-12 mr-3" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Chief Minister's Relief Fund
                </h1>
              </div>
              <p className="text-lg sm:text-xl mb-4 md:mb-6 opacity-90 leading-relaxed">
                Extending a Helping Hand in Times of Need
              </p>
              <p className="text-base md:text-lg mb-6 md:mb-8 opacity-80 leading-relaxed">
                Providing immediate financial assistance to citizens during medical emergencies, 
                natural calamities, and other crises. A beacon of hope for those in distress.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a href='tel:84060000555'>
                  <button className="bg-[#004AAD] text-[#fff] px-4 py-3 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-[#004aad] transition duration-300 flex items-center justify-center w-full sm:w-auto" style={{border:'2px solid #004AAD'}}>
                    Enquiry for CMRF <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
              <img 
                src={CMRFImg} 
                alt='Chief Ministers Relief Fund'
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:max-w-full"
              />
            </div>
          </div>
        </Container>
      </HeroSection>

      {/* What is CMRF */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">About Chief Minister's Relief Fund</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                The Chief Minister's Relief Fund is a humanitarian initiative established to provide 
                immediate financial assistance to citizens facing emergencies. It serves as a crucial 
                support system during medical crises, natural disasters, and other unforeseen circumstances.
              </p>
              
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">Immediate assistance during emergencies</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">Transparent and accountable fund utilization</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">100% donations used for beneficiary welfare</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">Tax benefits for donations under Section 80G</span>
                </div>
              </div>
            </div>
            
            <Card className="p-4 md:p-6">
              <div className="bg-red-50 rounded-lg p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-red-800 mb-3 md:mb-4">Impact & Reach</h3>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="text-center p-3 md:p-4 bg-white rounded-lg">
                    <Heart className="w-6 h-6 md:w-8 md:h-8 text-red-600 mx-auto mb-2" />
                    <div className="text-lg md:text-2xl font-bold text-red-600">50,000+</div>
                    <div className="text-xs md:text-sm text-gray-600">Lives Impacted Annually</div>
                  </div>
                  <div className="text-center p-3 md:p-4 bg-white rounded-lg">
                    <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-lg md:text-2xl font-bold text-green-600">₹100+ Cr</div>
                    <div className="text-xs md:text-sm text-gray-600">Annual Assistance</div>
                  </div>
                  <div className="text-center p-3 md:p-4 bg-white rounded-lg">
                    <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-lg md:text-2xl font-bold text-blue-600">100%</div>
                    <div className="text-xs md:text-sm text-gray-600">Transparent Utilization</div>
                  </div>
                  <div className="text-center p-3 md:p-4 bg-white rounded-lg">
                    <Award className="w-6 h-6 md:w-8 md:h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-lg md:text-2xl font-bold text-purple-600">80G</div>
                    <div className="text-xs md:text-sm text-gray-600">Tax Benefits</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Assistance Categories */}
      <section className="py-12 md:py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Assistance Categories</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            <p className="text-gray-600 mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Comprehensive support for various emergency situations and humanitarian needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {assistanceCategories.map((service, index) => (
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

      {/* Urgent Assistance Section */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Urgent Medical Assistance</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>

          <UrgentCase className="p-4 md:p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-4 md:mb-0">
                <h3 className="text-xl md:text-2xl font-bold text-red-700 mb-2 md:mb-3">
                  Emergency Medical Support Available
                </h3>
                <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">
                  For critical medical emergencies requiring immediate financial assistance, 
                  we provide expedited processing within 24-48 hours.
                </p>
                <div className="flex items-center text-red-600 font-semibold text-sm md:text-base">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Emergency Helpline: 104 (24x7)
                </div>
              </div>
              <div className="md:w-1/3 text-center">
                <div className="bg-red-100 p-3 md:p-4 rounded-lg">
                  <Clock className="w-8 h-8 md:w-12 md:h-12 text-red-600 mx-auto mb-2 md:mb-3" />
                  <p className="text-xs md:text-sm text-red-700 font-semibold">
                    Fast-track Processing<br />
                    <span className="text-base md:text-lg">24-48 Hours</span>
                  </p>
                </div>
              </div>
            </div>
          </UrgentCase>

          <div className="mt-6 md:mt-8 grid md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <Card className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold text-red-800 mb-3 md:mb-4 flex items-center">
                <FileText className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                Required Documents
              </h3>
              <ul className="space-y-1 md:space-y-2 text-gray-600 text-sm md:text-base">
                <li>• Completed application form</li>
                <li>• Medical reports and estimate</li>
                <li>• Income certificate</li>
                <li>• Identity proof (Aadhaar)</li>
                <li>• Residence proof</li>
                <li>• Bank account details</li>
                <li>• Recent photograph</li>
              </ul>
            </Card>
            
            <Card className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold text-red-800 mb-3 md:mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                Eligibility Criteria
              </h3>
              <ul className="space-y-1 md:space-y-2 text-gray-600 text-sm md:text-base">
                <li>• Resident of the state</li>
                <li>• Annual income below ₹5 lakh</li>
                <li>• Genuine emergency situation</li>
                <li>• No other sufficient means</li>
                <li>• Proper medical documentation</li>
                <li>• Recommendation from local authority</li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* Application Process */}
      <section className="py-12 md:py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Application Process</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            <p className="text-gray-600 mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Simple and transparent process to get financial assistance during emergencies
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 relative">
              {processSteps.map((step, index) => (
                <ProcessStep key={index} className="text-center">
                  <Card className="p-4 md:p-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                      <div className="text-red-600">
                        {step.icon}
                      </div>
                    </div>
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-xs md:text-sm font-bold">
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

      {/* Donation Section */}
      <section className="py-12 md:py-16 bg-[#004AAD] text-white">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Support the Cause</h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
            <p className="text-lg md:text-xl opacity-90 mt-3 md:mt-4 max-w-2xl mx-auto">
              Your contribution can make a difference in someone's life
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {donationMethods.map((method, index) => (
              <Card key={index} className="p-4 md:p-6 text-gray-800">
                <Shield className="w-8 h-8 md:w-12 md:h-12 text-red-600 mx-auto mb-3 md:mb-4" />
                <h3 className="text-base md:text-lg font-semibold text-center mb-1 md:mb-2">{method.method}</h3>
                <p className="text-xs md:text-sm text-gray-600 text-center mb-3 md:mb-4">{method.details}</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  {method.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start">
                      <div className="w-1 h-1 bg-red-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                      <span className="text-xs">{step}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <div className="bg-white text-red-600 p-4 md:p-6 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Tax Benefits</h3>
              <p className="text-base md:text-lg mb-3 md:mb-4">
                Donations to Chief Minister's Relief Fund are eligible for <strong>100% tax exemption</strong> under Section 80G of Income Tax Act
              </p>
              <p className="text-xs md:text-sm opacity-80">
                Receipts issued for all donations • Transparent fund utilization • Regular audits
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
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
                    className={`w-4 h-4 md:w-5 md:h-5 text-red-600 flex-shrink-0 transition-transform duration-300 ${
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

export default CMRFCom;