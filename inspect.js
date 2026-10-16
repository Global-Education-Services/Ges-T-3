const fs = require('fs');

const b = fs.readFileSync('../ges-test6-2/ges-bundle.js', 'utf8');
const matches = b.match(/path:\s*['"]([^'"]+)['"]/g) || [];
const routes = [...new Set(matches.map(m => m.replace(/path:\s*['"]/, '').replace(/['"]/, '')))];
console.log('Routes:', routes);

// Check color codes in bundle
const hexColors = b.match(/#[0-9a-fA-F]{3,6}\b/g) || [];
const colorCounts = {};
hexColors.forEach(c => {
  const norm = c.toLowerCase();
  colorCounts[norm] = (colorCounts[norm] || 0) + 1;
});
const sortedColors = Object.entries(colorCounts).sort((a,b) => b[1] - a[1]);
console.log('Top colors:', sortedColors.slice(0, 15));
