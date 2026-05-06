// Utility functions used across components
export const formatDate = (isoString) => {
  if (!isoString) return '';
  const date = new Date(isoString);
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
};

export const getConfidenceLabel = (score) => {
  if (score >= 0.85) return 'Exact Match';
  if (score >= 0.5) return 'Strong Match';
  return 'Partial Match';
};

export const getConfidenceColor = (label) => {
  switch (label) {
    case 'Exact Match':
      return 'bg-amber-500 text-navy-950 font-bold';
    case 'Strong Match':
      return 'bg-amber-500/20 text-amber-400 border border-amber-500/30';
    case 'Partial Match':
      return 'bg-slate-700/50 text-slate-300 border border-slate-600';
    default:
      return 'bg-slate-800 text-slate-400';
  }
};

export const getCategoryColor = (category) => {
  switch (category) {
    case 'science':
      return 'border-blue-500/30 bg-blue-500/10 text-blue-400';
    case 'arts':
      return 'border-red-500/30 bg-red-500/10 text-red-400';
    case 'commerce':
      return 'border-slate-500/30 bg-slate-500/10 text-slate-200';
    case 'tech':
      return 'border-amber-500/30 bg-amber-500/10 text-amber-400';
    default:
      return 'border-navy-600 bg-navy-800 text-slate-300';
  }
};

export const generateId = () => {
  return Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
};

export const truncate = (str, max) => {
  if (!str) return '';
  return str.length > max ? str.substring(0, max) + '...' : str;
};
