import { combinations } from '../data/combinations';

function getMatchedCombos(userSubjects, level) {
  const levelCombos = combinations.filter(combo => combo.level === level);

  if (!userSubjects || userSubjects.length === 0) return [];

  const userSubjectIds = userSubjects.map(sub => sub.id);

  const scored = levelCombos.map(combo => {
    let matchCount = 0;

    combo.subjects.forEach(subId => {
      if (userSubjectIds.includes(subId)) {
        matchCount++;
      }
    });

    const totalUnique = new Set([...combo.subjects, ...userSubjectIds]).size;
    const jaccardScore = matchCount / totalUnique;
    const coverageScore = matchCount / combo.subjects.length;

    // Final score: 40% jaccard + 60% coverage
    const finalScore = (jaccardScore * 0.4) + (coverageScore * 0.6);

    return {
      ...combo,
      score: finalScore,
      matchCount
    };
  });

  const filtered = scored.filter(combo => combo.matchCount > 0);
  filtered.sort((a, b) => b.score - a.score);

  return filtered.slice(0, 6);
}

export async function computeResults(subjects, level) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = getMatchedCombos(subjects, level);
      resolve(results);
    }, 800);
  });
}

export function reverseLookup(careerQuery, level, combinationsData) {
  if (!careerQuery) return [];

  const query = careerQuery.toLowerCase();

  return combinationsData
    .filter(combo => combo.level === level)
    .filter(combo => {
      const matchingCareers = combo.careers.filter(c =>
        c.title.toLowerCase().includes(query) ||
        c.description.toLowerCase().includes(query) ||
        c.industries.some(i => i.toLowerCase().includes(query))
      );

      if (matchingCareers.length > 0) {
        combo.matchedCareers = matchingCareers;
        return true;
      }
      return false;
    });
}
