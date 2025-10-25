import React, { useRef, useEffect, useState } from 'react';
import { 
  HeartPulse, Ambulance, Target, Baby, Bone, Pill, Brain, 
  Stethoscope, Skull, Radiation, Syringe, Scissors, Telescope, 
  Droplet, AirVent, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Data for all medical departments
const departments = [
  { 
    name: "Cardiology", 
    icon: HeartPulse, 
    description: "Experts in heart and vascular disorders. We use advanced diagnostics for hypertension, coronary disease, and heart failure.",
    gradient: "from-red-500 to-pink-500",
    link: "/cardiology"
  },
  { 
    name: "Emergency", 
    icon: Ambulance, 
    description: "24/7 critical care for sudden illnesses and injuries. Staffed by trauma specialists with life-saving technology.",
    gradient: "from-orange-500 to-red-500",
    link: "/emergency"
  },
  { 
    name: "Nephrology", 
    icon: Target, 
    description: "Specialized care for kidney diseases, including chronic failure, dialysis, and electrolyte management.",
    gradient: "from-green-500 to-teal-500",
    link: "/nephrology"
  },
  { 
    name: "Gynecology & Obstetrics", 
    icon: Baby, 
    description: "Comprehensive women's health for reproductive care, pregnancy, and childbirth with routine screenings.",
    gradient: "from-pink-500 to-purple-500",
    link: "/gynae-obs"
  },
  { 
    name: "Orthopedics", 
    icon: Bone, 
    description: "Treatment for bones, joints, and muscle injuries. We restore mobility through advanced surgical techniques.",
    gradient: "from-gray-600 to-blue-400",
    link: "/orthopedics"
  },
  { 
    name: "Gastroenterology", 
    icon: Pill, 
    description: "Focusing on the digestive tract with services including endoscopy and colonoscopy for digestive disorders.",
    gradient: "from-yellow-500 to-orange-500",
    link: "/gastroenterology"
  },
  { 
    name: "Neurology", 
    icon: Brain, 
    description: "Diagnosis and treatment of nervous system disorders using advanced imaging for optimal recovery.",
    gradient: "from-purple-500 to-indigo-500",
    link: "/neurology"
  },
  { 
    name: "Paediatrics", 
    icon: Stethoscope, 
    description: "Specialized medical care for children and adolescents with preventive health and vaccinations.",
    gradient: "from-cyan-500 to-blue-500",
    link: "/paediatrics"
  },
  { 
    name: "Neuro-surgery", 
    icon: Skull, 
    description: "Surgical intervention for brain tumors and spinal injuries using micro-surgical precision techniques.",
    gradient: "from-indigo-500 to-purple-600",
    link: "/neurosurgery"
  },
  { 
    name: "Oncology & Chemotherapy", 
    icon: Radiation, 
    description: "Multidisciplinary cancer treatment with chemotherapy, radiation, and personalized care approaches.",
    gradient: "from-green-600 to-emerald-500",
    link: "/oncology"
  },
  { 
    name: "General Medicine", 
    icon: Syringe, 
    description: "Primary care for adults, diagnosing and treating a broad range of common and complex conditions.",
    gradient: "from-blue-500 to-cyan-500",
    link: "/general-medicine"
  },
  { 
    name: "General Surgery", 
    icon: Scissors, 
    description: "Broad surgical expertise for abdominal procedures with commitment to patient safety and recovery.",
    gradient: "from-slate-600 to-gray-500",
    link: "/general-surgery"
  },
  { 
    name: "Laproscopic Surgery", 
    icon: Telescope, 
    description: "Minimally invasive keyhole surgery techniques that reduce recovery time and post-operative pain.",
    gradient: "from-teal-500 to-green-500",
    link: "/laproscopic-surgery"
  },
  { 
    name: "Urology", 
    icon: Droplet, 
    description: "Care for urinary tracts and reproductive system with minimally invasive treatment options.",
    gradient: "from-blue-600 to-indigo-500",
    link: "/urology"
  },
  { 
    name: "Pulmonology", 
    icon: AirVent, 
    description: "Focus on respiratory health, treating asthma and COPD with advanced diagnostic tools.",
    gradient: "from-sky-500 to-blue-400",
    link: "/pulmonology"
  },
];

/**
 * Enhanced Department Card Component
 */
const DepartmentCard = ({ department, index }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(cardRef.current);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const IconComponent = department.icon;

  return (
    <div 
      ref={cardRef} 
      className={`
        relative p-3 bg-white rounded-2xl 
        shadow-lg shadow-gray-200/60 
        transition-all duration-500 ease-out 
        cursor-pointer group
        border border-gray-100
        hover:shadow-2xl hover:shadow-blue-500/20 
        hover:scale-[1.02] hover:-translate-y-2
        overflow-hidden border-solid
       
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{ transitionDelay: `${index * 0.05}s`, border:'1px solid #ff00ee' }}
    >
      {/* Gradient Background Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${department.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      
      {/* Animated Border Effect */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${department.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
        <div className="absolute inset-[2px] rounded-2xl bg-white"></div>
      </div>

      <div className="relative z-10 ">
        {/* Icon with Gradient Background */}
        <div className={`relative mb-6 p-3 w-16 h-16 rounded-2xl bg-gradient-to-r ${department.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
          <IconComponent size={32} className="drop-shadow-sm" />
        </div>

        {/* Heading */}
        <h3 className="mb-4 text-xl font-bold text-gray-900 leading-tight font-sans">
          {department.name}
        </h3>

        {/* Description */}
        <p className="mb-2 text-sm text-gray-600 leading-relaxed">
          {department.description}
        </p>

        {/* Action Button */}
        <Link 
          to={department.link}
          className={`
            flex items-center font-semibold text-sm
            transition-all duration-300 
            group-hover:translate-x-1
            bg-gradient-to-r ${department.gradient} bg-clip-text text-transparent
            hover:scale-105
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg
          `}
        >
          Explore Department
          <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

/**
 * Enhanced Main Application Component
 */
const CenterofExcellance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 p-4 sm:p-8 ">
      <div className="max-w-7xl mx-auto">
        
        {/* Enhanced Header Section */}
        <header className="text-center mb-16 py-12">
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-6xl font-black text-gray-900 mb-4 leading-tight">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Center of Excellance</span>
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          </div>
          <p className="text-xl  text-gray-600 max-w-3xl mx-auto mt-8 leading-relaxed md:text-sm">
            Discover our specialized centers of excellence, where world-class medical expertise 
            meets cutting-edge technology for your comprehensive healthcare needs.
          </p>
        </header>

        {/* Enhanced Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {departments.map((dept, index) => (
            <DepartmentCard key={index} department={dept} index={index} />
          ))}
        </div>
        
        {/* Call to Action Footer */}
        <footer className="text-center mt-5 py-6">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-gray-600 mb-2">
              Our patient care coordinators are here to help you find the right specialist.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Contact Our Team
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CenterofExcellance;
