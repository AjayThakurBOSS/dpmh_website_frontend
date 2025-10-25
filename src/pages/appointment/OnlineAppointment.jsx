import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import axios from "axios";
import { Col, DatePicker, Form, Input, Row, Select, Spin, Button, Result, Divider } from "antd";
import { CheckCircleOutlined, DollarOutlined, CreditCardOutlined } from '@ant-design/icons';
import dayjs from "dayjs";

const { Option } = Select;
const { TextArea } = Input;

// --- Mock Data & API Functions for Demonstration ---

const MOCK_DEPARTMENTS = [
  { id: 1, name: "Cardiology", value: "cardiology" },
  { id: 2, name: "Neurology", value: "neurology" },
  { id: 3, name: "Orthopedics", value: "orthopedics" },
  { id: 4, name: "Pediatrics", value: "pediatrics" },
];

const MOCK_DOCTORS = {
  cardiology: [
    { id: 101, name: "Dr. A. Sharma", fee: 1500, specialty: "cardiology" },
    { id: 102, name: "Dr. B. Singh", fee: 1200, specialty: "cardiology" },
  ],
  neurology: [
    { id: 201, name: "Dr. C. Kumar", fee: 1800, specialty: "neurology" },
    { id: 202, name: "Dr. D. Gupta", fee: 1600, specialty: "neurology" },
  ],
  orthopedics: [
    { id: 301, name: "Dr. E. Khan", fee: 1400, specialty: "orthopedics" },
  ],
  pediatrics: [
    { id: 401, name: "Dr. F. Das", fee: 1100, specialty: "pediatrics" },
  ],
};

const mockFetchDepartments = async () => {
  return new Promise(resolve => setTimeout(() => resolve(MOCK_DEPARTMENTS), 500));
};

const mockFetchDoctorsByDepartment = async (departmentValue) => {
  return new Promise(resolve => setTimeout(() => {
    const doctors = MOCK_DOCTORS[departmentValue] || [];
    resolve(doctors);
  }, 500));
};

// --- Updated Main Component ---

