// Combinations data exported as an array of objects
export const combinations = [
  // School Combinations (10)
  {
    id: 'pcm',
    level: 'school',
    subjects: ['physics', 'chemistry', 'mathematics'],
    label: 'PCM',
    careers: [
      { title: 'Mechanical Engineer', description: 'Design and build mechanical systems.', industries: ['ENGINEERING', 'MANUFACTURING'], exams: ['JEE Mains', 'JEE Advanced'], salary: '₹6L - ₹15L' },
      { title: 'Data Scientist', description: 'Analyze complex data sets.', industries: ['TECHNOLOGY', 'FINANCE'], exams: ['JEE', 'BITSAT'], salary: '₹8L - ₹25L' }
    ],
    higherEducation: [
      { degree: 'BTech Mechanical Engineering', where: 'IITs, NITs', exam: 'JEE' },
      { degree: 'BSc Mathematics', where: 'Delhi University', exam: 'CUET' }
    ],
    industries: ['Technology', 'Engineering'],
    note: 'The traditional engineering pathway.'
  },
  {
    id: 'pcb',
    level: 'school',
    subjects: ['physics', 'chemistry', 'biology'],
    label: 'PCB',
    careers: [
      { title: 'Doctor / Physician', description: 'Diagnose and treat medical conditions.', industries: ['HEALTHCARE'], exams: ['NEET'], salary: '₹8L - ₹30L' },
      { title: 'Biotechnologist', description: 'Research in biological sciences.', industries: ['RESEARCH', 'PHARMA'], exams: ['NEET', 'CUET'], salary: '₹5L - ₹12L' }
    ],
    higherEducation: [
      { degree: 'MBBS', where: 'AIIMS, State Medical Colleges', exam: 'NEET' }
    ],
    industries: ['Healthcare', 'Research'],
    note: 'The primary medical pathway.'
  },
  {
    id: 'pcmb',
    level: 'school',
    subjects: ['physics', 'chemistry', 'mathematics', 'biology'],
    label: 'PCMB',
    careers: [
      { title: 'Biomedical Engineer', description: 'Combine engineering principles with medical sciences.', industries: ['HEALTHCARE', 'TECHNOLOGY'], exams: ['JEE', 'NEET'], salary: '₹6L - ₹18L' }
    ],
    higherEducation: [
      { degree: 'BTech Biotechnology', where: 'IITs, NITs', exam: 'JEE' }
    ],
    industries: ['Healthcare', 'Engineering'],
    note: 'Keeps both medical and engineering options open.'
  },
  {
    id: 'pcm-cs',
    level: 'school',
    subjects: ['physics', 'chemistry', 'mathematics', 'computer-science-school'],
    label: 'PCM + CS',
    careers: [
      { title: 'Software Engineer', description: 'Develop software and systems.', industries: ['TECHNOLOGY'], exams: ['JEE'], salary: '₹10L - ₹30L' }
    ],
    higherEducation: [
      { degree: 'BTech Computer Science', where: 'IITs, NITs, IIITs', exam: 'JEE' }
    ],
    industries: ['Technology'],
    note: 'The definitive path for computer science.'
  },
  {
    id: 'commerce-maths',
    level: 'school',
    subjects: ['accountancy', 'business-studies', 'economics-school', 'mathematics'],
    label: 'Commerce with Maths',
    careers: [
      { title: 'Chartered Accountant', description: 'Manage financial accounts and audits.', industries: ['FINANCE', 'CONSULTING'], exams: ['CA Foundation'], salary: '₹8L - ₹25L' },
      { title: 'Investment Banker', description: 'Corporate finance and advisory.', industries: ['FINANCE'], exams: ['CUET'], salary: '₹12L - ₹40L' }
    ],
    higherEducation: [
      { degree: 'BCom (Hons)', where: 'SRCC, Delhi University', exam: 'CUET' }
    ],
    industries: ['Finance', 'Business'],
    note: 'Strong foundation for quantitative finance.'
  },
  {
    id: 'commerce-no-maths',
    level: 'school',
    subjects: ['accountancy', 'business-studies', 'economics-school'],
    label: 'Commerce without Maths',
    careers: [
      { title: 'Marketing Manager', description: 'Lead marketing strategies.', industries: ['MARKETING', 'BUSINESS'], exams: ['CUET'], salary: '₹6L - ₹18L' }
    ],
    higherEducation: [
      { degree: 'BBA', where: 'Various Universities', exam: 'CUET' }
    ],
    industries: ['Business', 'Marketing'],
    note: 'Focuses on core business principles.'
  },
  {
    id: 'humanities',
    level: 'school',
    subjects: ['history', 'geography', 'political-science', 'english'],
    label: 'Humanities Core',
    careers: [
      { title: 'Civil Servant', description: 'Public administration.', industries: ['GOVERNMENT'], exams: ['UPSC'], salary: '₹8L - ₹20L' },
      { title: 'Journalist', description: 'Reporting and news analysis.', industries: ['MEDIA'], exams: ['CUET'], salary: '₹4L - ₹12L' }
    ],
    higherEducation: [
      { degree: 'BA Political Science', where: 'Delhi University, JNU', exam: 'CUET' }
    ],
    industries: ['Government', 'Media'],
    note: 'Excellent for UPSC and civil services.'
  },
  {
    id: 'humanities-psych',
    level: 'school',
    subjects: ['psychology', 'sociology', 'english'],
    label: 'Humanities + Psychology',
    careers: [
      { title: 'Clinical Psychologist', description: 'Mental health assessment and therapy.', industries: ['HEALTHCARE'], exams: ['CUET'], salary: '₹5L - ₹15L' }
    ],
    higherEducation: [
      { degree: 'BA Psychology', where: 'Delhi University, Christ University', exam: 'CUET' }
    ],
    industries: ['Healthcare', 'Research'],
    note: 'Focuses on human behavior.'
  },
  {
    id: 'pcm-econ',
    level: 'school',
    subjects: ['physics', 'chemistry', 'mathematics', 'economics-school'],
    label: 'PCM + Economics',
    careers: [
      { title: 'Quantitative Analyst', description: 'Mathematical modeling in finance.', industries: ['FINANCE'], exams: ['JEE', 'CUET'], salary: '₹12L - ₹35L' }
    ],
    higherEducation: [
      { degree: 'BSc Economics & Mathematics', where: 'Ashoka, DU', exam: 'CUET' }
    ],
    industries: ['Finance', 'Analytics'],
    note: 'A rare blend of hard science and economics.'
  },
  {
    id: 'finearts-psych',
    level: 'school',
    subjects: ['fine-arts', 'english', 'psychology'],
    label: 'Arts & Psychology',
    careers: [
      { title: 'Art Therapist', description: 'Therapy using creative processes.', industries: ['HEALTHCARE', 'EDUCATION'], exams: ['CUET'], salary: '₹4L - ₹10L' }
    ],
    higherEducation: [
      { degree: 'BA Fine Arts', where: 'NID, MSU', exam: 'NID DAT' }
    ],
    industries: ['Design', 'Healthcare'],
    note: 'Creative and therapeutic application.'
  },

  // Undergraduate Combinations (15)
  {
    id: 'cs-psych-stats',
    level: 'undergraduate',
    subjects: ['cs-ug', 'psychology-ug', 'statistics-ug'],
    label: 'CS + Psych + Stats',
    careers: [
      { title: 'UX Researcher', description: 'Analyze user behavior using data.', industries: ['TECHNOLOGY', 'DESIGN'], exams: ['None'], salary: '₹8L - ₹20L' },
      { title: 'AI Ethics Specialist', description: 'Ensure ethical AI development.', industries: ['TECHNOLOGY'], exams: ['GRE'], salary: '₹10L - ₹25L' }
    ],
    higherEducation: [
      { degree: 'MSc Human-Computer Interaction', where: 'NID, IITs', exam: 'CEED' },
      { degree: 'MSc Cognitive Science', where: 'IIT Gandhinagar', exam: 'COGJET' }
    ],
    industries: ['Technology', 'Research'],
    note: 'Perfect for cutting-edge AI and UX roles.'
  },
  {
    id: 'cs-stats-maths',
    level: 'undergraduate',
    subjects: ['cs-ug', 'statistics-ug', 'mathematics-ug'],
    label: 'Data Science Core',
    careers: [
      { title: 'Machine Learning Engineer', description: 'Build predictive models.', industries: ['TECHNOLOGY'], exams: ['GATE'], salary: '₹12L - ₹35L' }
    ],
    higherEducation: [
      { degree: 'MTech Data Science', where: 'IITs, IISc', exam: 'GATE' }
    ],
    industries: ['Technology'],
    note: 'The pure math and coding route.'
  },
  {
    id: 'cs-econ-stats',
    level: 'undergraduate',
    subjects: ['cs-ug', 'economics-ug', 'statistics-ug'],
    label: 'CS + Econ + Stats',
    careers: [
      { title: 'Algorithmic Trader', description: 'Automated trading strategies.', industries: ['FINANCE'], exams: ['CAT'], salary: '₹15L - ₹50L' }
    ],
    higherEducation: [
      { degree: 'MBA Finance', where: 'IIMs', exam: 'CAT' }
    ],
    industries: ['Finance', 'Technology'],
    note: 'Highly lucrative combination for FinTech.'
  },
  {
    id: 'mech-cs',
    level: 'undergraduate',
    subjects: ['mechanical-eng', 'cs-ug'],
    label: 'Robotics Core',
    careers: [
      { title: 'Robotics Engineer', description: 'Design automated systems.', industries: ['MANUFACTURING', 'TECH'], exams: ['GATE'], salary: '₹8L - ₹22L' }
    ],
    higherEducation: [
      { degree: 'MTech Robotics', where: 'IITs', exam: 'GATE' }
    ],
    industries: ['Manufacturing', 'Technology'],
    note: 'Bridging physical and digital.'
  },
  {
    id: 'bba-data',
    level: 'undergraduate',
    subjects: ['bba', 'data-analytics'],
    label: 'Business Analytics',
    careers: [
      { title: 'Business Analyst', description: 'Data-driven business decisions.', industries: ['CONSULTING', 'TECH'], exams: ['CAT'], salary: '₹7L - ₹18L' }
    ],
    higherEducation: [
      { degree: 'MBA Business Analytics', where: 'IIMs, ISB', exam: 'CAT' }
    ],
    industries: ['Business', 'Technology'],
    note: 'Modern business management.'
  },
  {
    id: 'bcom-cs-fin',
    level: 'undergraduate',
    subjects: ['bcom', 'cs-ug', 'finance-ug'],
    label: 'FinTech Commerce',
    careers: [
      { title: 'Financial Technology Consultant', description: 'Implement financial software.', industries: ['FINANCE'], exams: ['CAT'], salary: '₹9L - ₹20L' }
    ],
    higherEducation: [
      { degree: 'MBA Finance', where: 'IIMs', exam: 'CAT' }
    ],
    industries: ['Finance', 'Technology'],
    note: 'Commerce adapted for the digital age.'
  },
  {
    id: 'psych-socio-econ',
    level: 'undergraduate',
    subjects: ['psychology-ug', 'sociology-ug', 'economics-ug'],
    label: 'Behavioral Economics',
    careers: [
      { title: 'Policy Analyst', description: 'Analyze public policy impact.', industries: ['GOVERNMENT', 'NGO'], exams: ['UPSC'], salary: '₹6L - ₹15L' }
    ],
    higherEducation: [
      { degree: 'MA Public Policy', where: 'NLSIU, TISS', exam: 'TISSNET' }
    ],
    industries: ['Government', 'Research'],
    note: 'Understanding societal behavior.'
  },
  {
    id: 'english-masscomm',
    level: 'undergraduate',
    subjects: ['english-ug', 'mass-comm', 'psychology-ug'],
    label: 'Media Psychology',
    careers: [
      { title: 'PR Manager', description: 'Manage brand perception.', industries: ['MEDIA', 'CORPORATE'], exams: ['CAT'], salary: '₹5L - ₹16L' }
    ],
    higherEducation: [
      { degree: 'PG Diploma in PR', where: 'IIMC', exam: 'IIMC Entrance' }
    ],
    industries: ['Media', 'Communications'],
    note: 'Communication strategy and media.'
  },
  {
    id: 'bio-chem-stats',
    level: 'undergraduate',
    subjects: ['biology-ug', 'chemistry-ug', 'statistics-ug'],
    label: 'Bio-Statistics',
    careers: [
      { title: 'Epidemiologist', description: 'Study disease patterns.', industries: ['HEALTHCARE', 'RESEARCH'], exams: ['GRE'], salary: '₹8L - ₹20L' }
    ],
    higherEducation: [
      { degree: 'MSc Biostatistics', where: 'CMC Vellore, JIPMER', exam: 'Institute Test' }
    ],
    industries: ['Healthcare', 'Research'],
    note: 'Crucial for public health research.'
  },
  {
    id: 'econ-maths-stats',
    level: 'undergraduate',
    subjects: ['economics-ug', 'mathematics-ug', 'statistics-ug'],
    label: 'Actuarial Core',
    careers: [
      { title: 'Actuary', description: 'Assess financial risks.', industries: ['INSURANCE', 'FINANCE'], exams: ['ACET'], salary: '₹10L - ₹30L' }
    ],
    higherEducation: [
      { degree: 'MSc Statistics', where: 'ISI, IITs', exam: 'JAM' }
    ],
    industries: ['Insurance', 'Finance'],
    note: 'Highly specialized quantitative path.'
  },
  {
    id: 'law-econ-cs',
    level: 'undergraduate',
    subjects: ['law-ug', 'economics-ug', 'cs-ug'],
    label: 'Tech Law',
    careers: [
      { title: 'Cyber Law Consultant', description: 'Legal advisory on tech matters.', industries: ['LEGAL', 'TECH'], exams: ['CLAT PG'], salary: '₹10L - ₹25L' }
    ],
    higherEducation: [
      { degree: 'LLM Cyber Law', where: 'NLUs', exam: 'CLAT PG' }
    ],
    industries: ['Legal', 'Technology'],
    note: 'Niche focus on technology regulation.'
  },
  {
    id: 'design-psych-cs',
    level: 'undergraduate',
    subjects: ['design-ug', 'psychology-ug', 'cs-ug'],
    label: 'HCI Design',
    careers: [
      { title: 'Product Designer', description: 'End-to-end software design.', industries: ['TECHNOLOGY'], exams: ['CEED'], salary: '₹9L - ₹24L' }
    ],
    higherEducation: [
      { degree: 'MDes', where: 'IIT Bombay (IDC)', exam: 'CEED' }
    ],
    industries: ['Technology', 'Design'],
    note: 'Creative tech path.'
  },
  {
    id: 'biotech-chem-bio',
    level: 'undergraduate',
    subjects: ['biotechnology', 'chemistry-ug', 'biology-ug'],
    label: 'Biotech Core',
    careers: [
      { title: 'Geneticist', description: 'Study genetics and heredity.', industries: ['RESEARCH', 'HEALTHCARE'], exams: ['GATE'], salary: '₹6L - ₹18L' }
    ],
    higherEducation: [
      { degree: 'MTech Biotechnology', where: 'IITs', exam: 'GATE' }
    ],
    industries: ['Research', 'Healthcare'],
    note: 'Pure biological sciences.'
  },
  {
    id: 'electrical-cs',
    level: 'undergraduate',
    subjects: ['electrical-eng', 'cs-ug'],
    label: 'IoT Core',
    careers: [
      { title: 'Embedded Systems Engineer', description: 'Hardware-software integration.', industries: ['TECHNOLOGY', 'MANUFACTURING'], exams: ['GATE'], salary: '₹8L - ₹22L' }
    ],
    higherEducation: [
      { degree: 'MTech VLSI', where: 'IITs', exam: 'GATE' }
    ],
    industries: ['Technology', 'Manufacturing'],
    note: 'Hardware meets software.'
  },
  {
    id: 'cs-maths',
    level: 'undergraduate',
    subjects: ['cs-ug', 'mathematics-ug'],
    label: 'Theoretical CS',
    careers: [
      { title: 'Cryptography Engineer', description: 'Secure communication systems.', industries: ['SECURITY', 'TECH'], exams: ['GATE'], salary: '₹12L - ₹35L' }
    ],
    higherEducation: [
      { degree: 'MSc Mathematics', where: 'CMI, ISI', exam: 'CMI Entrance' }
    ],
    industries: ['Technology', 'Security'],
    note: 'Mathematical foundations of computing.'
  },

  // Postgraduate Combinations (10)
  {
    id: 'mba-btech',
    level: 'postgraduate',
    subjects: ['mba', 'mtech-cs'],
    label: 'Tech Management',
    careers: [
      { title: 'Product Manager', description: 'Lead technical product teams.', industries: ['TECHNOLOGY'], exams: ['None'], salary: '₹15L - ₹40L' }
    ],
    higherEducation: [
      { degree: 'Executive Management', where: 'IIMs', exam: 'GMAT' }
    ],
    industries: ['Technology', 'Business'],
    note: 'Classic path to tech leadership.'
  },
  {
    id: 'msc-data-econ',
    level: 'postgraduate',
    subjects: ['msc-datascience', 'msc-economics'],
    label: 'Economic Analytics',
    careers: [
      { title: 'Chief Economist', description: 'Data-driven economic forecasting.', industries: ['FINANCE', 'GOVERNMENT'], exams: ['None'], salary: '₹20L - ₹50L' }
    ],
    higherEducation: [
      { degree: 'PhD Economics', where: 'DSE, ISI', exam: 'NET' }
    ],
    industries: ['Finance', 'Research'],
    note: 'Advanced macro-economic modeling.'
  },
  {
    id: 'ma-psych-cs',
    level: 'postgraduate',
    subjects: ['ma-psychology', 'msc-cs'],
    label: 'Cognitive AI',
    careers: [
      { title: 'AI Researcher (Cognitive)', description: 'Model human thought in AI.', industries: ['RESEARCH', 'TECH'], exams: ['None'], salary: '₹15L - ₹35L' }
    ],
    higherEducation: [
      { degree: 'PhD Cognitive Science', where: 'IIT Kanpur', exam: 'GATE' }
    ],
    industries: ['Research', 'Technology'],
    note: 'Building human-like AI.'
  },
  {
    id: 'msc-stats-cs',
    level: 'postgraduate',
    subjects: ['msc-statistics', 'msc-cs'],
    label: 'Advanced AI',
    careers: [
      { title: 'Principal Data Scientist', description: 'Lead data science initiatives.', industries: ['TECHNOLOGY', 'FINANCE'], exams: ['None'], salary: '₹25L - ₹60L' }
    ],
    higherEducation: [
      { degree: 'PhD Machine Learning', where: 'IISc, IITs', exam: 'GATE' }
    ],
    industries: ['Technology'],
    note: 'The highest echelon of data science.'
  },
  {
    id: 'mtech-ai',
    level: 'postgraduate',
    subjects: ['mtech-ai'],
    label: 'Pure AI Specialization',
    careers: [
      { title: 'Deep Learning Engineer', description: 'Develop neural networks.', industries: ['TECHNOLOGY'], exams: ['None'], salary: '₹18L - ₹45L' }
    ],
    higherEducation: [
      { degree: 'PhD Artificial Intelligence', where: 'Top Global Universities', exam: 'GRE' }
    ],
    industries: ['Technology'],
    note: 'Specialized deep learning.'
  },
  {
    id: 'llm-cs',
    level: 'postgraduate',
    subjects: ['llm', 'msc-cs'],
    label: 'Tech Policy Expert',
    careers: [
      { title: 'Data Privacy Officer', description: 'Manage corporate data compliance.', industries: ['LEGAL', 'TECH'], exams: ['None'], salary: '₹15L - ₹35L' }
    ],
    higherEducation: [
      { degree: 'PhD Tech Law', where: 'NLUs', exam: 'NET' }
    ],
    industries: ['Legal', 'Technology'],
    note: 'Navigating complex global tech laws.'
  },
  {
    id: 'msc-bioinfo-stats',
    level: 'postgraduate',
    subjects: ['msc-bioinfo', 'msc-statistics'],
    label: 'Computational Biology',
    careers: [
      { title: 'Computational Biologist', description: 'Analyze biological data.', industries: ['RESEARCH', 'PHARMA'], exams: ['None'], salary: '₹12L - ₹28L' }
    ],
    higherEducation: [
      { degree: 'PhD Computational Biology', where: 'NCBS, IISER', exam: 'JGEEBILS' }
    ],
    industries: ['Research', 'Healthcare'],
    note: 'Data-driven drug discovery.'
  },
  {
    id: 'mba-data',
    level: 'postgraduate',
    subjects: ['mba', 'msc-datascience'],
    label: 'Analytics Strategy',
    careers: [
      { title: 'Analytics Director', description: 'Direct analytics strategy for enterprises.', industries: ['CONSULTING', 'CORPORATE'], exams: ['None'], salary: '₹30L - ₹70L' }
    ],
    higherEducation: [
      { degree: 'Executive Program', where: 'ISB', exam: 'None' }
    ],
    industries: ['Consulting', 'Business'],
    note: 'Leading data-driven companies.'
  },
  {
    id: 'ma-english-mgmt',
    level: 'postgraduate',
    subjects: ['ma-english', 'pgdm'],
    label: 'Corporate Communications',
    careers: [
      { title: 'Director of Corporate Comm', description: 'Lead global communications.', industries: ['CORPORATE', 'MEDIA'], exams: ['None'], salary: '₹15L - ₹40L' }
    ],
    higherEducation: [
      { degree: 'PhD Media Studies', where: 'JNU', exam: 'NET' }
    ],
    industries: ['Media', 'Business'],
    note: 'Mastery of narrative in business.'
  },
  {
    id: 'msc-enviro-econ',
    level: 'postgraduate',
    subjects: ['msc-enviro', 'msc-economics'],
    label: 'Environmental Economics',
    careers: [
      { title: 'Sustainability Consultant', description: 'Advising on green economic policies.', industries: ['CONSULTING', 'GOVERNMENT'], exams: ['None'], salary: '₹10L - ₹25L' }
    ],
    higherEducation: [
      { degree: 'PhD Sustainability', where: 'TERI', exam: 'NET' }
    ],
    industries: ['Consulting', 'Research'],
    note: 'Designing sustainable economic models.'
  }
];
