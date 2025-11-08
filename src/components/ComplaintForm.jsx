import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    patient_name: '',
    patient_id: '',
    department: '',
    incident_date: '',
    description: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [showThankYou, setShowThankYou] = useState(false);

  const departments = [
    'OPD',
    'IPD', 
    'Emergency',
    'Billing',
    'Staff Behaviour',
    'Facilities',
    'Other'
  ];

  // Set current date as prefix and default incident date
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setFormData(prev => ({
      ...prev,
      incident_date: today
    }));
  }, []);

  const validateForm = () => {
    const newErrors = {};

    // Required field validation
    if (!formData.patient_name.trim()) {
      newErrors.patient_name = 'Patient name is required';
    }

    if (!formData.patient_id.trim()) {
      newErrors.patient_id = 'Patient ID is required';
    }

    if (!formData.department) {
      newErrors.department = 'Please select a department';
    }

    if (!formData.incident_date) {
      newErrors.incident_date = 'Incident date is required';
    }

    // Description validation - at least 20 words
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else {
      const wordCount = formData.description.trim().split(/\s+/).filter(word => word.length > 0).length;
      if (wordCount < 20) {
        newErrors.description = `Description must contain at least 20 words. Currently ${wordCount} words.`;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setMessage({
        text: 'Please fix the errors below',
        type: 'error'
      });
      return;
    }

    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const response = await axios.post(
        'https://app.prabhatmemorialhospital.com/api/patient-complaint',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );

      // Show thank you page on successful submission
      setShowThankYou(true);
      
      // Reset form but keep current date
      const today = new Date().toISOString().split('T')[0];
      setFormData({
        patient_name: '',
        patient_id: '',
        department: '',
        incident_date: today,
        description: ''
      });

    } catch (error) {
      console.error('Error submitting complaint:', error);
      
      let errorMessage = 'Failed to submit complaint. Please try again.';
      
      // Handle different types of errors
      if (error.response) {
        // Server responded with error status
        if (error.response.data && error.response.data.errors) {
          // Laravel validation errors
          const serverErrors = error.response.data.errors;
          const firstError = Object.values(serverErrors)[0][0];
          errorMessage = firstError || errorMessage;
        } else if (error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
        }
      } else if (error.request) {
        // Network error
        errorMessage = 'Network error. Please check your connection.';
      }

      setMessage({
        text: errorMessage,
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleNewComplaint = () => {
    setShowThankYou(false);
  };

  // Calculate word count for description
  const getWordCount = () => {
    return formData.description.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  const isDescriptionValid = formData.description.trim() && getWordCount() >= 20;

  // If showing thank you page, render the thank you component
  if (showThankYou) {
    return <ThankYouPage onNewComplaint={handleNewComplaint} />;
  }

  return (
    <FormContainer>
      <FormTitle>Patient Complaint Form</FormTitle>
      
      <StyledForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="patient_name">Patient Name *</Label>
          <Input
            type="text"
            id="patient_name"
            name="patient_name"
            value={formData.patient_name}
            onChange={handleChange}
            required
            placeholder="Enter patient full name"
            hasError={!!errors.patient_name}
          />
          {errors.patient_name && <ErrorText>{errors.patient_name}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="patient_id">Patient ID *</Label>
          <Input
            type="text"
            id="patient_id"
            name="patient_id"
            value={formData.patient_id}
            onChange={handleChange}
            required
            placeholder="Enter patient ID (e.g., IPD-12345)"
            hasError={!!errors.patient_id}
          />
          {errors.patient_id && <ErrorText>{errors.patient_id}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="department">Department *</Label>
          <Select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
            hasError={!!errors.department}
          >
            <option value="">Select Department</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </Select>
          {errors.department && <ErrorText>{errors.department}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="incident_date">Incident Date *</Label>
          <Input
            type="date"
            id="incident_date"
            name="incident_date"
            value={formData.incident_date}
            onChange={handleChange}
            required
            hasError={!!errors.incident_date}
          />
          <DateHint>Date prefilled with today's date. You can change it if needed.</DateHint>
          {errors.incident_date && <ErrorText>{errors.incident_date}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="description">
            Complaint Description * 
            <WordCount valid={isDescriptionValid}>
              ({getWordCount()}/20 words)
            </WordCount>
          </Label>
          <TextArea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Please describe your complaint in detail. Minimum 20 words required."
            rows="2"
            hasError={!!errors.description}
          />
          {errors.description ? (
            <ErrorText>{errors.description}</ErrorText>
          ) : (
            <HintText>Please provide at least 20 words describing your complaint in detail.</HintText>
          )}
        </FormGroup>

        <SubmitButton 
          type="submit" 
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit Complaint'}
        </SubmitButton>

        {message.text && (
          <Message type={message.type}>
            {message.text}
          </Message>
        )}
      </StyledForm>
    </FormContainer>
  );
};

// Thank You Page Component
const ThankYouPage = ({ onNewComplaint }) => {
  return (
    <ThankYouContainer>
      <SuccessAnimation>
        <Checkmark viewBox="0 0 52 52">
          <Circle cx="26" cy="26" r="25" fill="none"/>
          <Check fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </Checkmark>
      </SuccessAnimation>
      
      <ThankYouTitle>Thank You!</ThankYouTitle>
      
      <ThankYouMessage>
        <p>We sincerely thank you for taking the time to share your feedback with us.</p>
        <p>We deeply regret any inconvenience you may have experienced during your visit.</p>
        <p>Your complaint has been successfully submitted and our team will review it carefully.</p>
        <p>We will get back to you soon to address your concerns.</p>
      </ThankYouMessage>

      <HospitalInfo>
        <h3>Prabhat Memorial Hospital</h3>
        <p>We are committed to providing the best care for our patients</p>
      </HospitalInfo>

      <ActionButtons>
        <NewComplaintButton onClick={onNewComplaint}>
          Submit Another Complaint
        </NewComplaintButton>
        <HomeButton href="/">
          Return to Home
        </HomeButton>
      </ActionButtons>

      <ContactInfo>
        <p>For urgent matters, please contact us directly:</p>
        <p>📞 +1-234-567-8900 | ✉️ feedback@prabhathospital.com</p>
      </ContactInfo>
    </ThankYouContainer>
  );
};

// Animations
const scaleAnimation = keyframes`
  0% { transform: scale(0); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const strokeAnimation = keyframes`
  100% { stroke-dashoffset: 0; }
`;

const fillAnimation = keyframes`
  100% { box-shadow: inset 0px 0px 0px 30px #4CAF50; }
`;

// Styled Components for Thank You Page
const ThankYouContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  color: white;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

const SuccessAnimation = styled.div`
  margin: 0 auto 2rem;
  width: 80px;
  height: 80px;
`;

const Checkmark = styled.svg`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #fff;
  stroke-miterlimit: 10;
  animation: ${fillAnimation} 0.4s ease-in-out 0.4s forwards, ${scaleAnimation} 0.3s ease-in-out 0.9s both;
`;

const Circle = styled.circle`
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #fff;
  fill: none;
  animation: ${strokeAnimation} 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
`;

const Check = styled.path`
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: ${strokeAnimation} 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
`;

const ThankYouTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const ThankYouMessage = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  
  p {
    margin: 0.8rem 0;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const HospitalInfo = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  
  h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.4rem;
  }
  
  p {
    margin: 0;
    font-style: italic;
    opacity: 0.9;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
  flex-wrap: wrap;
`;

const NewComplaintButton = styled.button`
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }
`;

const HomeButton = styled.a`
  padding: 1rem 2rem;
  background: white;
  color: #667eea;
  border: 2px solid white;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background: transparent;
    color: white;
    transform: translateY(-2px);
  }
`;

const ContactInfo = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  
  p {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;

// Original Styled Components (keep these as they are)
const FormContainer = styled.div`
  max-width: 600px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
`;

const FormTitle = styled.h1`
  color: #004AAD;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 2rem 2rem 2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #004AAD;
  font-size: 0.9rem;
  display: flex;
  justify-content: between;
  align-items: center;
`;

const Input = styled.input`
  padding: 0.2rem;
  border: 2px solid ${props => props.hasError ? '#e74c3c' : '#e1e8ed'};
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? '#e74c3c' : '#3498db'};
    box-shadow: 0 0 0 3px ${props => props.hasError ? 'rgba(231, 76, 60, 0.1)' : 'rgba(52, 152, 219, 0.1)'};
  }

  &::placeholder {
    color: #a0a0a0;
    font-size: 14px;
  }
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 2px solid ${props => props.hasError ? '#e74c3c' : '#e1e8ed'};
  border-radius: 6px;
  font-size: 1rem;
  background: white;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? '#e74c3c' : '#3498db'};
    box-shadow: 0 0 0 3px ${props => props.hasError ? 'rgba(231, 76, 60, 0.1)' : 'rgba(52, 152, 219, 0.1)'};
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 2px solid ${props => props.hasError ? '#e74c3c' : '#e1e8ed'};
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? '#e74c3c' : '#3498db'};
    box-shadow: 0 0 0 3px ${props => props.hasError ? 'rgba(231, 76, 60, 0.1)' : 'rgba(52, 152, 219, 0.1)'};
  }

  &::placeholder {
    color: #a0a0a0;
  }
`;

const SubmitButton = styled.button`
  padding: 0.75rem 2rem;
  background: ${props => props.disabled ? '#004AAD' : '#004AAD'};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  align-self: flex-start;

  &:hover {
    background: ${props => props.disabled ? '#bdc3c7' : '#2980b9'};
    transform: ${props => props.disabled ? 'none' : 'translateY(-1px)'};
  }

  &:active {
    transform: ${props => props.disabled ? 'none' : 'translateY(0)'};
  }
`;

const Message = styled.div`
  padding: 0.75rem;
  border-radius: 6px;
  font-weight: 500;
  text-align: center;
  background: ${props => 
    props.type === 'success' ? '#d4edda' : 
    props.type === 'error' ? '#f8d7da' : '#fff3cd'};
  color: ${props => 
    props.type === 'success' ? '#155724' : 
    props.type === 'error' ? '#721c24' : '#856404'};
  border: 1px solid ${props => 
    props.type === 'success' ? '#c3e6cb' : 
    props.type === 'error' ? '#f5c6cb' : '#ffeaa7'};
`;

const ErrorText = styled.span`
  color: #e74c3c;
  font-size: 0.8rem;
  font-weight: 500;
`;

const HintText = styled.span`
  color: #7f8c8d;
  font-size: 0.8rem;
  font-style: italic;
`;

const DateHint = styled.span`
  color: #3498db;
  font-size: 0.8rem;
  font-style: italic;
`;

const WordCount = styled.span`
  margin-left: auto;
  font-weight: normal;
  font-size: 0.8rem;
  color: ${props => props.valid ? '#27ae60' : '#e74c3c'};
`;

export default ComplaintForm;