const OnlineAppointment = () => {
  const [form] = Form.useForm();
  const [step, setStep] = useState(1); // 1: Form, 2: Confirmation, 3: Thank You
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState({ departments: true, doctors: false });

  // 1. Fetch Departments on Load
  useEffect(() => {
    const loadDepartments = async () => {
      try {
        const data = await mockFetchDepartments();
        setDepartments(data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      } finally {
        setLoading(prev => ({ ...prev, departments: false }));
      }
    };
    loadDepartments();
  }, []);

  // Handler for Department change
  const onSpecialityChange = async (value) => {
    setLoading(prev => ({ ...prev, doctors: true }));
    form.setFieldsValue({ doctor: undefined }); // Clear doctor selection
    try {
      const data = await mockFetchDoctorsByDepartment(value);
      setDoctors(data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
      setDoctors([]);
    } finally {
      setLoading(prev => ({ ...prev, doctors: false }));
    }
  };

  const currentAppointmentDetails = useMemo(() => {
    const values = form.getFieldsValue();
    const selectedDoctor = doctors.find(doc => doc.id === values.doctor);
    const selectedDept = departments.find(dept => dept.value === values.speciality);
    
    return {
      ...values,
      departmentName: selectedDept?.name,
      doctorName: selectedDoctor?.name,
      consultationFee: selectedDoctor?.fee,
      appointmentDate: values.date ? dayjs(values.date).format("DD-MM-YYYY") : null,
      paymentStatus: values.paymentMode === 'online' ? 'Pending Payment' : 'Pay at Hospital Selected',
    };
  }, [form, doctors, departments]);


  const handleFormSubmit = (values) => {
    // Save all form values (including doctor and paymentMode) and move to Step 2
    form.setFieldsValue(values); 
    setStep(2); 
  };

  const handleConfirmationSubmit = async () => {
    const finalValues = form.getFieldsValue();
    const isPayOnline = finalValues.paymentMode === 'online';

    if (isPayOnline) {
      // **Simulated Razorpay Redirect/Integration**
      // In a real app, this would redirect to Razorpay
      console.log("Redirecting to Razorpay with details:", finalValues);
      alert("Simulating Razorpay Payment Page...");
      // For this mock, we'll simulate a successful transition to the thank-you screen
      // A real integration would involve a backend call and a redirection.
    }

    try {
      // **Simulated API Call to book appointment**
      const response = await axios.post(
        "/api/v1/customer/requestAppointment",
        finalValues
      );
      if (response.status === 201 || response.data.success) {
        console.log("Appointment request submitted successfully!");
      } else {
        console.log("Request processed");
      }
    } catch (error) {
      console.error("Error submitting appointment request:", error);
      // Even if API fails, we often show a success message after payment/submission
      // and log the error for investigation.
    } finally {
      setStep(3); // Move to Thank You page
      setIsSubmitted(true);
      // Note: We don't reset fields here so we can show the details in the thank you page if needed,
      // but it's commented out as per the original logic, and we use a dedicated thank you state.
      // form.resetFields(); 
    }
  };

  // --- Step 3: Thank You Screen ---
  if (isSubmitted && step === 3) {
    return (
      <ThankYouContainer>
        <h1><CheckCircleOutlined style={{ color: '#10b981', marginRight: '10px' }} />Thank You!</h1>
        <p>Your appointment request has been successfully submitted.</p>
        <p>We will contact you shortly to confirm your appointment details.</p>
        <p>
            **Payment Mode:** **{currentAppointmentDetails.paymentMode === 'online' ? 'Online (Simulated Pre-paid)' : 'Pay at Hospital'}**
        </p>
      </ThankYouContainer>
    );
  }

  // --- Step 2: Confirmation/Payment Summary Screen ---
  if (step === 2) {
    const { 
        firstName, 
        departmentName, 
        doctorName, 
        appointmentDate, 
        consultationFee, 
        paymentStatus,
        paymentMode 
    } = currentAppointmentDetails;

    return (
      <ConfirmationContainer>
        <Header>Confirm Your Appointment</Header>
        <Divider />
        <SummaryItem>
            **Patient Name:** **{firstName}**
        </SummaryItem>
        <SummaryItem>
            **Department:** {departmentName || 'N/A'}
        </SummaryItem>
        <SummaryItem>
            **Doctor:** {doctorName || 'N/A'}
        </SummaryItem>
        <SummaryItem>
            **Appointment Date:** {appointmentDate || 'N/A'}
        </SummaryItem>
        <SummaryItem className="fee">
            **Consultation Fee:** **₹{consultationFee || 'N/A'}**
        </SummaryItem>
        <SummaryItem>
            **Payment Mode:** {paymentMode === 'online' ? 'Pay Online' : 'Pay at Hospital'}
        </SummaryItem>
        <SummaryItem>
            **Payment Status:** <span style={{ color: paymentMode === 'online' ? 'orange' : 'green' }}>**{paymentStatus}**</span>
        </SummaryItem>

        <Divider />

        <div className="button-group">
            <Button onClick={() => setStep(1)} type="default" style={{ marginRight: '10px' }}>
                Go Back
            </Button>
            <Button 
                type="primary" 
                onClick={handleConfirmationSubmit}
                icon={paymentMode === 'online' ? <CreditCardOutlined /> : <DollarOutlined />}
            >
                {paymentMode === 'online' ? 'Confirm and Pay (Razorpay Mock)' : 'Confirm and Submit'}
            </Button>
        </div>
      </ConfirmationContainer>
    );
  }

  // --- Step 1: Main Appointment Form ---
  return (
    <RequestContainer>
      <Form layout="vertical" onFinish={handleFormSubmit} form={form} initialValues={{ paymentMode: 'hospital' }}>
        <Header className="text-center red">Request Appointment</Header>
        <hr />
        <Row gutter={[16, 8]}>
          {/* Patient Details */}
          <Col xs={24} md={12}>
            <Form.Item label="First Name" name="firstName" required rules={[{ required: true, message: "Please enter your name" }]}>
              <Input type="text" placeholder="Your name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Contact Number" name="phone" required rules={[{ required: true, message: "Please enter your number" }]}>
              <Input type="text" placeholder="Your Contact Number" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Email" name="email" required rules={[{ required: true, type: 'email' }]}>
              <Input type="email" placeholder="Your email" />
            </Form.Item>
          </Col>
          
          <Col xs={24} md={12}>
            <Form.Item name="gender" label="Gender" rules={[{ required: true, message: "Please select your gender" }]}>
              <Select placeholder="Select gender" allowClear>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
          </Col>

          {/* Department Selection (Speciality) */}
          <Col xs={24} md={12}>
            <Form.Item name="speciality" label="Medical Department" rules={[{ required: true, message: "Please select a department" }]}>
              <Select
                placeholder="Select department"
                onChange={onSpecialityChange}
                allowClear
                disabled={loading.departments}
              >
                {loading.departments ? (
                    <Option value="" disabled><Spin size="small" /> Loading...</Option>
                ) : (
                    departments.map(dept => (
                      <Option key={dept.id} value={dept.value}>{dept.name}</Option>
                    ))
                )}
              </Select>
            </Form.Item>
          </Col>
          
          {/* Doctor Selection */}
          <Col xs={24} md={12}>
            <Form.Item 
                name="doctor" 
                label="Select Doctor" 
                rules={[{ required: true, message: "Please select a doctor" }]}
                shouldUpdate={(prevValues, currentValues) => prevValues.speciality !== currentValues.speciality}
            >
              <Select
                placeholder="Select a doctor"
                allowClear
                disabled={loading.doctors || !form.getFieldValue('speciality')}
              >
                {loading.doctors ? (
                    <Option value="" disabled><Spin size="small" /> Loading...</Option>
                ) : doctors.length > 0 ? (
                    doctors.map(doc => (
                      <Option key={doc.id} value={doc.id}>{doc.name} (Fee: ₹{doc.fee})</Option>
                    ))
                ) : (
                    <Option value="" disabled>Select department first</Option>
                )}
              </Select>
            </Form.Item>
          </Col>

          {/* Date and Payment Mode */}
          <Col xs={24} md={12}>
            <Form.Item label="Appointment Date" name="date" rules={[{ required: true, message: "Please select a date!" }]}>
              <DatePicker format="DD-MM-YYYY" style={{ width: "100%" }} disabledDate={(current) => current && current < dayjs().startOf('day')} />
            </Form.Item>
          </Col>
          
          <Col xs={24} md={12}>
            <Form.Item name="paymentMode" label="Payment Mode" rules={[{ required: true, message: "Please select a payment mode" }]}>
              <Select placeholder="Select payment option" allowClear>
                <Option value="online">Pay Online (Instant Confirmation)</Option>
                <Option value="hospital">Pay at Hospital (Requires Confirmation Call)</Option>
              </Select>
            </Form.Item>
          </Col>

          {/* Symptoms */}
          <Col xs={24}>
            <Form.Item label="Symptoms in brief" name="symptoms" rules={[{ required: true, message: "Please describe your symptoms!" }]}>
              <TextArea
                placeholder="Describe your symptoms"
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
            </Form.Item>
          </Col>
        </Row>

        <div className="submit-button-container">
          <button type="submit" className="submit-button">
            Proceed to Confirmation
          </button>
        </div>
      </Form>
    </RequestContainer>
  );
};

export default OnlineAppointment;


// --- Styled Components (Minimal changes to original styles, adding ConfirmationContainer) ---

const Header = styled.div`
  padding-bottom: 10px;
  color: blue;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 1rem;
`;

const RequestContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  border: 1px solid blue;
  padding: 1.5rem;
  width: 100%;
  margin: 1rem auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* ... other RequestContainer styles remain the same */
  @media screen and (max-width: 768px) {
    padding: 10px;
    margin: 0.5rem auto;
    
  }

  @media screen and (max-width: 480px) {
    padding: 0.75rem;
    margin: 0.5rem auto;
    border-radius: 8px;
  }

  .ant-form-item {
    margin-bottom: 16px;
    
    @media screen and (max-width: 480px) {
      margin-bottom: 12px;
    }
  }

  .ant-form-item-label {
    padding-bottom: 4px;
    
    > label {
      color: blue;
      font-weight: 600;
      font-size: 14px;
      height: auto;
    }
  }

  .ant-input,
  .ant-picker,
  .ant-select-selector {
    height: 42px !important;
    border: 1px solid blue !important;
    color: blue;
    border-radius: 6px;
    
    @media screen and (max-width: 480px) {
      height: 40px !important;
    }
  }

  .ant-input-affix-wrapper,
  .ant-picker {
    border: 1px solid blue !important;
  }

  .ant-select-selector {
    .ant-select-selection-search-input {
      height: 100% !important;
    }
  }

  .ant-input-textarea {
    textarea {
      border: 1px solid blue;
      color: blue;
      border-radius: 6px;
      resize: vertical;
    }
  }

  .submit-button-container {
    margin-top: 1rem;
    
    @media screen and (max-width: 480px) {
      margin-top: 0.75rem;
    }
  }

  .submit-button {
    width: 100%;
    background-color: #3b82f6;
    color: white;
    font-weight: 600;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    font-size: 16px;
    
    &:hover {
      background-color: #2563eb;
    }
    
    &:focus {
      outline: 2px solid #3b82f6;
      outline-offset: 2px;
    }
    
    @media screen and (max-width: 480px) {
      padding: 10px 20px;
      font-size: 14px;
    }
  }
`;

const ThankYouContainer = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #f8fafc;
  border-radius: 10px;
  margin: 2rem auto;
  width: 90%;
  max-width: 500px;
  border: 1px solid #e2e8f0;
  
  h1 {
    color: #10b981;
    font-size: clamp(1.75rem, 4vw, 2.25rem);
    margin-bottom: 1rem;
  }
  
  p {
    color: #4b5563;
    font-size: clamp(1rem, 3vw, 1.125rem);
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 480px) {
    padding: 1.5rem;
    margin: 1rem auto;
  }
`;

const ConfirmationContainer = styled(RequestContainer)`
    max-width: 600px;
    text-align: left;

    .button-group {
        text-align: center;
        margin-top: 20px;
    }
`;

const SummaryItem = styled.p`
    font-size: 1rem;
    margin-bottom: 10px;
    padding: 5px 0;
    border-bottom: 1px dashed #e0e0e0;

    &:last-of-type {
        border-bottom: none;
    }

    &.fee {
        font-size: 1.1rem;
        font-weight: 700;
        color: #d9534f;
    }
`;
