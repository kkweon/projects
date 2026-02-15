import fs from 'fs';
import path from 'path';

const outputDir = 'public/images/generated';

const projects = [
  { id: 'asl-recognition', text: 'ASL Recognition', color: '#667eea' },
  { id: 'pr12', text: 'PR-12', color: '#667eea' },
  { id: 'nato-phonetic', text: 'NATO Phonetic', color: '#f093fb' },
  { id: 'blog-rest-api', text: 'Blog REST API', color: '#4ade80' },
  { id: 'css-autoprefixer', text: 'CSS Autoprefixer', color: '#fb923c' },
  { id: 'gbrowse', text: 'gbrowse', color: '#38bdf8' },
  { id: 'trello2text', text: 'Trello2Text', color: '#c084fc' },
  { id: 'caltrain-alexa', text: 'Alexa Skill', color: '#f472b6' },
  { id: 'reddit-crawler', text: 'Reddit Crawler', color: '#a78bfa' },
  { id: 'deeplearning-zero-to-all', text: 'DL & RL ZeroToAll', color: '#818cf8' },
];

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

projects.forEach((project) => {
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
  <rect width="600" height="400" fill="${project.color}"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="36" fill="white" font-weight="bold">${project.text}</text>
</svg>`;

  const filePath = path.join(outputDir, `${project.id}.svg`);
  fs.writeFileSync(filePath, svgContent);
  console.log(`Generated ${filePath}`);
});
