

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 50px 12%;
  background: #f8fafc;
  color: #1e293b;
  font-family: "Arial", sans-serif;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #004aad;
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  margin-top: 30px;
  font-weight: 600;
`;

const Paragraph = styled.p`
  line-height: 1.7;
  font-size: 16px;
  margin-bottom: 10px;
`;

const List = styled.ul`
  margin-left: 20px;
  margin-top: 5px;
  font-size: 16px;
  line-height: 1.6;
`;

const ListItem = styled.li`
  margin-bottom: 6px;
`;

const ContactBox = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: #e6f0ff;
  border-left: 4px solid #004aad;
`;

const PrivacyPolicy = () => {
  return (
    <Container>
      <Title>Privacy Policy</Title>

      <Paragraph>
        Dr. Prabhat Memorial Hiramati Hospital ("Hospital", "we", "our", or
        "us") respects the privacy of its patients and website visitors. This
        Privacy Policy explains how we collect, use, disclose, and protect your
        personal information when you visit our website or use our services.
      </Paragraph>

      <SectionTitle>1. Information We Collect</SectionTitle>
      <Paragraph>We may collect the following types of information:</Paragraph>

      <List>
        <ListItem>
          <strong>Personal Information:</strong> Name, contact details (phone
          number, email), age, gender, and address.
        </ListItem>
        <ListItem>
          <strong>Medical Information:</strong> Health records, prescriptions,
          test results, and other healthcare-related data.
        </ListItem>
        <ListItem>
          <strong>Billing Information:</strong> Payment details and insurance
          information.
        </ListItem>
        <ListItem>
          <strong>Technical Information:</strong> IP address, browser type,
          device details, and cookies when you access our website.
        </ListItem>
      </List>

      <SectionTitle>2. How We Use Your Information</SectionTitle>
      <Paragraph>We use your information for the following purposes:</Paragraph>

      <List>
        <ListItem>
          To provide medical consultation, diagnosis, and treatment.
        </ListItem>
        <ListItem>To process billing and insurance claims.</ListItem>
        <ListItem>To schedule and manage appointments.</ListItem>
        <ListItem>To improve our website and services.</ListItem>
        <ListItem>
          To comply with legal and regulatory obligations.
        </ListItem>
        <ListItem>
          To communicate with you about health updates, appointment reminders,
          and hospital services.
        </ListItem>
      </List>

      <SectionTitle>3. Information Sharing and Disclosure</SectionTitle>
      <Paragraph>
        We do not sell or rent your personal information. However, we may share
        your data with:
      </Paragraph>

      <List>
        <ListItem>
          <strong>Healthcare Providers:</strong> For medical treatment and
          consultation purposes.
        </ListItem>
        <ListItem>
          <strong>Insurance Companies:</strong> To process claims and
          reimbursements.
        </ListItem>
        <ListItem>
          <strong>Government Authorities:</strong> When required by law for
          public health and safety reasons.
        </ListItem>
        <ListItem>
          <strong>Third-Party Service Providers:</strong> For website
          management, payment processing, and data analytics.
        </ListItem>
      </List>

      <SectionTitle>4. Data Security</SectionTitle>
      <Paragraph>
        We implement appropriate security measures to protect your data from
        unauthorized access, alteration, disclosure, or destruction.
      </Paragraph>
      <Paragraph>
        However, no online transmission is completely secure, and we advise
        users to exercise caution when sharing personal details online.
      </Paragraph>

      <SectionTitle>5. Your Rights</SectionTitle>
      <Paragraph>As a patient or website visitor, you have the right to:</Paragraph>

      <List>
        <ListItem>Access your personal and medical records.</ListItem>
        <ListItem>Request corrections to inaccurate or incomplete data.</ListItem>
        <ListItem>Withdraw consent for marketing communications.</ListItem>
        <ListItem>
          Request the deletion of your information, subject to legal
          requirements.
        </ListItem>
      </List>

      <SectionTitle>6. Cookies and Tracking Technologies</SectionTitle>
      <Paragraph>
        Our website may use cookies to enhance user experience, track website
        performance, and analyze visitor behavior. You can modify your browser
        settings to disable cookies.
      </Paragraph>

      <SectionTitle>7. Third-Party Links</SectionTitle>
      <Paragraph>
        Our website may contain links to third-party websites. We are not
        responsible for their privacy practices and encourage users to review
        their privacy policies before sharing information.
      </Paragraph>

      <SectionTitle>8. Updates to Privacy Policy</SectionTitle>
      <Paragraph>
        We may update this policy from time to time. Any changes will be posted
        on our website with an updated revision date.
      </Paragraph>

      <SectionTitle>9. Contact Us</SectionTitle>
      <Paragraph>
        For any questions or concerns regarding this Privacy Policy, please
        contact us at:
      </Paragraph>

      <ContactBox>
        <strong>Dr. Prabhat Memorial Hiramati Hospital</strong> <br />
        Address: 107B, PDS No-106, Road No. 2, near Dinkar Golambar, Rajendra
        Nagar, Patna, Bihar 800016 <br />
        Phone: 8406005555 <br />
        Website: https://prabhatmemorialhospital.com/
      </ContactBox>
    </Container>
  );
};

export default PrivacyPolicy;
