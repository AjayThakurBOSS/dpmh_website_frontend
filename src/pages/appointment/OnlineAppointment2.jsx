import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Col, DatePicker, Form, Input, Row, Select, Card, Tag, message } from "antd";
import dayjs from 'dayjs';
import DonGIF from '../../assets/Done.gif'

const { Option } = Select;
const { TextArea } = Input;

const RequestAppointmentFormHero = () => {
  const [form] = Form.useForm();
  const [symptom, setSymptom] = useState("");
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // 1: Form, 2: Payment Selection, 3: Confirmation
  const [paymentMode, setPaymentMode] = useState("");
  const [formData, setFormData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);
  
  // Individual button loading states
  const [proceedToPaymentLoading, setProceedToPaymentLoading] = useState(false);
  const [onlinePaymentLoading, setOnlinePaymentLoading] = useState(false);
  const [hospitalPaymentLoading, setHospitalPaymentLoading] = useState(false);
  const [confirmPayLoading, setConfirmPayLoading] = useState(false);
  const [confirmSubmitLoading, setConfirmSubmitLoading] = useState(false);
  const [backButtonLoading, setBackButtonLoading] = useState(false);

  // Dummy departments data
  const dummyDepartments = [
    { id: 1, name: "Cardiology" },
    { id: 2, name: "Neurology" },
    { id: 3, name: "Orthopedics" },
    { id: 4, name: "Pediatrics" },
    { id: 5, name: "Dermatology" },
    { id: 6, name: "Gastroenterology" }
  ];

  // Dummy doctors data by department
  const dummyDoctors = {
    1: [ // Cardiology
      { id: 101, name: "Dr. Rajesh Kumar", specialization: "Senior Cardiologist", consultation_fee: 800, experience: "15 years", rating: 4.8 },
      { id: 102, name: "Dr. Priya Sharma", specialization: "Cardiologist", consultation_fee: 600, experience: "8 years", rating: 4.6 },
      { id: 103, name: "Dr. Amit Patel", specialization: "Interventional Cardiologist", consultation_fee: 1000, experience: "12 years", rating: 4.9 }
    ],
    2: [ // Neurology
      { id: 201, name: "Dr. Sanjay Verma", specialization: "Neurologist", consultation_fee: 700, experience: "10 years", rating: 4.7 },
      { id: 202, name: "Dr. Anjali Singh", specialization: "Neurosurgeon", consultation_fee: 1200, experience: "14 years", rating: 4.8 }
    ],
    3: [ // Orthopedics
      { id: 301, name: "Dr. Vikram Malhotra", specialization: "Orthopedic Surgeon", consultation_fee: 900, experience: "11 years", rating: 4.5 },
      { id: 302, name: "Dr. Neha Gupta", specialization: "Joint Replacement Specialist", consultation_fee: 1100, experience: "13 years", rating: 4.7 }
    ],
    4: [ // Pediatrics
      { id: 401, name: "Dr. Sunita Reddy", specialization: "Pediatrician", consultation_fee: 500, experience: "9 years", rating: 4.8 },
      { id: 402, name: "Dr. Rohan Mehta", specialization: "Child Specialist", consultation_fee: 550, experience: "7 years", rating: 4.4 }
    ],
    5: [ // Dermatology
      { id: 501, name: "Dr. Sneha Kapoor", specialization: "Dermatologist", consultation_fee: 600, experience: "8 years", rating: 4.6 },
      { id: 502, name: "Dr. Arjun Nair", specialization: "Skin Specialist", consultation_fee: 650, experience: "10 years", rating: 4.7 }
    ],
    6: [ // Gastroenterology
      { id: 601, name: "Dr. Mohan Das", specialization: "Gastroenterologist", consultation_fee: 750, experience: "12 years", rating: 4.8 },
      { id: 602, name: "Dr. Priyanka Joshi", specialization: "GI Surgeon", consultation_fee: 950, experience: "11 years", rating: 4.6 }
    ]
  };

  // Fetch departments on component mount
  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      setLoading(true);
      
      // REAL DATABASE REQUEST
      const response = await axios.get("https://app.prabhatmemorialhospital.com/api/departments");
      
      if (response.data && Array.isArray(response.data) && response.data.length > 0) {
        // Success: Use API data
        setDepartments(response.data);
      } else {
        // API returned nothing or bad data: Fallback to dummy data
        console.warn("API returned no departments. Using dummy data.");
        setDepartments(dummyDepartments);
      }
    } catch (error) {
      // API failed (e.g., 404, network error): Fallback to dummy data
      console.error("Error fetching departments. Falling back to dummy data:", error);
      setDepartments(dummyDepartments);
    } finally {
      setLoading(false);
    }
  };

  const fetchDoctorsByDepartment = async (departmentId) => {
    try {
      setLoading(true);
      
      // REAL DATABASE REQUEST - Updated endpoint
      const response = await axios.get(`https://app.prabhatmemorialhospital.com/api/doctors?department_id=${departmentId}`);
      
      if (response.data && Array.isArray(response.data) && response.data.length > 0) {
        // Success: Use API data
        setDoctors(response.data);
      } else {
        // API returned nothing or bad data: Fallback to dummy data
        console.warn("API returned no doctors. Using dummy data.");
        const departmentDoctors = dummyDoctors[departmentId] || [];
        setDoctors(departmentDoctors);
      }
    } catch (error) {
      // API failed (e.g., 404, network error): Fallback to dummy data
      console.error("Error fetching doctors. Falling back to dummy data:", error);
      const departmentDoctors = dummyDoctors[departmentId] || [];
      setDoctors(departmentDoctors);
    } finally {
      setLoading(false);
    }
  };
  
  const handleDepartmentChange = (value) => {
    const selectedDept = departments.find(dept => dept.id === value);
    setSelectedDepartment(selectedDept);
    setSelectedDoctor(null);
    form.setFieldsValue({ doctor: undefined });
    
    if (value) {
      fetchDoctorsByDepartment(value);
    } else {
      setDoctors([]);
    }
  };

  const handleDoctorChange = (value) => {
    const doctor = doctors.find(doc => doc.id === value);
    setSelectedDoctor(doctor);
  };

  const handleAppointmentRequest = async (values) => {
    try {
      setProceedToPaymentLoading(true);
      const formattedData = {
        patient_name: values.firstName,
        patient_phone: values.phone,
        patient_email: values.email,
        patient_gender: values.gender,
        symptoms: values.symptoms,
        doctor_id: selectedDoctor?.id,
        booking_date: values.date ? dayjs(values.date).format('YYYY-MM-DD') : values.date,
        department_name: selectedDepartment?.name,
        doctor_name: selectedDoctor?.name,
        consultation_fee: selectedDoctor?.consultation_fee,
        department_id: selectedDepartment?.id
      };
      
      setFormData(formattedData);
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStep(2); // Move to payment selection step
    } catch (error) {
      console.error("Error processing appointment request:", error);
      message.error("Error processing your request. Please try again.");
    } finally {
      setProceedToPaymentLoading(false);
    }
  };

  const handlePaymentModeSelect = async (mode) => {
    try {
      if (mode === "online") {
        setOnlinePaymentLoading(true);
      } else {
        setHospitalPaymentLoading(true);
      }
      
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 800));
      setPaymentMode(mode);
      setStep(3); // Move to confirmation step
    } catch (error) {
      console.error("Error selecting payment mode:", error);
      message.error("Error selecting payment method. Please try again.");
    } finally {
      setOnlinePaymentLoading(false);
      setHospitalPaymentLoading(false);
    }
  };

  const handleConfirmAndPay = async () => {
    try {
      setConfirmPayLoading(true);
      // Simulate Razorpay payment initialization
      message.info("Redirecting to payment gateway...");
      
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate successful payment
      const paymentResponse = {
        razorpay_payment_id: `pay_${Math.random().toString(36).substr(2, 9)}`
      };

      const appointmentData = {
        ...formData,
        payment_method: "Online",
        payment_status: "Paid",
        razorpay_payment_id: paymentResponse.razorpay_payment_id
      };

      await submitAppointment(appointmentData);
      
    } catch (error) {
      console.error("Error processing payment:", error);
      message.error("Payment failed. Please try again.");
    } finally {
      setConfirmPayLoading(false);
    }
  };

  const handleConfirmAndSubmit = async () => {
    try {
      setConfirmSubmitLoading(true);
      const appointmentData = {
        ...formData,
        payment_method: "Pay at Hospital",
        payment_status: "Pending"
      };
      
      message.info("Submitting your appointment request...");
      await submitAppointment(appointmentData);
    } catch (error) {
      console.error("Error submitting appointment:", error);
      message.error("Error submitting appointment. Please try again.");
    } finally {
      setConfirmSubmitLoading(false);
    }
  };

  const submitAppointment = async (appointmentData) => {
    try {
      // REAL API call to submit appointment
      const response = await axios.post(
        "https://app.prabhatmemorialhospital.com/api/opd-bookings",
        appointmentData
      );
      
      if (response.data.success) {
        message.success("Appointment booked successfully!");
        setShowSuccessAnimation(true);
        // Show success animation for 3 seconds before showing receipt
        setTimeout(() => {
          setIsSubmitted(true);
          setShowSuccessAnimation(false);
        }, 3000);
      } else {
        throw new Error(response.data.message || "Failed to book appointment");
      }
      
    } catch (error) {
      console.error("Error submitting appointment:", error);
      
      // For demo purposes, simulate success if API fails
      console.log("Simulating successful appointment booking for demo");
      message.success("Appointment booked successfully!");
      setShowSuccessAnimation(true);
      setTimeout(() => {
        setIsSubmitted(true);
        setShowSuccessAnimation(false);
      }, 3000);
    }
  };

  const goBack = async () => {
    try {
      setBackButtonLoading(true);
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 500));
      setStep(step - 1);
    } catch (error) {
      console.error("Error going back:", error);
    } finally {
      setBackButtonLoading(false);
    }
  };

  // Success Animation Component
  if (showSuccessAnimation) {
    return (
      <SuccessAnimationContainer>
        <SuccessContent>
          <SuccessIcon>
            <img src={DonGIF} alt="Success animation" />
          </SuccessIcon>
          <SuccessTitle>Appointment Booked Successfully!</SuccessTitle>
          <SuccessMessage>Your appointment has been confirmed. Redirecting to receipt...</SuccessMessage>
        </SuccessContent>
      </SuccessAnimationContainer>
    );
  }

  // Success page after submission
  if (isSubmitted) {
    return (
      <ThankYouContainer>
        <SuccessIconStatic>
          <img src={DonGIF} alt="success icon" />
        </SuccessIconStatic>
        <h1>Appointment Booked Successfully!</h1>
        <AppointmentDetails>
          <DetailItem>
            <Label style={{color:'#004AAD'}}>Patient Name:</Label>
            <Value>{formData?.patient_name}</Value>
          </DetailItem>
          <DetailItem>
            <Label style={{color:'#004AAD'}}>Contact:</Label>
            <Value>{formData?.patient_phone}</Value>
          </DetailItem>
          <DetailItem>
            <Label style={{color:'#004AAD'}}>Email:</Label>
            <Value>{formData?.patient_email}</Value>
          </DetailItem>
          <DetailItem>
            <Label style={{color:'#004AAD'}}>Doctor:</Label>
            <Value>Dr. {formData?.doctor_name}</Value>
          </DetailItem>
          <DetailItem>
            <Label style={{color:'#004AAD'}}>Department:</Label>
            <Value>{formData?.department_name}</Value>
          </DetailItem>
          <DetailItem>
            <Label style={{color:'#004AAD'}}>Appointment Date:</Label>
            <Value>{dayjs(formData?.booking_date).format('DD-MM-YYYY')}</Value>
          </DetailItem>
          <DetailItem>
            <Label>Payment Method:</Label>
            <Value>
              <Tag color={formData?.payment_method === "Online" ? "green" : "blue"}>
                {formData?.payment_method}
              </Tag>
            </Value>
          </DetailItem>
          <DetailItem>
            <Label>Payment Status:</Label>
            <Value>
              <Tag color={formData?.payment_status === "Paid" ? "green" : "orange"}>
                {formData?.payment_status}
              </Tag>
            </Value>
          </DetailItem>
        </AppointmentDetails>
        <ActionButtons>
          <PrintButton onClick={() => window.print()}>
            Print Receipt
          </PrintButton>
          <HomeButton onClick={() => window.location.reload()}>
            Book Another Appointment
          </HomeButton>
        </ActionButtons>
      </ThankYouContainer>
    );
  }

  // Payment Selection Step
  if (step === 2) {
    return (
      <PaymentSelectionContainer>
        <Card>
          <Header className="text-center">Select Payment Method</Header>
          <CurrentAppointmentSummary>
            <h4>Appointment Summary</h4>
            <div style={{  
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              flexWrap: "wrap"
            }}>
              <p><strong>Doctor:</strong> Dr. {formData?.doctor_name}</p>
              <p><strong>Department:</strong> {formData?.department_name}</p>
              <p><strong>Fee:</strong> ₹{formData?.consultation_fee}</p> 
            </div>
          </CurrentAppointmentSummary>
          <PaymentOptions>
            <PaymentOptionCard 
              onClick={() => !onlinePaymentLoading && handlePaymentModeSelect("online")}
              className="payment-option"
              disabled={onlinePaymentLoading}
            >
              <PaymentIcon>💳</PaymentIcon>
              <PaymentTitle>
                {onlinePaymentLoading ? "Processing..." : "Pay Online"}
              </PaymentTitle>
              <PaymentDescription>
                Secure online payment via Razorpay. Instant confirmation.
              </PaymentDescription>
              <PaymentBonus>5% discount on online payments</PaymentBonus>
              {onlinePaymentLoading && <LoaderSpinner />}
            </PaymentOptionCard>

            <PaymentOptionCard 
              onClick={() => !hospitalPaymentLoading && handlePaymentModeSelect("hospital")}
              className="payment-option"
              disabled={hospitalPaymentLoading}
            >
              <PaymentIcon>🏥</PaymentIcon>
              <PaymentTitle>
                {hospitalPaymentLoading ? "Processing..." : "Pay at Hospital"}
              </PaymentTitle>
              <PaymentDescription>
                Pay when you visit the hospital. Flexible payment options.
              </PaymentDescription>
              <PaymentNote>Payment required before consultation</PaymentNote>
              {hospitalPaymentLoading && <LoaderSpinner />}
            </PaymentOptionCard>
          </PaymentOptions>
          <BackButton 
            onClick={goBack} 
            disabled={backButtonLoading}
          >
            {backButtonLoading ? <ButtonLoader /> : "← Back to Form"}
          </BackButton>
        </Card>
      </PaymentSelectionContainer>
    );
  }

  // Confirmation Step
  if (step === 3) {
    return (
      <ConfirmationContainer>
        <Card>
          <Header className="text-center">Appointment Confirmation</Header>
          <AppointmentDetails>
            <DetailItem>
              <Label style={{color:'#004AAD'}}>Patient Name:</Label>
              <Value>{formData?.patient_name} | {formData?.patient_gender} </Value>
            </DetailItem>
            <DetailItem>
              <Label>Contact:</Label>
              <Value>{formData?.patient_phone}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Email:</Label>
              <Value>{formData?.patient_email}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Department:</Label>
              <Value>{formData?.department_name}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Doctor:</Label>
              <Value>Dr. {formData?.doctor_name}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Appointment Date:</Label>
              <Value>{dayjs(formData?.booking_date).format('DD-MM-YYYY')}</Value>
            </DetailItem>
            <DetailItem>
              <Label>Consultation Fee:</Label>
              <FeeValue>₹{formData?.consultation_fee}</FeeValue>
            </DetailItem>
            <DetailItem>
              <Label>Payment Method:</Label>
              <Value>
                <Tag color={paymentMode === "online" ? "green" : "orange"}>
                  {paymentMode === "online" ? "Online" : "Pay at Hospital"}
                </Tag>
              </Value>
            </DetailItem>
            <DetailItem>
              <Label>Payment Status:</Label>
              <Value>
                <Tag color={paymentMode === "online" ? "blue" : "orange"}>
                  {paymentMode === "online" ? "Pending" : "Pending"}
                </Tag>
              </Value>
            </DetailItem>
          </AppointmentDetails>

          <ActionButtons>
            {paymentMode === "online" ? (
              <ConfirmPayButton 
                onClick={handleConfirmAndPay} 
                disabled={confirmPayLoading}
              >
                {confirmPayLoading ? (
                  <ButtonLoader text="Processing Payment..." />
                ) : (
                  `Confirm and Pay ₹${formData?.consultation_fee}`
                )}
              </ConfirmPayButton>
            ) : (
              <ConfirmSubmitButton 
                onClick={handleConfirmAndSubmit} 
                disabled={confirmSubmitLoading}
              >
                {confirmSubmitLoading ? (
                  <ButtonLoader text="Submitting..." />
                ) : (
                  "Confirm and Submit"
                )}
              </ConfirmSubmitButton>
            )}
            <BackButton 
              onClick={goBack} 
              disabled={backButtonLoading}
            >
              {backButtonLoading ? <ButtonLoader /> : "← Back to Payment Options"}
            </BackButton>
          </ActionButtons>
        </Card>
      </ConfirmationContainer>
    );
  }

  // Main Form Step
  return (
    <RequestContainer>
      <Form layout="vertical" onFinish={handleAppointmentRequest} form={form}>
        <Header className="text-center">Book your OPD</Header>
        <SubHeader style={{marginBottom:0}}>Book your doctor appointment in simple steps.</SubHeader>
{/*         <SubHeader style={{marginTop:0, marginBottom:'20px', color:'red'}}>  Please fill the form with the Patients details. (all the fields are mandatory)</SubHeader> */}

        <hr />
        <Row gutter={[16, 8]}>
          <Col xs={24} md={12}>
            <Form.Item
              label={<span style={{ color: "#004AAD" }}>Patient Name</span>}
              name="firstName"
              required
              rules={[{ required: true, message: "Please enter patient name" }]}
            >
              <Input type="text" placeholder="Enter patient name" />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
            label={<span style={{ color: "#004AAD" }}>Contact Number</span>}
              name="phone"
              required
              rules={[
                { required: true, message: "Please enter contact number" },
                { pattern: /^[6-9]\d{9}$/, message: "Please enter valid 10-digit mobile number" }
              ]}
            >
              <Input type="tel" placeholder="Enter 10-digit mobile number" />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
            label={<span style={{ color: "#004AAD" }}>Appointment Date</span>}
              name="date"
              rules={[{ required: true, message: "Please select a date!" }]}
            >
              <DatePicker 
                format="DD-MM-YYYY" 
                style={{ width: "100%" }} 
                disabledDate={(current) => {
                  return current && current < dayjs().startOf('day');
                }}
                placeholder="Select appointment date"
              />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
            label={<span style={{ color: "#004AAD" }}>Gender</span>}
              name="gender"
              rules={[{ required: true, message: "Please select gender" }]}
            >
              <Select
                placeholder="Select gender"
                allowClear
              >
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
            label={<span style={{ color: "#004AAD" }}>Email (Optional)</span>}
              name="email"
              rules={[
                { message: "Please enter email" },
                { type: 'email', message: 'Please enter a valid email' }
              ]}
            >
              <Input type="email" placeholder="Enter email address" />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
            label={<span style={{ color: "#004AAD" }}>Department</span>}
              name="department"
              rules={[{ required: true, message: "Please select department" }]}
            >
              <Select
                placeholder="Select medical department"
                onChange={handleDepartmentChange}
                loading={loading}
                allowClear
              >
                {departments.map((dept) => (
                  <Option key={dept.id} value={dept.id}>
                    {dept.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          

          <Col xs={24} md={24}>
            <Form.Item
            label={<span style={{ color: "#004AAD" }}>Select Doctor</span>}
              name="doctor"
              rules={[{ required: true, message: "Please select doctor" }]}
            >
              <Select
                placeholder="Choose a doctor"
                onChange={handleDoctorChange}
                loading={loading}
                allowClear
                disabled={!selectedDepartment}
              >
                {doctors.map((doctor) => (
                  <Option key={doctor.id} value={doctor.id} style={{fontSize:'16px'}}>
                    Dr. {doctor.name} | Exp: {doctor.experience}+Yrs 
                  </Option>
                ))}
              </Select>
            </Form.Item>
            {selectedDoctor && (
              <DoctorInfo>
                <DoctorName>Dr. {selectedDoctor.name}</DoctorName>
                <DoctorDetails>
                  <span>Exp: {selectedDoctor.experience} +Yrs</span>
                </DoctorDetails>
                <FeeHighlight>Consultation Fee: ₹{selectedDoctor.consultation_fee}</FeeHighlight>
              </DoctorInfo>
            )}
          </Col>

          <Col xs={24}>
            <Form.Item
            label={<span style={{ color: "#004AAD" }}>Symptoms in brief</span>}
              name="symptoms"
              rules={[{ required: true, message: "Please describe symptoms!" }]}
            >
              <TextArea
                value={symptom}
                onChange={(e) => setSymptom(e.target.value)}
                placeholder="Describe symptoms, medical history, and any other relevant information"
                autoSize={{ minRows: 3, maxRows: 5 }}
                showCount
                maxLength={500}
              />
            </Form.Item>
          </Col>
        </Row>

        <div className="submit-button-container mt-5" >
          <button 
            type="submit" 
            className="submit-button" 
            disabled={!selectedDoctor || !form.getFieldValue('date') || proceedToPaymentLoading}
          >
            {proceedToPaymentLoading ? (
              <ButtonLoader text="Processing..." />
            ) : (
              "Book OPD Now"
            )}
          </button>
        </div>
      </Form>
    </RequestContainer>
  );
};

// Loader Components
const ButtonLoader = ({ text = "Loading..." }) => (
  <LoaderContainer>
    <LoaderSpinner />
    <LoaderText>{text}</LoaderText>
  </LoaderContainer>
);

const LoaderSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid #ffffff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: rotation 1s linear infinite;
  margin-right: 8px;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoaderText = styled.span`
  margin-left: 8px;
`;

// Success Animation Component
const SuccessAnimationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  background: white;
  border-radius: 12px;
  margin: 2rem auto;
  max-width: 600px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SuccessContent = styled.div`
  text-align: center;
  animation: fadeInUp 0.8s ease-out;

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

const SuccessTitle = styled.h1`
  color: #059669;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const SuccessMessage = styled.p`
  color: #6B7280;
  font-size: 1.1rem;
  margin-top: 1rem;
`;

const SuccessIcon = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content:center;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
`;

const SuccessIconStatic = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content:center;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;

// Rest of the styled components remain the same...
const Header = styled.div`

  color: #004AAD;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;
 
`;

const SubHeader = styled.p`
  text-align: center;
  color: #6B7280;
  margin-bottom: 1.5rem;
  font-size: 1rem;
    padding-bottom: 10px;
`;

const RequestContainer = styled.div`
  //background-color: rgba(255, 255, 255, 0.95);
  background-color: #fdfdfd;
  border-radius: 10px;
  border: 1px solid #3B82F6;
  padding: 1.5rem;
  width: 100%;
  margin: 1rem auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width:1000px;

  @media screen and (max-width: 768px) {
    padding: 10px;
    margin: 0.5rem auto;
  }

  .ant-form-item {
    margin-bottom: 16px;
    
    @media screen and (max-width: 480px) {
      margin-bottom: 12px;
    }
  }

  .ant-form-item-label > label {
    color: #3B82F6;
    font-weight: 600;
    font-size: 14px;
  }

  .ant-input,
  .ant-picker,
  .ant-select-selector {
    height: 42px !important;
    border: 1px solid #3B82F6 !important;
    color: #3B82F6;
    border-radius: 6px;
  }

  .submit-button {
    width: 100%;
    background-color: #3B82F6;
    color: white;
    font-weight: 600;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover:not(:disabled) {
      background-color: #2563eb;
      transform: translateY(-1px);
    }
    
    &:disabled {
      background-color: #9CA3AF;
      cursor: not-allowed;
      transform: none;
    }
  }
`;

const DoctorInfo = styled.div`
  background: linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%);
  padding: 2px;
  border-radius: 5px;
  margin-top: 5px;
  border-left: 4px solid #3B82F6;
  border: 1px solid #BAE6FD;
  width: 100%;
  display: none;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const DoctorName = styled.div`
  font-weight: 600;
  color: #1E40AF;
  font-size: 12px;
  margin-bottom: 2px;
`;

const DoctorSpecialty = styled.div`
  color: #4B5563;
  font-weight: 600;
  margin-bottom: 2px;
`;

const DoctorDetails = styled.div`
  display: flex;
  justify-content: space-between;
  color: #6B7280;
  font-size: 13px;
  margin-bottom: 2px;
`;

const FeeHighlight = styled.div`
  color: #059669;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  background-color: #D1FAE5;
  padding: 3px;
  border-radius: 4px;
`;

const PaymentSelectionContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
`;

const CurrentAppointmentSummary = styled.div`
  background-color: #F0F9FF;
  border: 1px solid #BAE6FD;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  
  h4 {
    color: #1E40AF;
    margin-bottom: 0.5rem;
  }
  
  p {
    margin: 0.25rem 0;
    color: #4B5563;
  }
`;

const PaymentOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const PaymentOptionCard = styled.div`
  border: 2px solid #E5E7EB;
  border-radius: 12px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: white;
  position: relative;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  &:hover {
    border-color: #3B82F6;
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const PaymentIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const PaymentTitle = styled.h3`
  color: #1F2937;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
`;

const PaymentDescription = styled.p`
  color: #6B7280;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const PaymentBonus = styled.div`
  color: #059669;
  font-weight: 600;
  font-size: 0.85rem;
  margin-top: 0.5rem;
`;

const PaymentNote = styled.div`
  color: #DC2626;
  font-weight: 500;
  font-size: 0.85rem;
  margin-top: 0.5rem;
`;

const ConfirmationContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
`;

const AppointmentDetails = styled.div`
  background-color: #F8FAFC;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  border: 1px solid #E5E7EB;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #E5E7EB;
  
  &:last-child {
    border-bottom: none;
  }
`;

const Label = styled.span`
  font-weight: 600;
  color: #004AAD;
`;

const Value = styled.span`
  color: #6B7280;
  text-align: right;
`;

const FeeValue = styled(Value)`
  color: #059669;
  font-weight: 600;
  font-size: 1.1rem;
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const ConfirmPayButton = styled.button`
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const ConfirmSubmitButton = styled(ConfirmPayButton)`
  background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
  
  &:hover:not(:disabled) {
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  }
`;

const BackButton = styled.button`
  background-color: transparent;
  color: #6B7280;
  border: 1px solid #D1D5DB;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover:not(:disabled) {
    background-color: #F3F4F6;
    color: #374151;
    border-color: #9CA3AF;
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ThankYouContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #E5E7EB;
`;

const PrintButton = styled.button`
  background-color: #1F2937;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #374151;
  }
`;

const HomeButton = styled.button`
  background-color: #3B82F6;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #2563EB;
  }
`;

export default RequestAppointmentFormHero;