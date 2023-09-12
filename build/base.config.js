import ncp from 'ncp'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import path from 'path'
import fs from 'fs'
import _ from 'lodash'

const files = [
  {
    input: 'bundles/dist/index.js',
    output: 'dist/index.js',
  },
  {
    input: 'bundles/dist/element.js',
    output: 'dist/element.js',
  },
  {
    input: 'bundles/dist/installer.js',
    output: 'dist/installer.js',
  },
  {
    input: 'bundles/dist/installer.noapi.js',
    output: 'dist/installer.noapi.js',
  },
]

const copy = [
  {
    from: 'bundles/dist/plugin.js',
    to: 'dist/plugin.js',
  },
]

const dirs = [
  path.resolve(__dirname, '../dist'),
]

_.each(dirs, (dir) => {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }
})

_.each(copy, (file) => {
  ncp(path.resolve(__dirname, '../', file.from), path.resolve(__dirname, '../', file.to), function (err) {
    if (err) {
      return console.error(err);
    }
  })
})

const createNoapiInstaller = () => {
  // Create no api installer source file
  const sourceFilePath = path.resolve(__dirname, '../src', 'installer.js'); // Replace with your source file path
  const targetFilePath = path.resolve(__dirname, '../src', 'installer.noapi.js'); // Replace with your desired new file path

  const startMarker = '/* @feat-start:api-key-validation */';
  const endMarker = '/* @feat-end:api-key-validation */';

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

createNoapiInstaller()

const exports = []

_.each(files, (file) => {
  exports.push({
    input: file.input,
    output: {
      file: file.output,
      format: 'esm',
      sourcemap: false,
    },
    plugins: [
      json(),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        exclude: /^(.+\/)?node_modules\/.+$/,
      }),
      nodeResolve(),
      terser(),
    ],
    external: ['vue', 'axios', 'lodash', 'moment']
  })
})

export default exports