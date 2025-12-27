export interface BundleTool {
  name: string;
  description: string;
  icon: string;
}

export interface Bundle {
  id: string;
  name: string;
  slug: string;
  segment: string;
  icon: string;
  description: string;
  color: string;
  tools: BundleTool[];
  dataAllocation: string;
  price: number;
  monthlyPrice: number;
  features: string[];
}

export const bundles: Bundle[] = [
  {
    id: "1",
    name: "Business Essentials Bundle",
    slug: "business-essentials",
    segment: "Business",
    icon: "💼",
    description: "Everything your business needs to thrive in the digital age. Connect, collaborate, and manage finances seamlessly.",
    color: "from-blue-500 to-blue-700",
    tools: [
      { name: "Zoom Pro", description: "Video conferencing for teams", icon: "📹" },
      { name: "Google Workspace", description: "Cloud storage & collaboration", icon: "☁️" },
      { name: "QuickBooks", description: "Accounting & invoicing tools", icon: "📊" },
      { name: "Slack", description: "Team communication", icon: "💬" },
    ],
    dataAllocation: "10GB MTN Data",
    price: 150,
    monthlyPrice: 150,
    features: ["Priority Support", "Unlimited Meetings", "50GB Cloud Storage", "Team Collaboration"],
  },
  {
    id: "2",
    name: "Student Power Bundle",
    slug: "student-power",
    segment: "Education",
    icon: "📚",
    description: "Empower your education with premium e-learning platforms and research tools. Study smarter, not harder.",
    color: "from-green-500 to-green-700",
    tools: [
      { name: "Coursera Premium", description: "Access to top university courses", icon: "🎓" },
      { name: "Grammarly Pro", description: "Writing assistance", icon: "✍️" },
      { name: "Notion", description: "Notes & organization", icon: "📝" },
      { name: "Mendeley", description: "Research management", icon: "🔬" },
    ],
    dataAllocation: "8GB MTN Data",
    price: 80,
    monthlyPrice: 80,
    features: ["Unlimited Courses", "AI Writing Assistant", "Reference Manager", "Offline Access"],
  },
  {
    id: "3",
    name: "Creator Pro Bundle",
    slug: "creator-pro",
    segment: "Content Creators",
    icon: "🎬",
    description: "Create, edit, and schedule your content like a pro. Everything content creators need to build their brand.",
    color: "from-purple-500 to-purple-700",
    tools: [
      { name: "Canva Pro", description: "Graphic design platform", icon: "🎨" },
      { name: "Adobe Creative Cloud", description: "Professional editing suite", icon: "🖌️" },
      { name: "Buffer", description: "Social media scheduler", icon: "📅" },
      { name: "Epidemic Sound", description: "Royalty-free music", icon: "🎵" },
    ],
    dataAllocation: "15GB MTN Data",
    price: 200,
    monthlyPrice: 200,
    features: ["4K Video Editing", "Unlimited Designs", "Multi-platform Scheduling", "Stock Media Library"],
  },
  {
    id: "4",
    name: "Health-Connect Bundle",
    slug: "health-connect",
    segment: "Healthcare",
    icon: "🏥",
    description: "Modern healthcare delivery tools for medical professionals. Telemedicine, records, and patient management.",
    color: "from-red-500 to-red-700",
    tools: [
      { name: "Teladoc", description: "Telemedicine platform", icon: "👨‍⚕️" },
      { name: "Epic MyChart", description: "Electronic health records", icon: "📋" },
      { name: "Medscape", description: "Medical reference app", icon: "💊" },
      { name: "Doximity", description: "Healthcare networking", icon: "🩺" },
    ],
    dataAllocation: "12GB MTN Data",
    price: 250,
    monthlyPrice: 250,
    features: ["HIPAA Compliant", "Secure Video Calls", "E-Prescriptions", "Patient Portal"],
  },
  {
    id: "5",
    name: "Logistics-Pro Bundle",
    slug: "logistics-pro",
    segment: "Logistics & E-commerce",
    icon: "🚚",
    description: "Streamline your delivery operations with tracking, inventory, and POS solutions for modern commerce.",
    color: "from-orange-500 to-orange-700",
    tools: [
      { name: "Track24", description: "Delivery tracking system", icon: "📍" },
      { name: "Square POS", description: "Point of sale solution", icon: "💳" },
      { name: "Shopify", description: "E-commerce platform", icon: "🛒" },
      { name: "Route", description: "Delivery optimization", icon: "🗺️" },
    ],
    dataAllocation: "10GB MTN Data",
    price: 180,
    monthlyPrice: 180,
    features: ["Real-time Tracking", "Inventory Management", "Multiple Payment Options", "Analytics Dashboard"],
  },
  {
    id: "6",
    name: "Agri-Tech Bundle",
    slug: "agri-tech",
    segment: "Agriculture",
    icon: "🌾",
    description: "Smart farming solutions for modern agriculture. Monitor, manage, and maximize your agricultural output.",
    color: "from-lime-500 to-lime-700",
    tools: [
      { name: "FarmLogs", description: "Farm management software", icon: "🚜" },
      { name: "Climate FieldView", description: "Crop monitoring", icon: "🌱" },
      { name: "Agrivi", description: "Agricultural analytics", icon: "📈" },
      { name: "CropIn", description: "Mobile farming assistant", icon: "📱" },
    ],
    dataAllocation: "6GB MTN Data",
    price: 100,
    monthlyPrice: 100,
    features: ["Weather Alerts", "Crop Health Monitoring", "Market Prices", "Yield Predictions"],
  },
  {
    id: "7",
    name: "Hospitality Hub Bundle",
    slug: "hospitality-hub",
    segment: "Hospitality & Tourism",
    icon: "🏨",
    description: "Complete hospitality management suite. From bookings to customer relationships, run your property smoothly.",
    color: "from-cyan-500 to-cyan-700",
    tools: [
      { name: "Booking.com Extranet", description: "Reservation management", icon: "🛎️" },
      { name: "RoomRaccoon", description: "Property management", icon: "🏠" },
      { name: "HubSpot CRM", description: "Customer relationship management", icon: "👥" },
      { name: "TripAdvisor Business", description: "Review management", icon: "⭐" },
    ],
    dataAllocation: "10GB MTN Data",
    price: 175,
    monthlyPrice: 175,
    features: ["Channel Manager", "Guest Communications", "Review Analytics", "Revenue Management"],
  },
  {
    id: "8",
    name: "Fin-Pro Bundle",
    slug: "fin-pro",
    segment: "Financial Services",
    icon: "💰",
    description: "Professional financial tools for advisors and institutions. Dashboards, analytics, and management apps.",
    color: "from-emerald-500 to-emerald-700",
    tools: [
      { name: "Bloomberg Terminal", description: "Financial data platform", icon: "📊" },
      { name: "QuickBooks Advanced", description: "Financial management", icon: "💵" },
      { name: "Xero", description: "Accounting software", icon: "📒" },
      { name: "Expensify", description: "Expense management", icon: "🧾" },
    ],
    dataAllocation: "12GB MTN Data",
    price: 300,
    monthlyPrice: 300,
    features: ["Real-time Data", "Financial Reporting", "Tax Preparation", "Multi-currency Support"],
  },
  {
    id: "9",
    name: "Startup Pro Bundle",
    slug: "startup-pro",
    segment: "Startups & Gig Workers",
    icon: "🚀",
    description: "Essential tools for freelancers and entrepreneurs. Build your portfolio, find clients, and manage projects.",
    color: "from-pink-500 to-pink-700",
    tools: [
      { name: "Upwork", description: "Freelancing marketplace", icon: "💼" },
      { name: "Canva Resume", description: "CV and portfolio builder", icon: "📄" },
      { name: "Trello", description: "Project management", icon: "📋" },
      { name: "Invoice Ninja", description: "Invoicing software", icon: "📧" },
    ],
    dataAllocation: "8GB MTN Data",
    price: 90,
    monthlyPrice: 90,
    features: ["Portfolio Templates", "Client Management", "Time Tracking", "Payment Processing"],
  },
  {
    id: "10",
    name: "Gov-Connect Bundle",
    slug: "gov-connect",
    segment: "Government & Public",
    icon: "🏛️",
    description: "Secure digital tools for government operations. Encrypted communications and cloud services.",
    color: "from-slate-500 to-slate-700",
    tools: [
      { name: "Microsoft 365 GCC", description: "Government cloud suite", icon: "☁️" },
      { name: "Signal", description: "Encrypted messaging", icon: "🔐" },
      { name: "DocuSign", description: "Digital signatures", icon: "✒️" },
      { name: "Citrix Workspace", description: "Secure remote access", icon: "🖥️" },
    ],
    dataAllocation: "15GB MTN Data",
    price: 350,
    monthlyPrice: 350,
    features: ["End-to-end Encryption", "Compliance Ready", "Audit Trails", "Multi-factor Auth"],
  },
  {
    id: "11",
    name: "Legal-Pro Bundle",
    slug: "legal-pro",
    segment: "Legal & Judiciary",
    icon: "⚖️",
    description: "Digital law practice essentials. E-filing, document management, and case tracking for legal professionals.",
    color: "from-amber-500 to-amber-700",
    tools: [
      { name: "Clio", description: "Legal practice management", icon: "📁" },
      { name: "LexisNexis", description: "Legal research database", icon: "📚" },
      { name: "NetDocuments", description: "Document management", icon: "📂" },
      { name: "Court Notify", description: "E-filing system", icon: "⚖️" },
    ],
    dataAllocation: "10GB MTN Data",
    price: 275,
    monthlyPrice: 275,
    features: ["Case Management", "Legal Research", "Court Filing", "Client Portal"],
  },
];

export function getBundleBySlug(slug: string): Bundle | undefined {
  return bundles.find((bundle) => bundle.slug === slug);
}

export function getBundlesBySegment(segment: string): Bundle[] {
  return bundles.filter((bundle) => bundle.segment === segment);
}
