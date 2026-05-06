import { getCategoryColor } from '../utils/helpers';

const SubjectTag = ({ subject, onRemove, animate = false }) => {
  if (!subject) return null;

  return (
    <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border ${getCategoryColor(subject.category)} ${animate ? 'animate-tag-in' : ''}`}>
      {subject.name}
      {onRemove && (
        <button
          type="button"
          onClick={() => onRemove(subject.id)}
          className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-slate-800/50 focus:outline-none"
          aria-label={`Remove ${subject.name}`}
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </span>
  );
};

export default SubjectTag;
