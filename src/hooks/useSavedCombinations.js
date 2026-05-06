import { useState, useEffect } from 'react';
import { generateId, formatDate } from '../utils/helpers';

export const useSavedCombinations = () => {
  const [savedCombos, setSavedCombos] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('whatnext_saved_combos');
      if (stored) {
        setSavedCombos(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading saved combos:', error);
    }
  }, []);

  // Sync to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem('whatnext_saved_combos', JSON.stringify(savedCombos));
    } catch (error) {
      console.error('Error saving combos:', error);
    }
  }, [savedCombos]);

  const saveCombo = (level, subjects, results) => {
    const newCombo = {
      id: generateId(),
      level,
      subjects,
      results,
      nickname: `${level.charAt(0).toUpperCase() + level.slice(1)} Pathway`,
      savedAt: new Date().toISOString(),
      formattedDate: formatDate(new Date().toISOString())
    };

    setSavedCombos(prev => [newCombo, ...prev]);
    return newCombo;
  };

  const deleteCombo = (id) => {
    setSavedCombos(prev => prev.filter(c => c.id !== id));
  };

  const updateNickname = (id, newName) => {
    setSavedCombos(prev => prev.map(c => 
      c.id === id ? { ...c, nickname: newName } : c
    ));
  };

  const isAlreadySaved = (level, subjects) => {
    if (!subjects || subjects.length === 0) return false;
    
    return savedCombos.some(combo => {
      if (combo.level !== level) return false;
      if (combo.subjects.length !== subjects.length) return false;
      
      const savedIds = combo.subjects.map(s => s.id).sort();
      const currentIds = subjects.map(s => s.id).sort();
      
      return savedIds.every((id, index) => id === currentIds[index]);
    });
  };

  return {
    savedCombos,
    saveCombo,
    deleteCombo,
    updateNickname,
    isAlreadySaved
  };
};

export default useSavedCombinations;
