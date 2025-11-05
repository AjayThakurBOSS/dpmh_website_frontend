import React, { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import axios from "axios";
import { Col, DatePicker, Form, Input, Row, Select, Card, Tag, message, Spin } from "antd";
import dayjs from 'dayjs';
import DonGIF from '../../assets/Done.gif'
import Logo from '../../assets/logo.jpeg'

const { Option } = Select;
const { TextArea } = Input;

const RequestAppointmentFormHero = () => {
  const formforEmail = useRef();
  const [form] = Form.useForm();
  const [symptom, setSymptom] = useState("");
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [doctorsLoading, setDoctorsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [paymentMode, setPaymentMode] = useState("");
  const [formData, setFormData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('Pending')
  const [transectionID, setTransectionID] = useState('')
  const [downloadLink, setDownloadLink] = useState('')
  const [showReceiptStep, setShowReceiptStep] = useState(false);
  const [showPaymentLoader, setShowPaymentLoader] = useState(false); // New state for payment loader

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
    1: [
      { id: 101, name: "Dr. Rajesh Kumar", specialization: "Senior Cardiologist", consultation_fee: 800, experience: "15 years", rating: 4.8 },
      { id: 102, name: "Dr. Priya Sharma", specialization: "Cardiologist", consultation_fee: 600, experience: "8 years", rating: 4.6 },
      { id: 103, name: "Dr. Amit Patel", specialization: "Interventional Cardiologist", consultation_fee: 1000, experience: "12 years", rating: 4.9 }
    ],
    2: [
      { id: 201, name: "Dr. Sanjay Verma", specialization: "Neurologist", consultation_fee: 700, experience: "10 years", rating: 4.7 },
      { id: 202, name: "Dr. Anjali Singh", specialization: "Neurosurgeon", consultation_fee: 1200, experience: "14 years", rating: 4.8 }
    ],
    3: [
      { id: 301, name: "Dr. Vikram Malhotra", specialization: "Orthopedic Surgeon", consultation_fee: 900, experience: "11 years", rating: 4.5 },
      { id: 302, name: "Dr. Neha Gupta", specialization: "Joint Replacement Specialist", consultation_fee: 1100, experience: "13 years", rating: 4.7 }
    ],
    4: [
      { id: 401, name: "Dr. Sunita Reddy", specialization: "Pediatrician", consultation_fee: 500, experience: "9 years", rating: 4.8 },
      { id: 402, name: "Dr. Rohan Mehta", specialization: "Child Specialist", consultation_fee: 550, experience: "7 years", rating: 4.4 }
    ],
    5: [
      { id: 501, name: "Dr. Sneha Kapoor", specialization: "Dermatologist", consultation_fee: 600, experience: "8 years", rating: 4.6 },
      { id: 502, name: "Dr. Arjun Nair", specialization: "Skin Specialist", consultation_fee: 650, experience: "10 years", rating: 4.7 }
    ],
    6: [
      { id: 601, name: "Dr. Mohan Das", specialization: "Gastroenterologist", consultation_fee: 750, experience: "12 years", rating: 4.8 },
      { id: 602, name: "Dr. Priyanka Joshi", specialization: "GI Surgeon", consultation_fee: 950, experience: "11 years", rating: 4.6 }
    ]
  };

  const generateTransactionId = () => {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substr(2, 9).toUpperCase();
    return `TXN${timestamp}${randomStr}`;
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://app.prabhatmemorialhospital.com/api/departments");
      
      if (response.data && Array.isArray(response.data) && response.data.length > 0) {
        setDepartments(response.data);
      } else {
        console.warn("API returned no departments. Using dummy data.");
        setDepartments(dummyDepartments);
      }
    } catch (error) {
      console.error("Error fetching departments. Falling back to dummy data:", error);
      setDepartments(dummyDepartments);
    } finally {
      setLoading(false);
    }
  };

  const fetchDoctorsByDepartment = async (departmentId) => {
    try {
      setDoctorsLoading(true);
      setDoctors([]);
      
      const response = await axios.get(`https://app.prabhatmemorialhospital.com/api/doctors?department_id=${departmentId}`);
      
      if (response.data && Array.isArray(response.data) && response.data.length > 0) {
        setDoctors(response.data);
      } else {
        console.warn("API returned no doctors. Using dummy data.");
        const departmentDoctors = dummyDoctors[departmentId] || [];
        setDoctors(departmentDoctors);
      }
    } catch (error) {
      console.error("Error fetching doctors. Falling back to dummy data:", error);
      const departmentDoctors = dummyDoctors[departmentId] || [];
      setDoctors(departmentDoctors);
    } finally {
      setDoctorsLoading(false);
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
    const doctor = doctors.find((doc) => doc.id === value);
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
      };
      
      setFormData(formattedData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStep(2);
    } catch (error) {
      console.error("Error processing appointment request:", error);
      message.error("Error processing your request. Please try again.");
    } finally {
      setProceedToPaymentLoading(false);
    }
  };

  const handlePaymentModeSelect = async (mode) => {
    try {
      if (mode === "Razorpay") {
        setOnlinePaymentLoading(true);
        setPaymentStatus('Pending'); // Online payment starts as pending
      } else {
        setHospitalPaymentLoading(true);
         setPaymentStatus('Pending'); // Hospital payment remains pending
      }
      
      await new Promise(resolve => setTimeout(resolve, 800));
      setPaymentMode(mode);
      setStep(3);
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
      setShowPaymentLoader(true); // Show full-screen loader
      
      const transactionId = generateTransactionId();
      setTransectionID(transactionId);
      
      const loadRazorpayScript = () => {
        return new Promise((resolve) => {
          const script = document.createElement('script');
          script.src = 'https://checkout.razorpay.com/v1/checkout.js';
          script.onload = () => resolve(true);
          script.onerror = () => resolve(false);
          document.body.appendChild(script);
        });
      };

      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        message.error('Razorpay SDK failed to load. Please check your internet connection.');
        setConfirmPayLoading(false);
        setShowPaymentLoader(false); // Hide loader on error
        return;
      }

      const options = {
        key: "rzp_test_RbDL5BG2RHc7h6", 
        amount: selectedDoctor?.consultation_fee * 100,
        currency: 'INR',
        name: formData?.patient_name,
        description: `Appointment with Dr. ${selectedDoctor?.name}`,
        image: Logo, 
        
        handler: async function (response) {
          try {
            const appointmentData = {
              ...formData,
              payment_method: paymentMode,
              payment_status: 'Completed',
              payment_transaction_id: transactionId, 
            };

            await submitAppointment(appointmentData);
            setPaymentStatus('Completed');
            
            // Hide payment loader and show success
            setShowPaymentLoader(false);
            setStep(4);
            
            // Show receipt step after 3 seconds delay
            setTimeout(() => {
              setShowReceiptStep(true);
            }, 3000);
            
          } catch (error) {
            setPaymentStatus('Failed');
            setShowPaymentLoader(false); // Hide loader on error
            console.error("Payment processing error:", error);
            message.error("Payment processing failed. Please contact support.");
          }
        },
        prefill: {
          name: formData?.patient_name,
          email: formData?.patient_email || "",
          contact: formData?.patient_phone
        },
        notes: {
          appointment: `Appointment with Dr. ${selectedDoctor?.name}`,
          department: selectedDepartment?.name,
          payment_transaction_id: transactionId
        },
        theme: {
          color: "#004AAD"
        },
        modal: {
          ondismiss: function() {
            setConfirmPayLoading(false);
            setShowPaymentLoader(false); // Hide loader when modal is dismissed
            message.info("Payment cancelled by user");
          }
        }
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();

    } catch (error) {
      console.error("Error processing payment:", error);
      setShowPaymentLoader(false); // Hide loader on error
      if (process.env.NODE_ENV === 'development') {
        message.warning("Using demo payment mode");
        await simulateRazorpayPayment();
      } else {
        message.error("Payment initialization failed. Please try again.");
      }
    } finally {
      setConfirmPayLoading(false);
    }
  };

  const simulateRazorpayPayment = async () => {
    try {
      const transactionId = generateTransactionId();
      
      const paymentResponse = {
        razorpay_payment_id: `pay_${Math.random().toString(36).substr(2, 9)}`,
        razorpay_order_id: `order_${Math.random().toString(36).substr(2, 9)}`,
        razorpay_signature: `sig_${Math.random().toString(36).substr(2, 16)}`
      };

      const appointmentData = {
        ...formData,
        payment_method: paymentMode,
        payment_status: 'Completed',
        payment_transaction_id: transactionId,
      };

      await submitAppointment(appointmentData);
      setPaymentStatus('Completed');
      
      // Hide payment loader and show success
      setShowPaymentLoader(false);
      setStep(4);
      
      // Show receipt step after 3 seconds delay
      setTimeout(() => {
        setShowReceiptStep(true);
      }, 3000);
      
    } catch (error) {
      console.error("Demo payment error:", error);
      setShowPaymentLoader(false); // Hide loader on error
      message.error("Demo payment failed");
    }
  };

  const handleConfirmAndSubmit = async () => {
    try {
      setConfirmSubmitLoading(true);
      setShowPaymentLoader(true); // Show full-screen loader for hospital payment too
      
      const transactionId = generateTransactionId();
      setTransectionID(transactionId);
      
      const appointmentData = {
        ...formData,
        payment_method: "Pay at Hospital",
        payment_status: "Pending",
        payment_transaction_id: transactionId
      };
      
      message.info("Submitting your appointment request...");
      await submitAppointment(appointmentData);
      
      // Hide payment loader and show success
      setShowPaymentLoader(false);
      setStep(4);
      setShowReceiptStep(true); 
      
      // Show receipt step after 3 seconds delay
/*       setTimeout(() => {
        setShowReceiptStep(true);
      }, 3000); */
      
    } catch (error) {
      console.error("Error submitting appointment:", error);
      setShowPaymentLoader(false); // Hide loader on error
      message.error("Error submitting appointment. Please try again.");
    } finally {
      setConfirmSubmitLoading(false);
    }
  };

  const submitAppointment = async (appointmentData) => {
    try {
      console.log('Submitting appointment data:', appointmentData);
      
      const response = await axios.post(
        "https://app.prabhatmemorialhospital.com/api/opd-bookings",
        appointmentData
      );
      
      console.log('Appointment Response:', response);

      if (response.data.success) {
        message.success("Appointment booked successfully!");

      // Only show success animation for online payments, not for Pay at Hospital
      if (appointmentData.payment_method === "Razorpay") {
        setShowSuccessAnimation(true);
      }
        
         setPaymentStatus(appointmentData.payment_status); // Use the status from appointment data
        setDownloadLink(response.data.receipt_download_link);
      
      // Only set timeout for success animation for online payments
      if (appointmentData.payment_method === "Razorpay") {
        setTimeout(() => {
          setIsSubmitted(true);
          setShowSuccessAnimation(false);
        }, 0);
      }
      } else {
        setPaymentStatus('Failed')
        throw new Error(response.data.message || "Failed to book appointment");
      }
    } catch (error) {
      setPaymentStatus('Failed')
      console.error("Error submitting appointment:", error);
      console.log("API failed, but continuing with success flow for demo");
      message.warning("Appointment submitted (demo mode - check console for errors)");

          // Only show success animation for online payments in demo mode
    if (appointmentData.payment_method === "Razorpay") {
      setShowSuccessAnimation(true);
      setTimeout(() => {
        setIsSubmitted(true);
        setShowSuccessAnimation(false);
      }, 0);
    }
    }
  };

  const goBack = async () => {
    try {
      setBackButtonLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      setStep(step - 1);
    } catch (error) {
      console.error("Error going back:", error);
    } finally {
      setBackButtonLoading(false);
    }
  };

  const sendEnquery = async (values) => {
    try{
      const response = await axios.post("https://app.prabhatmemorialhospital.com/api/booking-inquiry", {
        doctor_name: selectedDoctor.name,
        patient_name: values?.firstName,
        booking_date: values.date 
                            ? dayjs(values.date).format('YYYY-MM-DD') 
                            : values.date,
        patient_phone: values?.phone,
        patient_email: values?.email,
        patient_gender: values?.gender,
        symptoms: values?.symptoms,
      } )

      if(response.data.success){
        message.success('Email sent successfully')
      }else{
        throw new Error(response.data.message || 'Failed to book appointment')
      }

    }catch (error){
      console.log("Error submitting appointment:", error)
    }
  }

  // Payment Loader Overlay
  if (showPaymentLoader) {
    return (
      <PaymentLoaderOverlay>
        <PaymentLoaderContent>
          <LargeLoaderSpinner />
          <PaymentLoaderTitle>Processing ...</PaymentLoaderTitle>
          <PaymentLoaderMessage>
            Please wait while we process your request. Do not refresh the page.
          </PaymentLoaderMessage>
        </PaymentLoaderContent>
      </PaymentLoaderOverlay>
    );
  }

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

  // Success page after submission - Updated to show success step and receipt step separately
  if (isSubmitted || step === 4) {
    return (
      <ThankYouContainer>
        {!showReceiptStep ? (
          // Success Step - Shows immediately after payment
          <SuccessStepContent>
            <SuccessIconStatic>
              <img src={DonGIF} alt="success icon" />
            </SuccessIconStatic>
            <SuccessTitle>Payment Successful!</SuccessTitle>
            <SuccessMessage>
              Your appointment has been confirmed. Preparing your receipt...
            </SuccessMessage>
            <LoadingIndicator>
              <LoaderSpinner />
              <span>Generating receipt...</span>
            </LoadingIndicator>
          </SuccessStepContent>
        ) : (
          // Receipt Step - Shows after delay
          <ReceiptStepContent>
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
                <Value>Dr. {selectedDoctor.name}</Value>
              </DetailItem>
              <DetailItem>
                <Label style={{color:'#004AAD'}}>Department:</Label>
                <Value>{selectedDepartment.name}</Value>
              </DetailItem>
              <DetailItem>
                <Label style={{color:'#004AAD'}}>Appointment Date:</Label>
                <Value>{dayjs(formData?.booking_date).format('DD-MM-YYYY')}</Value>
              </DetailItem>
              <DetailItem>
                <Label style={{color:'#004AAD'}}>Transaction ID:</Label>
                <Value>
                  <Tag color="purple">{transectionID}</Tag>
                </Value>
              </DetailItem>
              <DetailItem>
                <Label style={{color:'#004AAD'}}>Payment Method:</Label>
                <Value>
                  <Tag color={paymentMode === "Razorpay" ? "green" : "blue"}>
                    {paymentMode === "Pay at Hospital" ? "Pay at Hospital" : "Razorpay"}
                  </Tag>
                </Value>
              </DetailItem>
              <DetailItem>
                <Label style={{color:'#004AAD'}}>Payment Status:</Label>
                <Value>
                  <Tag color={paymentStatus === 'Completed' ? "green" : "orange"}>
                    {paymentStatus === 'Completed' ? "Completed" : "Pending"}
                  </Tag>
                </Value>
              </DetailItem>
            </AppointmentDetails>
            <ActionButtons>
              <a href={downloadLink}>
                <PrintButton>Download Receipt</PrintButton>
              </a>
              <HomeButton onClick={() => window.location.reload()}>
                Book Another OPD
              </HomeButton>
            </ActionButtons>
          </ReceiptStepContent>
        )}
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
              <p><strong>Doctor:</strong> Dr. {selectedDoctor?.name}</p>
              <p><strong>Department:</strong> {selectedDepartment?.name}</p>
              <p><strong>Fee:</strong> ₹{selectedDoctor?.consultation_fee}</p> 
            </div>
          </CurrentAppointmentSummary>
          <PaymentOptions>
            <PaymentOptionCard 
              onClick={() => !onlinePaymentLoading && handlePaymentModeSelect("Razorpay") && setPaymentMode('Razorpay') && setPaymentStatus('Pending') }
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
              onClick={() => !hospitalPaymentLoading && handlePaymentModeSelect("Pay at Hospital") && setPaymentMode('Pay at Hospital') && setPaymentStatus('Pending')}
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
              <Label style={{color:'#004AAD'}}>Contact:</Label>
              <Value>{formData?.patient_phone}</Value>
            </DetailItem>
            <DetailItem>
              <Label style={{color:'#004AAD'}}>Email:</Label>
              <Value>{formData?.patient_email}</Value>
            </DetailItem>
            <DetailItem>
              <Label style={{color:'#004AAD'}}>Department:</Label>
              <Value>{selectedDepartment?.name}</Value>
            </DetailItem>
            <DetailItem>
              <Label style={{color:'#004AAD'}}>Doctor:</Label>
              <Value>Dr. {selectedDoctor?.name}</Value>
            </DetailItem>
            <DetailItem>
              <Label style={{color:'#004AAD'}}>Appointment Date:</Label>
              <Value>{dayjs(formData?.booking_date).format('DD-MM-YYYY')}</Value>
            </DetailItem>
            <DetailItem>
              <Label style={{color:'#004AAD'}}>Consultation Fee:</Label>
              <FeeValue>₹{selectedDoctor?.consultation_fee}</FeeValue>
            </DetailItem>
            <DetailItem>
              <Label style={{color:'#004AAD'}}>Payment Method:</Label>
              <Value>
                <Tag color={paymentMode === "Razorpay" ? "green" : "orange"}>
                  {paymentMode === "Razorpay" ? "Razorpay" : "Pay at Hospital"}
                </Tag>
              </Value>
            </DetailItem>
            <DetailItem>
              <Label style={{color:'#004AAD'}}>Payment Status:</Label>
              <Value>
                <Tag color={paymentMode === "Razorpay" ? "orange" : "orange"}>
                  {paymentMode === "Pay at Hospital" ? "Pending" : "Pending"}
                </Tag>
              </Value>
            </DetailItem>
          </AppointmentDetails>

          <ActionButtons>
            {paymentMode === "Razorpay" ? (
              <ConfirmPayButton 
                onClick={handleConfirmAndPay} 
                disabled={confirmPayLoading}
              >
                {confirmPayLoading ? (
                  <ButtonLoader text="Processing Payment..." />
                ) : (
                  `Confirm and Pay ₹${selectedDoctor?.consultation_fee}`
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

  // Main Form Step (unchanged)
  return (
    <RequestContainer>
      <Form ref={form} layout="vertical" onFinish={(values) => {
              handleAppointmentRequest(values);
              sendEnquery(values);
            }}
            form={form} >
        <Header className="text-center">Book your OPD</Header>
        <SubHeader style={{marginBottom:0}}>Book your doctor appointment in simple steps.</SubHeader>

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
                placeholder={doctorsLoading ? "Loading doctors..." : "Choose a doctor"}
                onChange={handleDoctorChange}
                loading={doctorsLoading}
                allowClear
                disabled={!selectedDepartment || doctorsLoading}
                notFoundContent={
                  doctorsLoading ? (
                    <div style={{ textAlign: 'center', padding: '10px' }}>
                      <Spin size="small" /> Loading doctors...
                    </div>
                  ) : (
                    "No doctors available for this department"
                  )
                }
              >
                {doctors
                  .filter((doctor) => Number(doctor.consultation_fee) > 0)
                  .map((doctor) => (
                    <Option key={doctor.id} value={doctor.id} style={{ fontSize: '16px' }}>
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
              rules={[{  message: "Please describe symptoms!" }]}
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
            value="Send"
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

// New styled components for payment loader
const PaymentLoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const PaymentLoaderContent = styled.div`
  text-align: center;
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid #E5E7EB;
  max-width: 400px;
  width: 90%;
`;

const PaymentLoaderTitle = styled.h2`
  color: #004AAD;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const PaymentLoaderMessage = styled.p`
  color: #6B7280;
  font-size: 1rem;
  line-height: 1.5;
`;

const LargeLoaderSpinner = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid #E5E7EB;
  border-bottom-color: #004AAD;
  border-radius: 50%;
  display: inline-block;
  animation: rotation 1s linear infinite;
  margin-bottom: 1.5rem;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// Rest of the styled components remain the same...
const SuccessStepContent = styled.div`
  justify-content: center;
  text-align: center;
  animation: fadeInUp 0.8s ease-out;
`;

const ReceiptStepContent = styled.div`
  animation: fadeInUp 0.8s ease-out;
`;

const LoadingIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  color: #004AAD;
  font-weight: 500;
`;

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

  @media (max-width: 600px){
    padding: 1rem 10px;
  }
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

  @media (max-width: 600px){
    padding:1.5rem 10px;
  }
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
  min-height: 500px;
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #E5E7EB;

  @media (max-width: 600px){
    padding: 10px;
  }
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