import building from "../src/assets/building.svg";
import construction from "../src/assets/construction.svg";
import design from "../src/assets/design.svg";
import document from "../src/assets/document.svg";
import paint from "../src/assets/paint.svg";
import support from "../src/assets/support.svg";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

// Updated services for ASHOM Company - Two Divisions
export const allservices = [
  // ASHOM Construction Division Services (First 3)
  {
    icon: building,
    title: "Building Construction",
    about:
      "Comprehensive residential and commercial building construction services with modern techniques and quality craftsmanship for lasting results.",
    category: "construction"
  },
  {
    icon: design,
    title: "Design & Planning",
    about:
      "Professional architectural design and project planning services to create efficient, innovative, and aesthetically pleasing spaces.",
    category: "construction"
  },
  {
    icon: paint,
    title: "Interior Design",
    about:
      "Creative interior design and renovation services to transform spaces with comfort, functionality, and visual appeal.",
    category: "construction"
  },
  
  // ASHOM Specialized Division Services (Last 3)
  {
    icon: construction,
    title: "Piling Solutions",
    about:
      "Advanced piling techniques and deep foundation solutions for complex construction projects requiring specialized structural support.",
    category: "specialized"
  },
  {
    icon: support,
    title: "Foundation & Shoring",
    about:
      "Expert foundation engineering and advanced shoring systems for excavation support and structural stability in challenging conditions.",
    category: "specialized"
  },
  {
    icon: document,
    title: "Project Management",
    about:
      "Comprehensive project documentation, quality control, and management services for both construction and specialized infrastructure projects.",
    category: "both"
  },
];

export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "Planning",
    about:
      "Detailed research and strategizing to establish project goals, requirements, and timelines for successful construction and infrastructure outcomes.",
  },
  {
    icon: MdOutlineDesignServices,
    title: "Design",
    about:
      "Creating comprehensive designs, blueprints, and technical specifications for both building construction and specialized infrastructure projects.",
  },
  {
    icon: FaRegBuilding,
    title: "Building",
    about:
      "Expert execution of construction and infrastructure projects using modern techniques, quality materials, and skilled craftsmanship.",
  },
  {
    icon: FaSitemap,
    title: "Completion",
    about:
      "Thorough testing, quality control, and final delivery ensuring all projects meet specifications and safety standards across both divisions.",
  },
];

// Service categories for ASHOM Company
export const constructionServices = [
  "Residential Building",
  "Commercial Construction", 
  "Interior Design",
  "Renovation & Remodeling",
  "Architectural Planning",
  "Project Management"
];

export const specializedServices = [
  "Piling Solutions",
  "Foundation Engineering", 
  "Shoring Systems",
  "Deep Excavation Support",
  "Structural Stability",
  "Infrastructure Development"
];