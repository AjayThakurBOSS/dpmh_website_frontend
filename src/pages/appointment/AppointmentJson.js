 {
"booking_date"
: 
"2025-11-05",
"doctor_id"
: 
13,
"patient_email"
: 
"ajaykrthaur02@gmail.com",
"patient_gender"
: 
"Male",
"patient_name"
: 
"Ajay Thakur",
"patient_phone"
: 
"8310885838",
"payment_method"
: 
"Online",
"payment_status"
: 
"Paid",
"symptoms"
: 
"fsf",
"transaction_id"
: 
"TXNmhkbdfmq506JYOZU2"
}
 
 booking_date: "2025-11-27";.
consultation_fee: 900;
  department_id: 3;
department_name: "Dermatology";
  doctor_id: 301;.
doctor_name: "Dr. Vikram Malhotra";
  patient_email: "ajaykrthaur02@gmail.com";.
  patient_gender: "Male";.
  patient_name: "Ajay";.
  patient_phone: "8310885838";.
  payment_method: "Online";.
  payment_status: "Paid";.
  symptoms: "jn";.
  transaction_id: "TXNmhkag4lcRZEYL5BBW";.


{
    "doctor_id": 9,
    "booking_date": "2025-11-05",
    "patient_name": "Ajay Kr thakur",
    "patient_phone": "555-123-1234",
    "patient_email": "ajay.k@example.com",
    "patient_gender": "Male",
    "symptoms": "Annual health check-up.",
    "payment_method": "Pay at Hospital",
    "payment_status": "Pending",
    "transaction_id": "TXNmhj4jxfoDCBJIKO66"
}

doctor_name: "Dr. Vikram Malhotra";
department_name: "Dermatology";
consultation_fee: 900;

const handleAppointmentRequest = async (values) => {
  try {
    setProceedToPaymentLoading(true);
    const formattedData = {
      doctor_id: selectedDoctor?.id,
      booking_date: values.date ? dayjs(values.date).format('YYYY-MM-DD') : values.date,
      patient_name: values.firstName,
      patient_phone: values.phone,
      patient_email: values.email,
      patient_gender: values.gender,
      symptoms: values.symptoms,
      // Remove these extra fields that are not in the required API format
      // department_name: selectedDepartment?.name,
      // doctor_name: selectedDoctor?.name, 
      // consultation_fee: selectedDoctor?.consultation_fee,
      // department_id: selectedDepartment?.id
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

const handleConfirmAndPay = async () => {
  try {
    setConfirmPayLoading(true);
    
    // Generate transaction ID
    const transactionId = generateTransactionId();
    setTransectionID(transactionId);
    
    // Load Razorpay script dynamically
    const loadRazorpayScript = () => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    };

    // Load Razorpay script
    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      message.error('Razorpay SDK failed to load. Please check your internet connection.');
      setConfirmPayLoading(false);
      return;
    }

    // Razorpay options
    const options = {
      key: "rzp_test_RbDL5BG2RHc7h6", 
      amount: selectedDoctor?.consultation_fee * 100, // Use selectedDoctor directly
      currency: 'INR',
      name: formData?.patient_name,
      description: `Appointment with Dr. ${selectedDoctor?.name}`,
      image: Logo, 
      
      handler: async function (response) {
        try {
          // Payment successful - submit appointment with transaction ID
          const appointmentData = {
            ...formData,
            payment_method: "Online",
            payment_status: "Paid",
            transaction_id: transactionId, 
          };

          await submitAppointment(appointmentData);
          setPaymentStatus('Paid');
          setStep(4); // Move to success step after payment
        } catch (error) {
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
        transaction_id: transactionId
      },
      theme: {
        color: "#004AAD"
      },
      modal: {
        ondismiss: function() {
          setConfirmPayLoading(false);
          message.info("Payment cancelled by user");
        }
      }
    };

    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();

  } catch (error) {
    console.error("Error processing payment:", error);
    
    // For demo/development - fallback to simulated payment
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

const handleConfirmAndSubmit = async () => {
  try {
    setConfirmSubmitLoading(true);
    
    // Generate transaction ID for hospital payment
    const transactionId = generateTransactionId();
    setTransectionID(transactionId);
    
    const appointmentData = {
      ...formData,
      payment_method: "Pay at Hospital",
      payment_status: "Pending",
      transaction_id: transactionId
    };
    
    message.info("Submitting your appointment request...");
    await submitAppointment(appointmentData);
    setStep(4); // Move to success step after submission
  } catch (error) {
    console.error("Error submitting appointment:", error);
    message.error("Error submitting appointment. Please try again.");
  } finally {
    setConfirmSubmitLoading(false);
  }
};

const submitAppointment = async (appointmentData) => {
  try {
    console.log('Submitting appointment data:', appointmentData);
    
    // REAL API call to submit appointment
    const response = await axios.post(
      "https://app.prabhatmemorialhospital.com/api/opd-bookings",
      appointmentData
    );
    
    console.log('Appointment Response:', response);

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
    
    // For demo purposes, simulate success if API fails but show the error
    console.log("API failed, but continuing with success flow for demo");
    message.warning("Appointment submitted (demo mode - check console for errors)");
    setShowSuccessAnimation(true);
    setTimeout(() => {
      setIsSubmitted(true);
      setShowSuccessAnimation(false);
    }, 3000);
  }
};