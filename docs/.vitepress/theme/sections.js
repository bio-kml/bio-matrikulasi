// Colour + icon for each top-level section. Pages under a section take on its
// colour (links, sidebar, buttons) and show a small section label.
export const sectionMeta = {
  lectures: { label: 'Lectures', icon: 'book-open', color: 'green' },
  tutorials: { label: 'Tutorials', icon: 'graduation-cap', color: 'blue' },
  labs: { label: 'Labs', icon: 'flask-conical', color: 'teal' },
  assessments: { label: 'Assessments', icon: 'clipboard-list', color: 'yellow' },
  exams: { label: 'Past Year Exams', icon: 'file-check', color: 'purple' },
  course: { label: 'Course Info', icon: 'calendar', color: 'red' },
  guide: { label: 'Guide', icon: 'lightbulb', color: 'green' }
}

// '/bio-matrikulasi/labs/lab-01' or '/labs/lab-01' -> 'labs'
export function sectionOf(path) {
  const parts = path.replace(/^\/bio-matrikulasi/, '').split('/').filter(Boolean)
  return sectionMeta[parts[0]] ? parts[0] : ''
}
