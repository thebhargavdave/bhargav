export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  subEntity?: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  type: 'Executive' | 'Consulting' | 'Technical';
  summary: string;
  highlights: string[];
  technologies: string[];
  domains: ('Healthcare' | 'Education' | 'Manufacturing' | 'Corporate' | 'Construction')[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface MilestoneMetric {
  label: string;
  value: string;
  description: string;
}

export interface SiteNode {
  id: string;
  name: string;
  type: 'Hospital' | 'College' | 'Factory' | 'DataCenter' | 'SiteOffice';
  sector: string;
  systems: string[];
  responsibilities: string[];
}

export const CV_DATA = {
  personal: {
    fullName: "BHARGAV R. DAVE",
    targetRole: "SENIOR IT EXECUTIVE | ASSISTANT IT MANAGER",
    subSpecialty: "IT Infrastructure, Campus Networks & Digital Operations",
    phone: "+91 9016495560",
    primaryEmail: "bhargavd198@gmail.com",
    secondaryEmail: "bhargavd198@rediffmail.com",
    github: "https://github.com/thebhargavdave",
    githubUsername: "thebhargavdave",
    location: "Gujarat, India",
    availability: "Available for Senior IT Executive & Assistant IT Manager Roles",
    photoUrl: "/assets/aistudio/Professional_South_Asian_ID_Portrait_75ba7c78.png",
    orcid: "0009-0002-7482-1795",
    orcidUrl: "https://orcid.org/0009-0002-7482-1795",
  },
  
  summary: 
    "IT professional experienced in supporting IT operations across Goenka Group's healthcare, educational, and manufacturing environments. Skills include multi-site IT support, college and factory management systems, campus Wi-Fi and networking, website creation and maintenance, web hosting administration through cPanel and Windows IIS, basic web-based software development, software testing, database backup and monitoring, CCTV, HIMS/HRMS support, and end-user computing. Experienced in troubleshooting, preventive maintenance, asset tracking, vendor coordination, documentation, and user support. Seeking a Senior IT Executive or Assistant IT Manager role supporting reliable infrastructure and digital operations.",

  keyMetrics: [
    {
      value: "6+ Years",
      label: "IT Operations & Infrastructure",
      description: "Continuous enterprise & multi-site operational experience across sectors",
    },
    {
      value: "4+ Campuses",
      label: "Institutions & Manufacturing Sites",
      description: "Goenka Hospital, 4 Medical/Dental/Pharmacy Colleges & Agastya Nutrifood",
    },
    {
      value: "99.8%",
      label: "Network & Core Systems Uptime",
      description: "High reliability across Wi-Fi access points, fiber uplinks & servers",
    },
    {
      value: "1,200+",
      label: "Connected Endpoints & Users",
      description: "Desktops, laptops, CCTV cameras, biometric devices & network switches",
    },
  ],

  coreCompetencies: [
    "Multi-site IT Operations Across Goenka Group",
    "College & Factory Management Systems Support",
    "LAN/WAN, Campus Wi-Fi & Network Troubleshooting",
    "Website Creation, Maintenance & Content Updates",
    "cPanel Hosting & Windows IIS Website Deployment",
    "Basic Web-Based Software Development & Testing",
    "Database Backup, Monitoring & Basic Administration",
    "Windows Systems, User Accounts & Hardware Support",
    "HIMS/HRMS Application Support",
    "CCTV, DVR/NVR & PoE Infrastructure",
    "IT Asset Tracking, Vendors & Procurement Support",
    "IT Tickets, Preventive Maintenance & Documentation",
  ],

  experiences: [
    {
      id: "goenka-group",
      role: "IT Executive",
      company: "Goenka Group",
      subEntity: "Goenka Hospital, Colleges & Agastya Nutrifood Industries LLP",
      period: "March 2025 – Present",
      location: "Gandhinagar / Gujarat, India",
      isCurrent: true,
      type: "Executive",
      summary: "Directs day-to-day multi-site IT infrastructure, user support, campus network backbones, and web & system operations across Goenka Group's multi-specialty hospital, four prominent medical/pharmacy/nursing colleges, and food manufacturing facilities.",
      domains: ["Healthcare", "Education", "Manufacturing"],
      highlights: [
        "Provide day-to-day IT operations and user support across Goenka Group's hospital, educational institutions, and manufacturing/factory environment.",
        "Support college management systems and daily academic operations across Manjushree Research Institute of Ayurvedic Science, Manjushree Institute of Pharmacy, Manjushree Institute of Nursing Science, and Goenka Research Institute of Dental Science (GRIDS).",
        "Support factory IT operations at Agastya Nutrifood Industries LLP, including user systems, manufacturing management systems, network connectivity, and day-to-day technical requirements.",
        "Maintain campus Wi-Fi and network connectivity, including routers, switches, wireless access points, CAT6 cabling, and fiber uplinks; troubleshoot network performance and outages.",
        "Manage website updates and routine website administration; coordinate with developers and support website content publishing and maintenance.",
        "Create and maintain basic websites and assist with basic web-based software development, configuration, deployment, and troubleshooting.",
        "Support website hosting and deployment using cPanel and Windows IIS, along with other hosting/deployment platforms as required; assist with domain, DNS, and hosting configuration.",
        "Perform basic software testing, identify and document issues, verify fixes, and support application monitoring after updates or deployment.",
        "Perform or coordinate database backups and routine checks; monitor website/application availability and troubleshoot basic database or connectivity issues.",
        "Support desktops, laptops, printers, operating systems, user accounts, password resets, software installations, and hardware replacement across Group locations.",
        "Provide HIMS/HRMS application support and coordinate with users and vendors to resolve access and operational issues.",
        "Maintain CCTV surveillance systems and troubleshoot IP/analog cameras, PoE switches, DVR/NVR connectivity, recording, and footage backup.",
        "Maintain IT asset records, conduct periodic physical verification, track spare parts, and prepare material lists and procurement approval documentation.",
        "Coordinate with vendors, maintenance teams, and departments for IT repairs, telephone/EPABX issues, new installations, preventive maintenance, meeting/inspection technology, and laboratory setups."
      ],
      technologies: [
        "cPanel",
        "Windows IIS",
        "Campus Wi-Fi & APs",
        "CAT6 & Fiber Uplinks",
        "HIMS / HRMS",
        "College ERPs",
        "PoE Switches",
        "DVR / NVR",
        "Database Backups",
        "Windows Server & Active Directory",
        "EPABX / Intercom",
        "Software QA Testing"
      ]
    },
    {
      id: "lt-apexpert",
      role: "Assistant ISD Engineer",
      company: "L&T – Buildings & Factories",
      subEntity: "APEXPERT Consulting LLP",
      period: "Dec 2023 – Mar 2025",
      location: "Project Sites, India",
      isCurrent: false,
      type: "Consulting",
      summary: "Engineered and maintained on-site mission-critical IT infrastructure, enterprise structured cabling, telecom, and surveillance systems across Larsen & Toubro construction and engineering facilities.",
      domains: ["Construction", "Corporate"],
      highlights: [
        "Supported site IT infrastructure, CAT6 structured cabling, network switches, routers, and wireless access points.",
        "Installed and maintained CCTV cameras, IP phones, intercom systems, and related communication infrastructure.",
        "Diagnosed network, hardware, software, and peripheral issues and provided on-site technical support.",
        "Assisted with EIP (Enterprise Information Portal) access, preventive maintenance, technical documentation, and coordination of equipment installations."
      ],
      technologies: [
        "CAT6 Structured Cabling",
        "L&T EIP Portal",
        "Managed Switches",
        "IP Telephony / VoIP",
        "CCTV & NVR Systems",
        "Enterprise Wi-Fi",
        "Preventive Maintenance Protocols",
        "Site IT Asset Tracking"
      ]
    },
    {
      id: "lt-tm-services",
      role: "Assistant ISD Engineer",
      company: "L&T – Buildings & Factories",
      subEntity: "T&M Services / JRS India",
      period: "Apr 2022 – Dec 2023",
      location: "Project Operations, India",
      isCurrent: false,
      type: "Technical",
      summary: "Delivered front-line IT engineering, VLAN segmentation, hardware diagnostics, and preventive maintenance ensuring zero downtime across active L&T project locations.",
      domains: ["Construction", "Corporate"],
      highlights: [
        "Provided on-site IT support, network troubleshooting, and routine maintenance for project operations.",
        "Supported CAT6 infrastructure, VLAN configuration, connectivity testing, CCTV systems, Wi-Fi access points, printers, and intercoms.",
        "Performed system diagnostics, operating system installation, and issue resolution while maintaining equipment records."
      ],
      technologies: [
        "VLAN Configuration",
        "Network Testing Tools",
        "Hardware Diagnostics",
        "OS Deployment & Imaging",
        "Intercom & EPABX",
        "Access Points",
        "Printer & Peripheral Server Support"
      ]
    },
    {
      id: "rk-computer",
      role: "Network & Hardware Engineer",
      company: "R.K. Computer",
      period: "Feb 2020 – Mar 2022",
      location: "Gujarat, India",
      isCurrent: false,
      type: "Technical",
      summary: "Built strong foundations in enterprise hardware repair, local office network architecture, CCTV security deployments, and customer-facing technical support.",
      domains: ["Corporate"],
      highlights: [
        "Installed and maintained office networks, routers, switches, wireless devices, CCTV systems, and DVR/NVR equipment.",
        "Repaired desktops and laptops, installed operating systems, upgraded hardware, and troubleshot printers and email accounts.",
        "Provided customer support, network fault diagnosis, equipment configuration, and preventive maintenance."
      ],
      technologies: [
        "Hardware Board Repair",
        "Office Routers & Switches",
        "DVR / NVR Setup",
        "Email Client Configuration (POP3/IMAP)",
        "Windows 7/8/10/11",
        "Preventive Hardware Maintenance"
      ]
    }
  ],

  technicalSkills: [
    {
      category: "Networking & Infrastructure",
      description: "End-to-end routing, switching, Wi-Fi deployment, and physical structured cabling.",
      skills: [
        "LAN / WAN Architecture",
        "TCP / IP & Subnetting",
        "VLAN Configuration",
        "DHCP & DNS Management",
        "Enterprise Routers & Switches",
        "Campus Wi-Fi & PoE APs",
        "CAT6 Structured Cabling",
        "Fiber Uplinks & Termination",
        "Wireshark Packet Analysis"
      ]
    },
    {
      category: "Systems Administration",
      description: "Comprehensive Windows server environments, Active Directory, and client OS management.",
      skills: [
        "Windows 7, 8, 10, 11 Administration",
        "Windows Server Environments",
        "Active Directory & Domain Services",
        "Group Policy Objects (GPO)",
        "Basic Linux Server Commands",
        "OS Imaging & Deployment",
        "User Access & Privilege Control"
      ]
    },
    {
      category: "Web & Hosting Operations",
      description: "Public website management, web server hosting, domain routing, and DNS records.",
      skills: [
        "Website Creation & Maintenance",
        "cPanel Web Hosting Administration",
        "Windows IIS Website Deployment",
        "DNS, MX, SPF & DKIM Records",
        "Domain Provisioning & SSL Setup",
        "FTP / SFTP Publishing",
        "Basic HTML & CMS Maintenance"
      ]
    },
    {
      category: "Web Development & Software QA",
      description: "Frontend/backend basics, developer coordination, functional software testing and defect tracking.",
      skills: [
        "Basic Web-Based Software Creation",
        "Application Configuration & Staging",
        "Functional QA Software Testing",
        "Defect Identification & Reporting",
        "Bug Fix Verification",
        "Post-Deployment Application Monitoring"
      ]
    },
    {
      category: "Database & Service Monitoring",
      description: "Automated database backups, health verification, and uptime supervision.",
      skills: [
        "Automated Database Backups",
        "Routine Integrity Checks",
        "Basic SQL & Database Administration",
        "Website & App Availability Probing",
        "Connectivity & Latency Diagnostics"
      ]
    },
    {
      category: "Institutional & Enterprise Applications",
      description: "Vertical ERPs spanning healthcare, colleges, manufacturing, and enterprise portals.",
      skills: [
        "College Management Systems (ERP)",
        "HIMS (Hospital Information System)",
        "HRMS (Human Resource Management)",
        "Factory Operations IT Systems",
        "L&T EIP Enterprise Portal",
        "IT Ticketing & Service Desk",
        "Microsoft Office 365"
      ]
    },
    {
      category: "CCTV, Surveillance & Security",
      description: "Physical security systems, surveillance backbones, and biometric access control.",
      skills: [
        "IP & Analog Surveillance Cameras",
        "DVR & NVR Configuration",
        "PoE Network Switch Infrastructure",
        "Continuous Recording & Storage Planning",
        "Footage Archiving & Incident Retrieval",
        "Biometric Time & Access Control"
      ]
    },
    {
      category: "Email & Telecommunications",
      description: "Enterprise email ecosystems and voice communication lines.",
      skills: [
        "Google Workspace Administration",
        "Zoho Mail Setup & Routing",
        "IMAP & POP3 Client Configuration",
        "EPABX Systems Maintenance",
        "Intercom & IP Phones Setup",
        "Meeting & Video Inspection Setups"
      ]
    }
  ],

  goenkaSites: [
    {
      id: "goenka-hospital",
      name: "Goenka Multi-Specialty Hospital",
      sector: "Healthcare",
      systems: ["HIMS (Hospital Info System)", "PACS / Imaging Network", "Critical Care Wi-Fi", "IP CCTV Surveillance", "Biometric Access Control"],
      responsibilities: [
        "Ensure 24/7 high-availability network for clinical & administrative workstations",
        "Coordinate HIMS application support with medical staff and software vendors",
        "Manage uninterrupted power & PoE switch connectivity for emergency departments",
        "Conduct footage archiving, backup retention, and IP camera monitoring"
      ]
    },
    {
      id: "mrias-ayurvedic",
      name: "Manjushree Institute of Ayurvedic Science",
      sector: "Medical Higher Education",
      systems: ["College Management ERP", "Academic Wi-Fi Backbone", "Computer Lab Infrastructure", "Faculty Workstations"],
      responsibilities: [
        "Manage academic ERP, student records, and exam hall IT readiness",
        "Maintain high-density campus Wi-Fi access points across lecture halls",
        "Provide prompt hardware troubleshooting for faculty and administrative desks"
      ]
    },
    {
      id: "mip-pharmacy",
      name: "Manjushree Institute of Pharmacy",
      sector: "Pharmaceutical Education",
      systems: ["Institutional ERP", "Digital Library & Research Wi-Fi", "Biometric Attendance", "Lab Network Setup"],
      responsibilities: [
        "Administer research computer lab networks and digital library terminals",
        "Maintain periodic asset verification and preventive hardware servicing",
        "Coordinate university inspection IT presentations and audio-visual setups"
      ]
    },
    {
      id: "mins-nursing",
      name: "Manjushree Institute of Nursing Science",
      sector: "Nursing Education",
      systems: ["Academic Management System", "Campus Connectivity", "Printer & Peripheral Cluster"],
      responsibilities: [
        "Support daily administrative operations and staff computing systems",
        "Configure network printers, scanner hubs, and email accounts",
        "Handle user credential onboarding and system permission updates"
      ]
    },
    {
      id: "grids-dental",
      name: "Goenka Research Institute of Dental Science (GRIDS)",
      sector: "Dental Clinical & Academic",
      systems: ["Dental Clinic Management System", "Chairside Workstations", "Campus LAN/WAN", "CCTV Monitoring"],
      responsibilities: [
        "Provide seamless connectivity for clinical dental OPDs and student clinics",
        "Oversee regular database backups and system availability checks",
        "Troubleshoot network drops and ensure swift ticket resolution"
      ]
    },
    {
      id: "agastya-nutrifood",
      name: "Agastya Nutrifood Industries LLP",
      sector: "Food Manufacturing & Industrial",
      systems: ["Factory IT Network", "Industrial Management System", "Plant Floor CCTV", "Weighbridge / Dispatch Connectivity"],
      responsibilities: [
        "Support manufacturing management systems and shop-floor user workstations",
        "Maintain ruggedized network links between admin building and processing lines",
        "Oversee material lists, spare part stocks, and IT procurement documentation"
      ]
    }
  ],

  education: [
    {
      degree: "Diploma in Computer Engineering",
      institution: "Shree Swaminarayan Polytechnic",
      affiliation: "Gujarat Technological University (GTU)",
      year: "2021",
      location: "Gujarat, India",
      highlights: "Core coursework in Computer Networks, Operating Systems, Database Management Systems, Software Engineering, and Hardware Maintenance."
    },
    {
      degree: "10th Standard (SSC)",
      institution: "Shree H. B. Vidyalaya",
      affiliation: "Gujarat Secondary and Higher Secondary Education Board (GSEB)",
      year: "2018",
      location: "Falu, Gujarat, India",
      highlights: "Solid foundational education in Mathematics, Science, and Technical Basics."
    }
  ],

  strengths: [
    {
      title: "Cross-Department Coordination",
      description: "Adept at liaising smoothly between doctors, college principals, factory plant heads, and corporate executives to deliver rapid IT solutions."
    },
    {
      title: "Analytical Troubleshooting",
      description: "Systematic root-cause problem identification across complex network topologies, server environments, and database linkages."
    },
    {
      title: "Vendor & Procurement Control",
      description: "Skilled in vendor negotiations, RFP/quote evaluation, hardware procurement documentation, and warranty lifecycle tracking."
    },
    {
      title: "Preventive Maintenance & Continuity",
      description: "Proactive inspection schedules, scheduled database backups, and hardware health checks to prevent costly operational downtime."
    },
    {
      title: "IT Asset Tracking & Documentation",
      description: "Meticulous logging of serialized assets, spares inventories, network maps, and standard operating procedures (SOPs)."
    },
    {
      title: "Adaptability to Modern Technologies",
      description: "Quickly masters new web technologies, ERP platforms, hosting panels (cPanel/IIS), and infrastructure management tools."
    }
  ],

  devPortfolio: {
    githubUrl: "https://github.com/thebhargavdave",
    username: "thebhargavdave",
    note: "Public repositories and software development projects. Project details, system architecture, and technologies can be presented and discussed during technical interviews.",
    featuredWork: [
      {
        title: "Enterprise Web Portals & CMS Maintenance",
        tech: ["cPanel", "Windows IIS", "HTML5", "CSS", "DNS Routing"],
        description: "Developed and managed institutional web presences, coordinating staging deployments, SSL certificate installations, and high-availability DNS routing across multiple institutional domains."
      },
      {
        title: "Automated Backup & Availability Verification Scripts",
        tech: ["Shell / Batch Scripts", "Database Backup", "SQL", "Monitoring"],
        description: "Implemented automated routine database dumping, off-site storage rotation, and periodic server availability ping mechanisms to prevent silent data loss."
      },
      {
        title: "Web-Based Internal Tools & Functional Testing",
        tech: ["Web Development", "QA Testing", "Issue Tracking", "Regression Testing"],
        description: "Built lightweight web utility interfaces for internal operational tracking and conducted rigorous end-to-end user acceptance testing prior to production releases."
      }
    ]
  }
};
