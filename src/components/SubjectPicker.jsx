import { useState, useRef, useEffect } from 'react';
import { getSubjectsByLevel } from '../data/subjects';
import SubjectTag from './SubjectTag';
import { getCategoryColor } from '../utils/helpers';

const SubjectPicker = ({ level, selectedSubjects, onAdd, onRemove }) => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const inputRef = useRef(null);

  // Focus input when level changes
  useEffect(() => {
    if (level && inputRef.current) {
      inputRef.current.focus();
    }
  }, [level]);

  const categories = [
    { id: 'all', label: 'All Subjects', dot: '' },
    { id: 'science', label: 'Science', dot: 'bg-blue-500' },
    { id: 'arts', label: 'Arts', dot: 'bg-red-500' },
    { id: 'commerce', label: 'Commerce', dot: 'bg-slate-200' },
    { id: 'tech', label: 'Technology', outline: true }
  ];

  let filteredSubjects = [];
  if (level) {
    let subjects = getSubjectsByLevel(level);
    
    // Filter out already selected
    const selectedIds = selectedSubjects.map(s => s.id);
    subjects = subjects.filter(s => !selectedIds.includes(s.id));
    
    // Filter by category
    if (activeCategory !== 'all') {
      subjects = subjects.filter(s => s.category === activeCategory);
    }
    
    // Filter by search query
    if (query.trim()) {
      const lowerQuery = query.toLowerCase();
      subjects = subjects.filter(s => s.name.toLowerCase().includes(lowerQuery));
    }
    
    filteredSubjects = subjects;
  }

  const handleAdd = (subject) => {
    if (selectedSubjects.length >= 6) {
      alert("Maximum 6 subjects can be selected.");
      return;
    }
    onAdd(subject);
    setQuery('');
  };

  if (!level) return null;

  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold font-display">Step 2: Pick your interests</h3>
        <span className="text-sm text-slate-400">{selectedSubjects.length}/6 selected</span>
      </div>

      {/* Selected Subjects */}
      {selectedSubjects.length > 0 && (
        <div className="flex flex-wrap gap-2 p-4 bg-navy-800 rounded-xl border border-navy-700 min-h-[70px]">
          {selectedSubjects.map(subject => (
            <SubjectTag 
              key={subject.id} 
              subject={subject} 
              onRemove={onRemove}
              animate={true}
            />
          ))}
        </div>
      )}

      {/* Search Box */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full pl-10 pr-10 py-3 border border-navy-700 rounded-xl bg-navy-900 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow"
          placeholder="Search subjects..."
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors flex items-center gap-2
              ${activeCategory === cat.id 
                ? 'bg-slate-700 text-white border-slate-600' 
                : 'bg-navy-800 text-slate-400 border-navy-700 hover:bg-navy-700 hover:text-slate-200'}`}
          >
            {cat.dot && <span className={`w-2 h-2 rounded-full ${cat.dot}`}></span>}
            {cat.outline && <span className="w-2 h-2 rounded-full border border-current"></span>}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Subject Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-[300px] overflow-y-auto pr-2 pb-4">
        {filteredSubjects.length === 0 ? (
          <div className="col-span-full py-8 text-center text-slate-500">
            No subjects found matching your criteria.
          </div>
        ) : (
          filteredSubjects.map(subject => (
            <button
              key={subject.id}
              onClick={() => handleAdd(subject)}
              className={`text-left px-3 py-2 rounded-lg border text-sm transition-all hover:scale-105 active:scale-95 ${getCategoryColor(subject.category)} opacity-80 hover:opacity-100`}
            >
              {subject.name}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default SubjectPicker;
