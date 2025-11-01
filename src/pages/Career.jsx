import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Home, ChevronRight, Phone, Mail, Upload, Send } from 'lucide-react';

import emailjs from '@emailjs/browser';
import { message } from 'antd';
import CareerBC from '../components/breadcrumbs/CareerBC';

// Styled components
const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8fafc, #f1f5f9);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Container = styled.div`
  
  margin: 0 auto;
 
`;

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 0;
  color: #64748b;
  font-size: 0.9rem;
  
  a {
    color: #3b82f6;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: all 0.2s;
    
    &:hover {
      color: #2563eb;
      text-decoration: underline;
    }
  }
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 16px;
  margin-bottom: 3rem;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 1rem;
  font-weight: 800;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  
  a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.2s;
    
    &:hover {
      color: #dbeafe;
      transform: translateY(-2px);
    }
  }
`;

const DepartmentsSection = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
  margin: 3rem 0;
  
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #1e293b;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: #3b82f6;
    margin: 0.5rem auto;
    border-radius: 2px;
  }
`;

const DepartmentTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const TabButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${props => props.active ? '#3b82f6' : 'white'};
  color: ${props => props.active ? 'white' : '#64748b'};
  border: 1px solid #e2e8f0;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: ${props => props.active ? '#3b82f6' : '#f8fafc'};
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }
`;

const JobsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
`;

const JobCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    color: #1e293b;
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
  }
  
  p {
    color: #64748b;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  button {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    width: 100%;
    
    &:hover {
      background: #2563eb;
    }
  }
`;

const CvSection = styled.section`
  background: white;
  border-radius: 16px;
  padding: 3rem;
  margin: 3rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const CvTitle = styled.h2`
  font-size: 2rem;
  color: #1e293b;
  margin-bottom: 1rem;
`;

const CvSubtitle = styled.p`
  color: #64748b;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  text-align: left;
  
  &:nth-child(5),
  &:nth-child(6) {
    grid-column: span 2;
    
    @media (max-width: 640px) {
      grid-column: span 1;
    }
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #374151;
    font-weight: 500;
    
    span {
      color: #ef4444;
    }
  }
  
  input, select, textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.2s;
    
    &:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
    }
  }
  
  textarea {
    min-height: 120px;
    resize: vertical;
  }
`;

const FileInput = styled.div`
  position: relative;
  
  input[type="file"] {
    padding: 0.75rem;
    border: 1px dashed #d1d5db;
    border-radius: 8px;
    background: #f9fafb;
    
    &::file-selector-button {
      background: #e5e7eb;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      margin-right: 1rem;
      cursor: pointer;
      transition: all 0.2s;
      
      &:hover {
        background: #d1d5db;
      }
    }
  }
`;

const SubmitButton = styled.button`
  grid-column: span 2;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(59, 130, 246, 0.4);
  }
  
  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  @media (max-width: 640px) {
    grid-column: span 1;
  }
