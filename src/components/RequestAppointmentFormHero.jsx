import React,{ useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Col, DatePicker, Form, Input, Row, Select } from "antd";
const { Option } = Select;

const { TextArea } = Input;

const RequestAppointmentFormHero = () => {
  const [form] = Form.useForm();
  const [symptom, setSymptom] = useState("");
  const [appointmentDetails, setAppointmentDetails] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAppointmentRequest = async (values) => {
    try {
      const response = await axios.post(
        "/api/v1/customer/requestAppointment",
        values
      );
      if (response.status === 201) {
        console.log("Appointment request submitted successfully!");
      } else {
        console.log("Request processed");
      }
    } catch (error) {
      console.error("Error submitting appointment request:", error);
    } finally {
      form.resetFields();
      setIsSubmitted(true);
    }
  };

  if (appointmentDetails) {
    return (
      <>
        <h1>Appointment Form Submitted Successfully.</h1>
      </>
    );
  }

  if (isSubmitted) {
    return (
      <ThankYouContainer>
        <h1>Thank You!</h1>
        <p>Your appointment request has been successfully submitted.</p>
        <p>We will contact you shortly to confirm your appointment.</p>
      </ThankYouContainer>
    );
  }

  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        form.setFieldsValue({
          note: "Hi, man!",
        });
        break;
      case "female":
        form.setFieldsValue({
          note: "Hi, lady!",
        });
        break;
      case "other":
        form.setFieldsValue({
          note: "Hi there!",
        });
        break;
      default:
    }
  };

  const onSpecialityChange = (value) => {
    switch (value) {
      case "male":
        form.setFieldsValue({
          note: "Hi, man!",
        });
        break;
      case "female":
        form.setFieldsValue({
          note: "Hi, lady!",
        });
        break;
      case "other":
        form.setFieldsValue({
          note: "Hi there!",
        });
        break;
      default:
    }
  };

  return (
    <>
      <RequestContainer>
        <Form layout="vertical" onFinish={handleAppointmentRequest} form={form}>
          <Header className="text-center red">Request Appointment</Header>
          <hr />
          <Row gutter={[16, 8]}>
            <Col xs={24} md={12}>
              <Form.Item
                label="First Name"
                name="firstName"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Your name" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                label="Contact Number"
                name="phone"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="Your Contact Number" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                label="Email"
                name="email"
                required
                rules={[{ required: true }]}
              >
                <Input type="email" placeholder="Your email" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                name="gender"
                label="Gender"
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="Select gender"
                  onChange={onGenderChange}
                  allowClear
                >
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>

              <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) =>
                  prevValues.gender !== currentValues.gender
                }
              >
                {({ getFieldValue }) =>
                  getFieldValue("gender") === "other" ? (
                    <Form.Item
                      name="customizeGender"
                      label="Customize Gender"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                  ) : null
                }
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                name="speciality"
                label="Speciality"
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="Select speciality"
                  onChange={onSpecialityChange}
                  allowClear
                >
                  <Option value="cardiology">Cardiology</Option>
                  <Option value="neurology">Neurology</Option>
                  <Option value="orthopedics">Orthopedics</Option>
                  <Option value="pediatrics">Pediatrics</Option>
                </Select>
              </Form.Item>

              <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) =>
                  prevValues.speciality !== currentValues.speciality
                }
              >
                {({ getFieldValue }) =>
                  getFieldValue("speciality") === "other" ? (
                    <Form.Item
                      name="customizeSpeciality"
                      label="Customize Speciality"
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>
                  ) : null
                }
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                label="Appointment Date"
                name="date"
                rules={[{ required: true, message: "Please select a date!" }]}
              >
                <DatePicker format="DD-MM-YYYY" style={{ width: "100%" }} />
              </Form.Item>
            </Col>

            <Col xs={24}>
              <Form.Item
                label="Symptoms in brief"
                name="symptoms"
                rules={[{ required: true, message: "Please describe your symptoms!" }]}
              >
                <TextArea
                  value={symptom}
                  onChange={(e) => setSymptom(e.target.value)}
                  placeholder="Describe your symptoms"
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />
              </Form.Item>
            </Col>
          </Row>

          <div className="submit-button-container">
            <button type="submit" className="submit-button">
              Submit Request
            </button>
          </div>
        </Form>
      </RequestContainer>
    </>
  );
};

export default RequestAppointmentFormHero;

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