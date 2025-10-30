import React, { useState, useEffect } from 'react';
import {
  HeartPulse, BedDouble, Computer, CalendarCheck, Award, PlusCircle, ScanLine, // Section Icons (Scanner replaced by ScanLine)
  Ambulance, SquarePlus, Scissors, Headset, Syringe, Zap, Microscope, Scan, Activity, FlaskConical, // Core Medical (FirstAidKit replaced by SquarePlus)
  Hotel, Wind, Pill, Truck, Coffee, ParkingCircle, Wallet, // In-Patient Support
  FileText, MonitorPlay, AirVent, ShieldCheck, // Tech & Infra
  CalendarPlus, Stethoscope, MessageSquare, // Patient Services
  UserPlus, MessageSquareQuote, Star, Camera, Newspaper, // Trust Elements
  Plane, Apple, HandHeart, Droplet, Check
} from 'lucide-react';

// Define the structure of the facility data
const facilitiesData = [
  {
    title: "Core Medical Facilities",
    icon: HeartPulse,
    color: "text-red-500",
    items: [
      { name: "24×7 Emergency Department", icon: Ambulance },
      { name: "Intensive Care Units (ICU, NICU, PICU, SICU, CCU)", icon: SquarePlus }, // Updated Icon: SquarePlus
      { name: "Modular Operation Theatres", icon: Scissors },
      { name: "Trauma & Critical Care Unit", icon: Headset },
      { name: "Dialysis Unit", icon: Syringe },
      { name: "Cath Lab (Cardiac)", icon: Zap },
    ],
  },
  {
    title: "Diagnostic & Imaging Services",
    icon: ScanLine, // Updated Icon
    color: "text-blue-500",
    items: [
      { name: "Pathology & Laboratory Services", icon: Microscope },
      { name: "Radiology: X-ray, CT Scan, MRI, Ultrasound, Digital Mammography", icon: Scan },
      { name: "ECG, 2D Echo, TMT, Holter", icon: Activity },
      { name: "Endoscopy / Colonoscopy", icon: FlaskConical },
    ],
  },
  {
    title: "In-Patient & Support Facilities",
    icon: BedDouble,
    color: "text-green-500",
    items: [
      { name: "General Ward, Private Rooms, Deluxe Rooms, Suite Rooms", icon: Hotel },
      { name: "Centralized Oxygen System", icon: Wind },
      { name: "Pharmacy (24x7)", icon: Pill },
      { name: "Ambulance Services", icon: Truck },
      { name: "Cafeteria / Canteen", icon: Coffee },
      { name: "Waiting Lounge & Visitor Management", icon: ParkingCircle },
      { name: "Parking Facilities", icon: ParkingCircle },
      { name: "Cashless Mediclaim & TPA Support", icon: Wallet },
    ],
  },
  {
    title: "Hospital Technology & Infrastructure",
    icon: Computer,
    color: "text-indigo-500",
    items: [
      { name: "Modular OT with advanced sterilization", icon: Scissors },
      { name: "Computerized medical records (EMR)", icon: FileText },
      { name: "Telemedicine / Online Consultation", icon: MonitorPlay },
      { name: "Advanced Ventilators & Monitors", icon: AirVent },
      { name: "Infection Control & Safety Systems", icon: ShieldCheck },
      { name: "Fire & Disaster Safety Systems", icon: Zap },
    ],
  },
  {
    title: "Patient-Friendly Services",
    icon: CalendarCheck,
    color: "text-amber-500",
    items: [
      { name: "Online Appointment Booking", icon: CalendarPlus },
      { name: "Health Packages / Preventive Checkups", icon: Stethoscope },
      { name: "Insurance & TPA Desk", icon: Wallet },
      { name: "Patient Counseling Services", icon: MessageSquare },
    ],
  },
  {
    title: "Additional Trust-Building Elements",
    icon: Award,
    color: "text-purple-500",
    items: [
      { name: "Doctors’ Profiles with Qualifications", icon: UserPlus },
      { name: "Patient Testimonials & Success Stories", icon: MessageSquareQuote },
      { name: "Hospital Accreditation (NABH, ISO, etc.)", icon: Star },
      { name: "Image Gallery & Virtual Tour", icon: Camera },
      { name: "Latest News, Blogs, Health Awareness Content", icon: Newspaper },
    ],
  },
  {
    title: "Optional Value-Added Facilities",
    icon: PlusCircle,
    color: "text-teal-500",
    items: [
      { name: "International Patient Desk", icon: Plane },
      { name: "Nutrition & Diet Counseling", icon: Apple },
      { name: "Organ Transplant Facility", icon: HandHeart },
      { name: "Palliative & Pain Management Unit", icon: Droplet },
    ],
  },
];

// Component for a single facility item
const FacilityItem = ({ name, Icon, color }) => (
  <li className="flex items-start space-x-3 p-2 transition-transform duration-300 hover:translate-x-1">
    <Icon className={`w-5 h-5 flex-shrink-0 ${color}`} />
    <span className="text-gray-700 text-sm md:text-base leading-snug">{name}</span>
  </li>
);

// Component for a facilities section
const FacilitySection = ({ title, icon: SectionIcon, color, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Determine a slightly darker background color for the card
  const bgColorClass = color.replace('text', 'bg').replace('-500', '-50');
  const borderColorClass = color.replace('text', 'border').replace('-500', '-400');

  return (
    <div className={`
      relative p-6 bg-white rounded-xl shadow-lg border-t-4 transition-all duration-500
      hover:shadow-xl hover:-translate-y-1 ${borderColorClass}
      col-span-12 md:col-span-6 lg:col-span-4
    `}>
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-full ${bgColorClass}`}>
            <SectionIcon className={`w-7 h-7 ${color}`} />
          </div>
          <h2 className={`text-lg font-bold ${color}`}>{title}</h2>
        </div>
        <Check className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-90 text-gray-600' : 'rotate-0'}`} />
      </div>

      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
      >
        <ul className="space-y-1 mt-2 border-l border-gray-200 pl-4">
          {items.map((item, index) => (
            <FacilityItem 
              key={index} 
              name={item.name} 
              Icon={item.icon} 
              color={color}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

// Main App Component
const FacilitiesForHomePage = () => {

  // Function to initialize Tailwind CSS JIT (always include in single HTML/React file)
  useEffect(() => {
    if (typeof tailwind === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdn.tailwindcss.com';
      document.head.appendChild(script);
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      
      {/* Header Section */}
      <header className="text-center mb-10 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight mb-3">
          <HeartPulse className="inline-block w-8 h-8 md:w-10 md:h-10 text-cyan-600 mr-2 animate-pulse" />
          Advanced Hospital Facilities
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          A comprehensive overview of the world-class medical, diagnostic, and patient support infrastructure.
        </p>
      </header>
      
      {/* Facilities Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">
        {facilitiesData.map((section, index) => (
          <FacilitySection 
            key={index} 
            title={section.title} 
            icon={section.icon} 
            color={section.color} 
            items={section.items} 
          />
        ))}
      </div>
      

    </div>
  );
};

export default FacilitiesForHomePage;
