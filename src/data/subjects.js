// Subject data exported as an array of objects
export const subjects = [
  // School Level
  { id: 'physics', name: 'Physics', level: 'school', category: 'science' },
  { id: 'chemistry', name: 'Chemistry', level: 'school', category: 'science' },
  { id: 'mathematics', name: 'Mathematics', level: 'school', category: 'science' },
  { id: 'biology', name: 'Biology', level: 'school', category: 'science' },
  { id: 'computer-science-school', name: 'Computer Science', level: 'school', category: 'tech' },
  { id: 'economics-school', name: 'Economics', level: 'school', category: 'commerce' },
  { id: 'accountancy', name: 'Accountancy', level: 'school', category: 'commerce' },
  { id: 'business-studies', name: 'Business Studies', level: 'school', category: 'commerce' },
  { id: 'history', name: 'History', level: 'school', category: 'arts' },
  { id: 'geography', name: 'Geography', level: 'school', category: 'arts' },
  { id: 'political-science', name: 'Political Science', level: 'school', category: 'arts' },
  { id: 'sociology', name: 'Sociology', level: 'school', category: 'arts' },
  { id: 'english', name: 'English', level: 'school', category: 'arts' },
  { id: 'psychology', name: 'Psychology', level: 'school', category: 'arts' },
  { id: 'physical-edu', name: 'Physical Education', level: 'school', category: 'arts' },
  { id: 'fine-arts', name: 'Fine Arts', level: 'school', category: 'arts' },

  // Undergraduate Level
  { id: 'cs-ug', name: 'Computer Science', level: 'undergraduate', category: 'tech' },
  { id: 'psychology-ug', name: 'Psychology', level: 'undergraduate', category: 'arts' },
  { id: 'statistics-ug', name: 'Statistics', level: 'undergraduate', category: 'science' },
  { id: 'economics-ug', name: 'Economics', level: 'undergraduate', category: 'commerce' },
  { id: 'mathematics-ug', name: 'Mathematics', level: 'undergraduate', category: 'science' },
  { id: 'mechanical-eng', name: 'Mechanical Engineering', level: 'undergraduate', category: 'tech' },
  { id: 'electrical-eng', name: 'Electrical Engineering', level: 'undergraduate', category: 'tech' },
  { id: 'data-analytics', name: 'Data Analytics', level: 'undergraduate', category: 'tech' },
  { id: 'bba', name: 'Business Administration (BBA)', level: 'undergraduate', category: 'commerce' },
  { id: 'bcom', name: 'Commerce (BCom)', level: 'undergraduate', category: 'commerce' },
  { id: 'sociology-ug', name: 'Sociology', level: 'undergraduate', category: 'arts' },
  { id: 'english-ug', name: 'English', level: 'undergraduate', category: 'arts' },
  { id: 'mass-comm', name: 'Mass Communication', level: 'undergraduate', category: 'arts' },
  { id: 'biology-ug', name: 'Biology', level: 'undergraduate', category: 'science' },
  { id: 'chemistry-ug', name: 'Chemistry', level: 'undergraduate', category: 'science' },
  { id: 'law-ug', name: 'Law', level: 'undergraduate', category: 'arts' },
  { id: 'finance-ug', name: 'Finance', level: 'undergraduate', category: 'commerce' },
  { id: 'design-ug', name: 'Design', level: 'undergraduate', category: 'arts' },
  { id: 'biotechnology', name: 'Biotechnology', level: 'undergraduate', category: 'science' },

  // Postgraduate Level
  { id: 'mba', name: 'MBA', level: 'postgraduate', category: 'commerce' },
  { id: 'msc-datascience', name: 'MSc Data Science', level: 'postgraduate', category: 'tech' },
  { id: 'msc-cs', name: 'MSc Computer Science', level: 'postgraduate', category: 'tech' },
  { id: 'ma-psychology', name: 'MA Psychology', level: 'postgraduate', category: 'arts' },
  { id: 'msc-statistics', name: 'MSc Statistics', level: 'postgraduate', category: 'science' },
  { id: 'msc-economics', name: 'MSc Economics', level: 'postgraduate', category: 'commerce' },
  { id: 'mtech-cs', name: 'MTech Computer Science', level: 'postgraduate', category: 'tech' },
  { id: 'mtech-ai', name: 'MTech AI', level: 'postgraduate', category: 'tech' },
  { id: 'ma-english', name: 'MA English', level: 'postgraduate', category: 'arts' },
  { id: 'msc-bioinfo', name: 'MSc Bioinformatics', level: 'postgraduate', category: 'science' },
  { id: 'llm', name: 'LLM (Master of Laws)', level: 'postgraduate', category: 'arts' },
  { id: 'pgdm', name: 'PGDM', level: 'postgraduate', category: 'commerce' },
  { id: 'msc-enviro', name: 'MSc Environmental Science', level: 'postgraduate', category: 'science' }
];

export const getSubjectsByLevel = (level) => subjects.filter(sub => sub.level === level);
