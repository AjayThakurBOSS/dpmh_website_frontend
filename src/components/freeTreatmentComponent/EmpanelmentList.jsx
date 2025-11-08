
import React from 'react';
import styled from 'styled-components';
import Fhpl from '../../assets/FAMILY-HEALTH-PLAN-TPA-LTD.-FHPLTPA-4.webp'
import Icici from '../../assets/ICICI-LOMBARD-GENERAL-INSURANCE-CO.LTD_-4.webp'
import Niva from '../../assets/NIVA-BUPA-HEALTH-INSURANCE-CO.LTD_-4.webp'
import Ericson from '../../assets/ERICSON-INSURANCETPA-PVT.LTD_-4.webp'
import Star from '../../assets/STAR-HEALTH-AND-ALLIED-INSURANCE-CO.LTD_-4.webp'
import Sbi from '../../assets/SBI-GENERAL-INSURANCE-CO.LTD_-4.webp'
import Hdfc from '../../assets/tpa/ercp.png'
import Chola from '../../assets/tpa/Chola.jfif'
import Manipal from '../../assets/tpa/Manipal.png'
import Future from '../../assets/tpa/future.avif'
import Care from '../../assets/tpa/download.png'
import Bajaj from '../../assets/tpa/bajaj.avif'
import Health from '../../assets/tpa/Health.png'
import Reliance from '../../assets/tpa/reliance.png'
import Digit from '../../assets/tpa/digit.webp'
import Volvo from '../../assets/tpa/volvo.png'
import HealthIndia from '../../assets/tpa/HealthIndia.png'
import Safeway from '../../assets/tpa/safeway.jpg'
import Vipul from '../../assets/tpa/vipul.jpg'
import MediAssist from '../../assets/tpa/medi.png'
import Mdindia from '../../assets/tpa/mdIndia.png'
import Paramount from '../../assets/tpa/paramount.jfif'
import Raksha from '../../assets/tpa/raksha.avif'
import Genis from '../../assets/tpa/genins.png'
import Heritage from '../../assets/tpa/heritage.png'
import Good from '../../assets/tpa/good.jpg'
import Medserve from '../../assets/tpa/medserve.png'
import Alankit from '../../assets/tpa/alankit.jpg'
import Anmol from '../../assets/tpa/anmol_logo.png'

import Nit from '../../assets/tpa/nit.png'
import Nift from '../../assets/tpa/NIFT_Logo.svg.png'
import Bsnl from '../../assets/tpa/bsnl.jpg'
import Icar from '../../assets/tpa/icar.jfif'
import Sudha from '../../assets/tpa/sudha.webp'
import Pnb from '../../assets/tpa/pnb.jpg'
import Hpcl from '../../assets/tpa/hpcl.webp'
import Inland from '../../assets/tpa/waterway.jfif'
import Cghs from '../../assets/tpa/CGHS-scheme.png'
import Cwc from '../../assets/tpa/central-warehouse.png'
import Niper from '../../assets/tpa/niper.jpg'
import Bpcl from '../../assets/tpa/bharat-petroleum-corporation-ltd-bangalore-tg9yahyksx.avif'
import Airport from '../../assets/tpa/AAi.jfif'