`;

const SuccessMessage = styled.div`
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  margin: 2rem 0;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  button {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 2px solid white;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    
    &:hover {
      background: white;
      color: #059669;
    }
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem 0;
  color: #64748b;
  border-top: 1px solid #e2e8f0;
  margin-top: 3rem;
`;

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_mxnp26h';
const EMAILJS_TEMPLATE_ID = 'template_xjwe0ta';
const EMAILJS_USER_ID = 'FCGwkeEVveE4oYsdZ';

// Main component
const Career = () => {
  const [activeDepartment, setActiveDepartment] = useState('Acute Care');
  const [selectedJob, setSelectedJob] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    career: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    });
  };

  const handleJobApply = (jobTitle) => {
    setSelectedJob(jobTitle);
    setFormData(prev => ({
      ...prev,
      career: jobTitle
    }));
    
    // Scroll to form section
    document.getElementById('application-form').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const sendApplicationEmail = async (formData) => {
    const templateParams = {
      applicant_name: formData.name,
      applicant_email: formData.email,
      applicant_phone: formData.phone,
      position_applied: formData.career || selectedJob,
      application_message: formData.message,
      application_date: new Date().toLocaleDateString(),
      application_time: new Date().toLocaleTimeString(),
      to_email: 'careers@mangalamhospitaldeoria.com',
      from_name: 'Mangalam Hospital and Research Center Careers',
      reply_to: formData.email,
      department: activeDepartment
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      return true;
    } catch (error) {
      console.error('Email sending failed:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send application via EmailJS
      await sendApplicationEmail(formData);
      
      // Show success message
      message.success('Application submitted successfully! We will contact you soon.');
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        resume: null,
        career: '',
        message: ''
      });
      setSelectedJob('');
      
    } catch (error) {
      message.error('Failed to submit application. Please try again or contact us directly.');
      console.error('Application submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  const departments = [
     'Acute Care',
    'Critical Care',
    'Emergency',
    'Technicians',
    'Administration'
  ];

  const jobs = {
    'Acute Care': [
      {
        title: 'Registered Staff Nurse',
        description: 'Looking for a Responsible Staff Nurse to provide quality attention and clinical decision making for patient care.'
      },
      {
        title: 'Critical Care Consultant',
        description: 'Hiring Critical Care Consultants to provide clinical care, provide training to staff in critical care units.'
      }
    ],
    'Critical Care': [
      {
        title: 'ICU Specialist',
        description: 'Seeking experienced ICU specialists to manage critically ill patients in our intensive care unit.'
      },
      {
        title: 'Critical Care Nurse',
        description: 'Looking for dedicated critical care nurses with experience in ICU settings.'
      }
    ],
    'Emergency': [
      {
        title: 'Emergency Medical Officer',
        description: 'Hiring Emergency Medical Officers to provide immediate patient care & manage emergency cases.'
      },
      {
        title: 'EMT Technician',
        description: 'Hiring an EMT Technician to provide emergency medical care, transport patients, and ensure safe treatment.'
      }
    ],
    'Technicians': [
      {
        title: 'Cath Lab Technician',
        description: 'Seeking experienced Cath Lab Technicians to assist in cardiac procedures, monitor patients and operate equipment.'
      },
      {
        title: 'Lab Technician',
        description: 'Looking for an Expert Lab Technician to conduct tests, analyze samples, and ensure accurate diagnostic results.'
      },
      {
        title: 'MRI Technician',
        description: 'Hiring MRI Technicians to operate MRI equipment and assist in diagnostic imaging procedures.'
      }
    ],
    'Administration': [
      {
        title: 'Front Office Executive',
        description: 'Hiring a Front Office Executive to manage patient inquiries, schedule appointments, and ensure patient satisfaction.'
      },
      {
        title: 'IPD Billings Executive',
        description: 'Looking for an IPD Billings Executive to manage patient billing, process payments & ensure accurate handling.'
      },
      {
        title: 'Sales & Marketing Executive',
        description: 'Looking for a Sales & Marketing Executive to promote hospital services and drive patient engagement.'
      }
    ]
  };

  if (isSubmitted) {
    return (
      <>
        <PageContainer>
          <Container>


            <SuccessMessage>
              <h3>🎉 Application Submitted Successfully!</h3>
              <p>
                Thank you for your interest in joining Mangalam Hospital. We have received your application 
                for <strong>{selectedJob || formData.career}</strong> and will review it carefully. 
                Our HR team will contact you within 3-5 business days if your qualifications match our requirements.
              </p>
              <p>
                For any urgent queries, please contact us at <strong>careers@mangalamhospital.org</strong> 
                or call <strong>+91 63071 80154</strong>.
              </p>
              <button onClick={() => setIsSubmitted(false)}>
                Submit Another Application
              </button>
            </SuccessMessage>
          </Container>
        </PageContainer>
      </>
    );
  }

  return (
    <>
      <PageContainer>
        <Container>

        <CareerBC/>


          <DepartmentsSection>
            <SectionTitle >Current  Openings</SectionTitle>
            
        {/*     <DepartmentTabs>
              {departments.map(dept => (
                <TabButton 
                  key={dept}
                  active={activeDepartment === dept}
                  onClick={() => setActiveDepartment(dept)}
                >
                  {dept}
                </TabButton>
              ))}
            </DepartmentTabs>
             */}
            <JobsGrid>

               <h1 style={{color: '#004AAD', fontSize:'4rem', fontWeight: '600', textAlign:'center'}}>Currently No  Openings</h1>
             {/*  {jobs[activeDepartment].map((job, index) => (
                <JobCard key={index}>
                  <h3>{job.title}</h3>
                  <p>{job.description}</p>
                  <button onClick={() => handleJobApply(job.title)}>
                    Apply Now
                  </button>
                </JobCard>
              ))} */}
            </JobsGrid>
          </DepartmentsSection>

          <CvSection id="application-form">
            <CvTitle>
              {selectedJob ? `Apply for: ${selectedJob}` : 'Submit Your Application'}
            </CvTitle>
            <CvSubtitle>
              {selectedJob 
                ? `Complete the form below to apply for the ${selectedJob} position.`
                : 'Submit your CV and we will find the right opportunity for you in our growing healthcare team.'
              }
            </CvSubtitle>
            
            <Form ref={formRef} onSubmit={handleSubmit}>
              <FormGroup>
                <label htmlFor="name">Name <span>*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Please enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="email">Email <span>*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Please enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="phone">Phone <span>*</span></label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Please enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="resume">Upload Resume (PDF, DOC) <span>*</span></label>
                <FileInput>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                  />
                </FileInput>
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="career">Position Applied For</label>
                <select
                  id="career"
                  name="career"
                  value={selectedJob || formData.career}
                  onChange={handleInputChange}
                >
                  <option value="">Select Position</option>
                  {departments.flatMap(dept => 
                    jobs[dept].map(job => (
                      <option key={job.title} value={job.title}>
                        {job.title} - {dept}
                      </option>
                    ))
                  )}
                  <option value="Other">Other Position</option>
                </select>
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="message">Cover Letter / Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Please tell us about your experience, qualifications, and why you're interested in joining our team..."
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </FormGroup>
              
              <SubmitButton type="submit" disabled={loading}>
                <Send size={20} />
                {loading ? 'Submitting...' : 'Submit Application'}
              </SubmitButton>
            </Form>
          </CvSection>
          
          
        </Container>
      </PageContainer>
      
    </>
  );
};

export default Career;

