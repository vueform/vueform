const fs = require('fs');
const path = require('path');
const ncp = require('ncp');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// package.json

async function createInstance () {
  try {
    await exec('npm run build:instance')
  } catch (e) {
    console.error(e);
  }
}

function copyFile(source, target, cb) {
  var cbCalled = false;

  var rd = fs.createReadStream(source);
  rd.on("error", function(err) {
    done(err);
  });
  var wr = fs.createWriteStream(target);
  wr.on("error", function(err) {
    done(err);
  });
  wr.on("close", function(ex) {
    done();
  });
  rd.pipe(wr);

  function done(err) {
    if (!cbCalled) {
      cb(err);
      cbCalled = true;
    }
  }
}

function createLicense() {
  let license = fs.readFileSync(path.resolve(__dirname, './../LICENSE.txt'), 'UTF-8')
  const vars = {
    domains: ['localhost'],
  }

  Object.keys(vars).forEach((key) => {
    var value = vars[key]

    if (Array.isArray(value)) {
      value = value.join(', ')
    }

    var regex = new RegExp(`\{${key}\}`, 'g')

    license = license.replace(regex, value)
  })


  fs.writeFileSync(path.resolve(__dirname, './../../vueform-api/storage/instances/7ass8f438/1.0.0/vueform/LICENSE.txt'), license)
}

function createPackageJson() {
  let packageJson = fs.readFileSync(path.resolve(__dirname, './../package.json.template'), 'UTF-8')

  fs.writeFileSync(path.resolve(__dirname, './../../vueform-api/storage/instances/7ass8f438/1.0.0/vueform/package.json'), packageJson)
}

async function run () {
  console.log('obfuscating installer.js')
  await createInstance()
  console.log('installer.js was copied to destination')

  files.forEach((file) => {
    copyFile(path.resolve(__dirname, './../' + file), path.resolve(__dirname, './../../vueform-api/storage/instances/7ass8f438/1.0.0/vueform/' + file), (err) => {
      if (err) throw err;
      console.log(file + ' was copied to destination');
    });
  })

  ncp(path.resolve(__dirname, './../src/themes'), path.resolve(__dirname, './../../vueform-api/storage/instances/7ass8f438/1.0.0/vueform/themes'), function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('themes was copied to destination');
  });

  ncp(path.resolve(__dirname, './../src/locales'), path.resolve(__dirname, './../../vueform-api/storage/instances/7ass8f438/1.0.0/vueform/locales'), function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('locales was copied to destination');
  });

  createLicense()
  createPackageJson()
}

const files = [
  'dist/index.js',
  'dist/partials/components.js',
  'dist/partials/config.js',
  'dist/partials/useVueform.js',
  'dist/partials/Vueform.js',
  'README.md',
  'tailwind.js',
]

run()