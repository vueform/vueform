const fs = require('fs');

function parseMarkdown(mdContent) {
  const regexVersion = /## v([\d.]+)\n/g;
  const regexDate = /> `([\d-]+)`/g;

  const versions = [];
  let currentVersion = null;

  let matchVersion;
  while ((matchVersion = regexVersion.exec(mdContent))) {
    if (currentVersion) {
      versions.push(currentVersion);
    }

    const version = matchVersion[1];

    const matchDate = regexDate.exec(mdContent);
    const date = matchDate[1];

    currentVersion = { version, date, available: true, notes: [] };

    const startIndex = matchVersion.index;
    let endIndex = mdContent.indexOf('## v', startIndex + 1);
    if (endIndex === -1) {
      endIndex = mdContent.length;
    }

    const versionContent = mdContent.substring(startIndex, endIndex);

    const features = parseFeaturesFixes(versionContent, '🎉 Feature');
    const fixes = parseFeaturesFixes(versionContent, '🐞 Bug Fixes');

    currentVersion.notes = [...features, ...fixes];
  }

  if (currentVersion) {
    versions.push(currentVersion);
  }

  return versions;
}

function parseFeaturesFixes(content, header) {
  const startMarker = `### ${header}\n`;
  const startIndex = content.indexOf(startMarker);
  if (startIndex === -1) {
    return [];
  }

  const endIndex = content.indexOf('###', startIndex + 1);
  const notesContent = content.substring(startIndex + startMarker.length, endIndex !== -1 ? endIndex : content.length);

  return notesContent
    .split('\n')
    .filter((note) => note.startsWith('- '))
    .map((note) => {
      const type = header === '🎉 Feature' ? 'feat' : 'fix';
      return `${type}: ${note.replace(/^- /, '').trim()}`;
    });
}

function saveToJsonFile(data, outputPath) {
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
  console.log(`Output has been saved to ${outputPath}`);
}

function main() {
  const inputPath = './CHANGELOG.md';
  const outputPath = './CHANGELOG.json';

  const mdContent = fs.readFileSync(inputPath, 'utf8');
  const jsonData = parseMarkdown(mdContent);
  saveToJsonFile(jsonData, outputPath);
}

main();
