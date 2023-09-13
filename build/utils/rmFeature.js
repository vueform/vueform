import fs from 'fs'

export default function(feature, sourceFilePath, targetFilePath) {
  const startMarker = `/* @feat-start:${feature} */`;
  const endMarker = `/* @feat-end:${feature} */`;

  let ignoreLines = false;

  const readStream = fs.createReadStream(sourceFilePath, 'utf8');
  const writeStream = fs.createWriteStream(targetFilePath);

  readStream.on('data', function(chunk) {
      const lines = chunk.split('\n');
      for (let line of lines) {
          if (line.includes(startMarker)) {
              ignoreLines = true;
              continue;
          }
          if (line.includes(endMarker)) {
              ignoreLines = false;
              continue;
          }
          if (!ignoreLines) {
              writeStream.write(line + '\n');
          }
      }
  });

  readStream.on('end', function() {
      writeStream.end();
      console.log('File transformation completed.');
  });

  readStream.on('error', function(err) {
      console.error('Error reading the file:', err);
  });

  writeStream.on('error', function(err) {
      console.error('Error writing to the file:', err);
  });
}