const EmpanelmentList = () => {
    const TPA_INSURANCE_LIST = [
  { name: "Family Health Plan TPA Ltd. (FHPLTPA)", logo: Fhpl, type: "TPA" },
  { name: "ICICI Lombard General Insurance Co. Ltd.", logo: Icici, type: "Insurance" },
  { name: "Niva Bupa Health Insurance Co. Ltd.", logo: Niva, type: "Insurance" },
  { name: "Ericson Insurance TPA Pvt. Ltd.", logo: Ericson, type: "TPA" },
  { name: "Star Health and Allied Insurance Co. Ltd.", logo: Star, type: "Insurance" },
  { name: "SBI General Insurance Co. Ltd.", logo: Sbi, type: "Insurance" },
  { name: "HDFC ERGO General Insurance Co. Ltd.", logo: Hdfc, type: "Insurance" },
  { name: "Chola MS General Insurance", logo: Chola, type: "Insurance" },
  { name: "Manipal Cigna Health Insurance", logo: Manipal, type: "Insurance" },
  { name: "Future Generali India Insurance Company Limited", logo: Future, type: "Insurance" },
  { name: "Care Health Insurance Co.", logo: Care, type: "Insurance" },
  { name: "Bajaj Allianz General Insurance Co.", logo: Bajaj, type: "Insurance" },
  { name: "Health Insurance TPA of India Ltd. (HITPA)", logo: Health, type: "TPA" },
  { name: "Reliance General Insurance Co.", logo: Reliance, type: "Insurance" },
  { name: "Go Digit General Insurance Co.", logo: Digit, type: "Insurance" },
  { name: "Volo Health Insurance TPA", logo: Volvo, type: "TPA" },
  { name: "Health India TPA", logo: HealthIndia, type: "TPA" },
  { name: "Safeway Insurance TPA Pvt. Ltd.", logo: Safeway, type: "TPA" },
  { name: "Vipul / Vidal Health Insurance TPA Pvt. Ltd.", logo: Vipul, type: "TPA" },
  { name: "Medi Assist Insurance TPA Pvt. Ltd.", logo: MediAssist, type: "TPA" },
  { name: "MD India Health Insurance TPA Pvt. Ltd.", logo: Mdindia, type: "TPA" },
  { name: "Paramount TPA", logo: Paramount, type: "TPA" },
  { name: "Raksha TPA", logo: Raksha, type: "TPA" },
  { name: "Genins India Insurance TPA Ltd.", logo: Genis, type: "TPA" },
  { name: "Heritage Health Insurance TPA Pvt. Ltd.", logo: Heritage, type: "TPA" },
  { name: "Good Health Insurance TPA Ltd.", logo: Good, type: "TPA" },
  { name: "Medsave India TPA Ltd.", logo: Medserve, type: "TPA" },
  { name: "Alankit TPA", logo: Alankit, type: "TPA" },
  { name: "Anmol Medicare Insurance TPA Ltd.", logo: Anmol , type: "TPA" },
];

const PSU_CORPORATE_LIST = [
  { name: "NIT (National Institutes of Technology)", logo: Nit },
  { name: "NIFT (National Institute of Fashion Technology)", logo: Nift },
  { name: "BSNL (Bharat Sanchar Nigam Limited)", logo: Bsnl },
  { name: "ICAR (Indian Council of Agricultural Research)", logo: Icar },
  { name: "Bihar State Milk Co-Operative Federation (Sudha)", logo: Sudha },
  { name: "Punjab National Bank", logo: Pnb },
  { name: "HPCL (Hindustan Petroleum Corporation Limited)", logo: Hpcl },
  { name: "Inland Waterways Authority of India", logo: Inland },
  { name: "CGHS (Central Government Health Scheme)", logo: Cghs },
  { name: "CWC (Central Warehousing Corporation)", logo: Cwc },
  { name: "NIPER (National Institute of Pharmaceutical Education and Research)", logo: Niper },
  { name: "BPCL (Bharat Petroleum Corporation Limited)", logo: Bpcl },
  { name: "Airport Authority of India", logo: Airport },
];

  return (
    <Wrapper>
      {/* TPA / INSURANCE EMPANELLED LIST */}
      <SectionContainer>
        <SectionTitle>
          TPA / INSURANCE EMPANELLED LIST
        </SectionTitle>
        <GridContainer>
          {TPA_INSURANCE_LIST.map((entity, index) => (
            <GridItem key={index}>
              {/* Logo element. Use 'alt' for accessibility. */}
              <Logo 
                src={entity.logo} 
                alt={`${entity.name} Logo`}
              />
              <NameText>{entity.name}</NameText>
            </GridItem>
          ))}
        </GridContainer>
      </SectionContainer>
      
      {/* Horizontal Rule for visual separation */}
      <hr />

      {/* PSU / CORPORATE EMPANELLED LIST */}
      <SectionContainer>
        <SectionTitle>
          PSU / CORPORATE EMPANELLED LIST
        </SectionTitle>
        <GridContainer>
          {PSU_CORPORATE_LIST.map((entity, index) => (
            <GridItem key={index} isPSU>
              {/* Logo element. Use 'alt' for accessibility. */}
              <Logo 
                src={entity.logo} 
                alt={`${entity.name} Logo`}
              />
              <NameText>{entity.name}</NameText>
            </GridItem>
          ))}
        </GridContainer>
      </SectionContainer>
    </Wrapper>
  );
};

export default EmpanelmentList;


// --- Main Containers ---
 const Wrapper = styled.div`
  max-width: 1400px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: Arial, sans-serif;
`;

 const SectionContainer = styled.section`
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
`;

 const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  color: #004AAD;
  border-bottom: 3px solid #007bff;
  padding-bottom: 10px;
  margin-top: 0;
  margin-bottom: 20px;
  font-weight:700;
  
  &::before {
    content: "✅";
    margin-right: 10px;
    font-size: 1.2em;
  }
`;

// --- Grid and Item Styling ---
 const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

 const GridItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border: 1px solid #ddd;
  border: 2px solid ${props => props.isPSU ? '#004AAD' : '#004AAD'};
  border-radius: 4px;
  background-color: #f9f9f9;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

// --- Logo and Text Styling ---
 const Logo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-right: 15px;
  border-radius: 4px;
  /* Simple placeholder style in case the logo is missing */
  background-color: #004AAD; 
  padding: 2px;
`;

 const NameText = styled.span`
  font-size: 1em;
  font-weight: 600;
  color: #444;
  line-height: 1.3;
`;